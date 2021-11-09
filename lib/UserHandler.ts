import { setContext } from "@apollo/client/link/context";
import { AsyncStorage, Platform } from "react-native";
import Storage from "react-native-storage";
import UserType from "../models/UserType";
import client, { serverUrl } from "./apolloClient";
import queries from "./queries";

export default class UserHandler {
  User: UserType | null = null;
  Storage: Storage | null = null;
  Token: string = "";
  RefreshToken: string = "";

  constructor() {
    (async () => {
      const storagePlace = Platform.OS === "web" ? window.localStorage : AsyncStorage;
      this.Storage = new Storage({
        size: 1000,
        storageBackend: storagePlace
      });
      try {
        this.Token = await this.Storage.load<string>({ key: "token" }) ?? "";
      } catch (e) {
        console.log("There was a problem with the storage method ")
      }
      this.UpdateQueryToken();
      this.RefreshTokens();
      this.User = await this.GetUser();
    })()
  }
  async Login(username: string, password: string) {
    const json = await fetch(serverUrl + "/login", {
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify({ username, password }),
      method: "POST"
    });
    const result = await json.json() as { token: string, refresh: string };
    if (result === null || !result.token) {
      return null
    }
    this.Token = result.token;
    this.StoreToken(this.Token);
    this.StoreRefresh(this.RefreshToken);
    this.UpdateQueryToken();
    this.User = await this.GetUser();
  }
  async Register(username: string, password: string) {
    if (password.length < 8) return null;
    await client.mutate({
      mutation: queries.createUser,
      variables: {
        user: {
          username,
          password,
          description: "",
          avatar: ""
        }
      }
    });
  }
  async UpdateQueryToken() {
    setContext((_, { headers }) => {
      return {
        headers: {
          ...headers,
          authorization: this.Token
        }
      }
    });
  }
  async GetUser(): Promise<UserType | null> {
    const result = await client.query({
      query: queries.getSelf
    });
    let user = result.data?.self as UserType | null
    if (!user) {
      this.RefreshTokens();
      this.UpdateQueryToken();
      const result = await client.query({
        query: queries.getSelf
      });
      user = result.data?.self as UserType | null
    }
    return user;
  }
  async StoreToken(token: string) {
    this.Storage?.save({ key: "token", data: token });
  }
  async StoreRefresh(token: string) {
    this.Storage?.save({ key: "refresh-token", data: token });
  }
  async RefreshTokens() {
    try {
      const response = await fetch(serverUrl + "/refresh", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify({ refreshToken: this.RefreshToken })
      });
      const json = await response.json() as { token: string, refreshToken: string };
      if (json.token && json.refreshToken) {
        this.StoreToken(json.token);
        this.StoreRefresh(json.refreshToken);
        this.Token = json.token;
        this.RefreshToken = json.refreshToken;
      }
    } catch (e) {
      console.log("There was a problem with the refresh method ")
    }
  }
}