export default interface BeverageType {
  id: string,
  name: string,
  description: string,
  image: string,
  native: boolean,
  ingredients: string[],
  instructions: string[],
  keywords: string[]
}