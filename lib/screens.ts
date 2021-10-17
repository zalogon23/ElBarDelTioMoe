import BeverageType from "../models/BeverageType";

type ScreensParamsList = {
  Home: undefined,
  Bar: undefined,
  Beverages: {
    filters: string[]
  },
  Beverage: {
    data: BeverageType
  },
  Profile: undefined
}

type ScreensType = "Home" | "Bar" | "Beverages" | "Beverage" | "Profile"

export default ScreensParamsList;

export { ScreensType }