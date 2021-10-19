import BeverageType from "../models/BeverageType";

type ScreensParamsList = {
  Home: undefined,
  Bar: undefined,
  Bebidas: {
    filters: string[]
  },
  Bebida: {
    data: BeverageType
  },
  Perfil: undefined,
  Lab: undefined
}

type ScreensType = "Home" | "Bar" | "Bebidas" | "Bebida" | "Perfil" | "Lab"

export default ScreensParamsList;

export { ScreensType }