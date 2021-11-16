import { BeverageGraphType } from "./BeverageType";
import UserType from "./UserType";

export default interface UserHandler {
  GetUser: (arg: any) => Promise<UserType | null>,
  // CreateBeverage: () => Promise<BeverageGraphType>
}