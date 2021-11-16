import { TokensLoginDto } from "../models/Tokens";
import UserHandler from "../models/UserHandler";
import UserType from "../models/UserType";
import client, { serverUrl } from "./apolloClient";
import LocalUserHandler from "./LocalUserHandler";
import OnlineUserHandler from "./OnlineUserHandler";
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

class SessionHandler {
  _SetUser: React.Dispatch<React.SetStateAction<UserType | null>>;
  SetIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
  User: UserType | null;
  Online: boolean;
  SetIsOnline: React.Dispatch<React.SetStateAction<boolean>>;
  TokensHandler: TokensHandler;
  UserHandler: UserHandler;

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
    this.UserHandler = new OnlineUserHandler();
  }
  SetUser = (user: UserType | null) => {
    this.SetIsOnline(user?.isOnline ?? false);
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
  Register = async (username: string, password: string): Promise<boolean> => {
    const graphResult = await client.mutate({
      mutation: queries.createUser, variables: {
        user: {
          username,
          password,
          description: "",
          avatar: ""
        }
      }
    });
    const user = graphResult.data?.createUser as UserType | null;
    return !!user;
  };
  Logout = async () => {
    this.TokensHandler.RemoveTokens();
    this.SetIsOnline(false);
    this.UserHandler = new LocalUserHandler();
    const user = await this.UserHandler.GetUser("");
    this.SetUser(user);
  };
  InitializeUser = async () => {
    this.SetIsLoading(true);
    await this.TokensHandler.RefreshTokens();
    const token = await this.TokensHandler.GetToken();
    let user = await this.GetUser(token);
    if (!user) {
      this.UserHandler = new LocalUserHandler();
      user = await this.UserHandler.GetUser("");
    }
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
    const user = await this.UserHandler.GetUser(token);
    return user;
  };
};

export default SessionHandler;