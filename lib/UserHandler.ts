import { TokensLoginDto } from "../models/Tokens";
import UserType from "../models/UserType";
import client, { serverUrl } from "./apolloClient";
import queries from "./queries";
import TokensHandler from "./TokensHandler";

interface Props {
  setUser: React.Dispatch<React.SetStateAction<UserType | null>>,
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>,
  isOnline: boolean,
  user: UserType | null,
  setIsOnline: React.Dispatch<React.SetStateAction<boolean>>,
  tokensHandler: TokensHandler
}

class UserHandler {
  _SetUser: React.Dispatch<React.SetStateAction<UserType | null>>;
  SetIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
  User: UserType | null;
  Online: boolean;
  SetIsOnline: React.Dispatch<React.SetStateAction<boolean>>;
  TokensHandler: TokensHandler;

  constructor({
    user,
    setUser,
    setIsLoading,
    isOnline,
    setIsOnline,
    tokensHandler
  }: Props) {
    this.User = user;
    this._SetUser = setUser;
    this.SetIsLoading = setIsLoading;
    this.Online = isOnline;
    this.SetIsOnline = setIsOnline;
    this.TokensHandler = tokensHandler;
  }
  SetUser = (user: UserType | null) => {
    this.SetIsOnline(!!user);
    this._SetUser(user);
  }
  Login = async (username: string, password: string) => {
    const tokens = await this.GetTokensLogin(username, password);
    if (tokens?.token && tokens.refreshToken) {
      const user = await this.GetUser(tokens.token);
      this.SetUser(user);
    }
    await this.TokensHandler.StoreTokens(tokens);
  };
  Logout = async () => {
    this.TokensHandler.RemoveTokens();
    this.SetIsOnline(false);
    this.SetUser(null);
  };
  InitializeUser = async () => {
    this.SetIsLoading(true);
    await this.TokensHandler.RefreshTokens();
    const token = await this.TokensHandler.GetToken();
    const user = await this.GetUser(token);
    this.SetUser(user);
    this.SetIsLoading(false);
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