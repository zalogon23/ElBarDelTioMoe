type ScreensParamsList = {
  Home: undefined,
  Bar: undefined,
  Beverages: {
    filters: string[]
  }
}

type ScreensType = "Home" | "Bar" | "Beverages"

export default ScreensParamsList;

export { ScreensType }