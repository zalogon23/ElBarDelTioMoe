import BeverageType, { BeverageGraphType } from "../models/BeverageType";

type ScreensParamsList = {
  Home: undefined,
  Bar: undefined,
  Bebidas: {
    filters: string[]
  },
  Bebida: {
    id: string
  },
  Perfil: undefined,
  Lab: undefined
}

type ScreensType = "Home" | "Bar" | "Bebidas" | "Bebida" | "Perfil" | "Lab"

export default ScreensParamsList;

export { ScreensType }