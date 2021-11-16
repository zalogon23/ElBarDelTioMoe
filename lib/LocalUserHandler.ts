import UserHandler from "../models/UserHandler"
import UserType from "../models/UserType"
export default class LocalUserHandler implements UserHandler {
  GetUser = async (): Promise<UserType> => {
    return {
      id: "local-12355465427524757",
      username: "Jack Sparrow",
      password: "something cvrasy",
      description: "Un tio pirata bien mamao, con guille de guatusi",
      avatar: "https://jacksparrow.com/calato.jpg",
      isOnline: false,
      createdBeverages: [],
      favoriteBeverages: []
    }
  }
}