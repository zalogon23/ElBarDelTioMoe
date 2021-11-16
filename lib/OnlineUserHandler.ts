import UserHandler from "../models/UserHandler"
import UserType from "../models/UserType";
import client from "./apolloClient";
import queries from "./queries";
export default class OnlineUserHandler implements UserHandler {
  GetUser = async (token: string): Promise<UserType | null> => {
    const graphResult = await client.query({
      query: queries.getSelf,
      context: {
        headers: {
          "Authorization": `bearer ${token}`
        }
      }
    });
    const user = graphResult.data?.self as UserType | null;
    if (user) {
      const onlineUser: UserType = { ...user, isOnline: true };
      return onlineUser;
    }
    return null;
  };
}