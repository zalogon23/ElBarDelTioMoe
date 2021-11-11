import React, { createContext, ReactElement } from "react";
import { AsyncStorage, Platform } from "react-native";
import Storage from "react-native-storage";

interface Props {
  children: ReactElement | ReactElement[]
}

interface TokensContextProps {
  storeToken: (token: string) => Promise<void>,
  storeRefreshToken: (refreshToken: string) => Promise<void>,
  getToken: () => Promise<string>,
  getRefreshToken: () => Promise<string>,
}

const tokensContext = createContext({} as TokensContextProps);

export default function TokensProvider({ children }: Props) {
  const osStorage = Platform.OS === "web" ? window.localStorage : AsyncStorage;
  const storage = new Storage({
    size: 1000,
    storageBackend: osStorage
  });
  return (
    <tokensContext.Provider value={{
      storeToken,
      storeRefreshToken,
      getToken,
      getRefreshToken
    }}>
      {children}
    </tokensContext.Provider>
  )

  async function storeToken(token: string) {
    try {
      await storage.save({ key: "token", data: token });
    } catch (err: any) {
      console.log(err.message);
    }
  }
  async function storeRefreshToken(refreshToken: string) {
    try {
      await storage.save({ key: "refresh-token", data: refreshToken });
    } catch (err: any) {
      console.log(err.message);
    }
  }
  async function getToken(): Promise<string> {
    try {
      const token = await storage.load<string>({ key: "token" });
      console.log(token);
      return token;
    } catch (err: any) {
      console.log(err.message);
      return "";
    }
  }
  async function getRefreshToken(): Promise<string> {
    try {
      const refreshToken = await storage.load<string>({ key: "refresh-token" });
      console.log(refreshToken);
      return refreshToken;
    } catch (err: any) {
      console.log(err.message);
      return "";
    }
  }
}

export { tokensContext }