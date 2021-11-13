import { TokensLoginDto } from "../models/Tokens";
import UserType from "../models/UserType";
import client, { serverUrl } from "./apolloClient";
import queries from "./queries";
import TokensHandler from "./TokensHandler";

class UserHandler {
  _SetUser: React.Dispatch<React.SetStateAction<UserType | null>>;
  Online = false;
  TokensHandler: TokensHandler;

  constructor(
    setUser: React.Dispatch<React.SetStateAction<UserType | null>>,
    tokensHandler: TokensHandler
  ) {
    this._SetUser = setUser;
    this.TokensHandler = tokensHandler;
  }
  SetUser = (user: UserType | null) => {
    this.Online = !!user;
    this._SetUser(user);
    console.log(this.Online)
  }
  Login = async (username: string, password: string) => {
    const tokens = await this.GetTokensLogin(username, password);
    if (tokens?.token && tokens.refreshToken) {
      const user = await this.GetUser(tokens.token);
      this.SetUser(user);
    }
    await this.TokensHandler.StoreTokens(tokens);
  };
  InitializeUser = async () => {
    await this.TokensHandler.RefreshTokens();
    const token = await this.TokensHandler.GetToken();
    const user = await this.GetUser(token);
    this.SetUser(user);
  }
  GetTokensLogin = async (username: string, password: string): Promise<TokensLoginDto | null> => {
    const result = await fetch(serverUrl + "/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify({ username, password })
    });
    const tokens = await result.json() as TokensLoginDto | null;
    return tokens;
  };
  GetUser = async (token: string) => {
    const graphResult = await client.query({
      query: queries.getSelf,
      context: {
        headers: {
          "Authorization": `bearer ${token}`
        }
      }
    });
    const user = graphResult.data?.self as UserType | null;
    return user;
  };
};

export default UserHandler;