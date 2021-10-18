
import BeverageType from "./BeverageType";

export default interface UserType {
  id: string,
  username: string,
  password: string,
  avatar: string,
  description: string,
  favoriteBeverages: BeverageType[],
  createdBeverages: BeverageType[],
}