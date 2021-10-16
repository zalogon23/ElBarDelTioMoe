import BeverageType from "../models/BeverageType";

type ScreensParamsList = {
  Home: undefined,
  Bar: undefined,
  Beverages: {
    filters: string[]
  },
  Beverage: {
    data: BeverageType
  }
}

type ScreensType = "Home" | "Bar" | "Beverages" | "Beverage"

export default ScreensParamsList;

export { ScreensType }