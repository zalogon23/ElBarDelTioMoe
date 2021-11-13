import { AsyncStorage, Platform } from "react-native";
import Storage from "react-native-storage";
import { TokensLoginDto } from "../models/Tokens";
import { serverUrl } from "./apolloClient";

class TokensHandler {
  Storage: Storage;
  constructor() {
    const osStorage = Platform.OS === "web" ? window.localStorage : AsyncStorage;
    const storage = new Storage({
      size: 1000,
      storageBackend: osStorage
    });
    this.Storage = storage;
  }
  StoreTokens = async (tokens: TokensLoginDto | null) => {
    if (tokens && tokens?.token && tokens?.refreshToken) {
      await this.StoreToken(tokens.token);
      await this.StoreRefreshToken(tokens.refreshToken);
    }
  }
  StoreToken = async (token: string) => {
    await this.Storage.save({ key: "token", data: token })
  }
  StoreRefreshToken = async (refreshToken: string) => {
    await this.Storage.save({ key: "refresh-token", data: refreshToken })
  }
  GetToken = async (): Promise<string> => {
    try {
      const token = await this.Storage.load<string>({ key: "token" });
      return token;
    } catch (e: any) {
      console.log(e.message);
      return "";
    }
  }
  GetRefreshToken = async (): Promise<string> => {
    try {
      const refreshToken = await this.Storage.load<string>({ key: "refresh-token" });
      return refreshToken;
    } catch (e: any) {
      console.log(e.message);
      return "";
    }
  }
  RefreshTokens = async () => {
    const refreshToken = await this.GetRefreshToken();
    const result = await fetch(serverUrl + "/refresh", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify({ refreshToken })
    });
    const tokens = await result.json() as TokensLoginDto;
    if (tokens.token && tokens.refreshToken) {
      await this.StoreToken(tokens.token);
      await this.StoreRefreshToken(tokens.refreshToken);
    }
  }
}

export default TokensHandler;