import UserType from "../models/UserType";
import client, { serverUrl } from "./apolloClient";
import queries from "./queries";

export default class UserHandler {
  static async Login(username: string, password: string, setUser: (user: UserType) => void) {
    alert(username);
    alert(password);
    const json = await fetch(serverUrl + "/login", {
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify({ username, password }),
      method: "POST"
    });
    const result = await json.json() as UserType | null;
    if (result === null) {
      return null
    }
    setUser(result);
  }
  static async Register(username: string, password: string) {
    if (password.length < 8) return null;
    const result = (await client.mutate({
      mutation: queries.createUser,
      variables: {
        user: {
          username,
          password,
          description: "",
          avatar: ""
        }
      }
    })).data;
    const user: UserType | null = result?.createUser;
    if (user === null) {
      return null
    } else {
      return user
    }
  }
  static async GetUser(): Promise<UserType | null> {
    const result = await client.query({
      query: queries.getSelf
    });
    return result.data?.self as UserType | null
  }
}