
import BeverageType from "./BeverageType";

export default interface UserType {
  id: string,
  username: string,
  password: string,
  description: string,
  favoriteBeverages: string[], // Beverages IDs
  createdBeverages: BeverageType[],
}