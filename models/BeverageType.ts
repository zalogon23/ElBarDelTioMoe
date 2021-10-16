import IngredientType from "./IngredientType";
import InstructionType from "./InstructionType";

export default interface BeverageType {
  id: string,
  name: string,
  description: string,
  image: string,
  native: boolean,
  ingredients: IngredientType[],
  instructions: InstructionType[],
  keywords: string[]
}