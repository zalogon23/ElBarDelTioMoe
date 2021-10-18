import UserType from "../models/UserType"

const user: UserType = {
  id: "user-1",
  username: "paolo23juan",
  description: "Soy un portugues del siglo III antes de Crisus",
  password: "hash-de-la-pass",
  favoriteBeverages: [
    "beverage-1",
    "beverage-2",
  ],
  createdBeverages: [
    {
      id: "custom-beverage-1",
      name: "Bebida propia",
      description: "Bebida light",
      image: "https://cdnnmundo1.img.sputniknews.com/img/07e5/0a/03/1116693281_0:68:1921:1148_1920x0_80_0_0_59deaba30818bacbe8f2f91e166b7709.jpg",
      native: false,
      instructions: [
        {
          id: "instruction-10",
          content: "Abrir lata",
          createdAt: new Date(),
          order: 0,
          beverage: "custom-beverage.-1"
        }
      ],
      ingredients: [
        {
          id: "ingredient-10",
          product: "Coca Cola",
          measure: "lata",
          quantity: 1,
          beverage: "custom-beverage-1"
        }
      ],
      keywords: [
        {
          id: "keyword-10",
          content: "artificiales"
        }
      ]
    }
  ]
}

export default user;