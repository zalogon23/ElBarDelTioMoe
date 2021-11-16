
import { BeverageGraphType } from "./BeverageType";

export default interface UserType {
  id: string,
  username: string,
  password: string,
  avatar: string,
  description: string,
  isOnline: boolean,
  favoriteBeverages: BeverageGraphType[],
  createdBeverages: BeverageGraphType[],
}