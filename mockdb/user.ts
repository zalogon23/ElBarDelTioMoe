import UserType from "../models/UserType"

const user: UserType = {
  id: "user-1",
  username: "paolo23juan",
  avatar: "https://cdnnmundo1.img.sputniknews.com/img/07e5/0a/03/1116693281_0:68:1921:1148_1920x0_80_0_0_59deaba30818bacbe8f2f91e166b7709.jpg",
  description: "Soy un portugues del siglo III antes de Crisus",
  password: "hash-de-la-pass",
  favoriteBeverages: [
    {
      id: "beverage-1",
      name: "Mojito de Cancun",
      description: "Bebida aprodisíaca con notas de Lavanda. Aromatizada para que disfrutes del zaoco mundial.",
      image: "https://i0.wp.com/hornomx.com/wp-content/uploads/2020/12/hot-chocolate-recipe-hornomx-side.jpg?resize=1024%2C683&ssl=1",
      keywords: [
        {
          id: "keyword-1",
          content: "clasicos"
        }
      ],
      instructions: [
        {
          id: "instruction-1",
          content: "Hervir huevo peludo",
          order: 0,
          createdAt: new Date(),
          beverage: "beverage-1"
        },
        {
          id: "instruction-2",
          content: "Pelarlo",
          order: 1,
          createdAt: new Date(),
          beverage: "beverage-1"
        },
        {
          id: "instruction-3",
          content: "Comerlo",
          order: 2,
          createdAt: new Date(),
          beverage: "beverage-1"
        },
      ],
      native: true,
      ingredients: [
        {
          id: "ingredient-1",
          product: "Menta",
          measure: "gramos",
          quantity: 10,
          beverage: "beverage-1"
        },
        {
          id: "ingredient-2",
          product: "Petalos de Rosa",
          measure: "petalos",
          quantity: 3,
          beverage: "beverage-1"
        },
        {
          id: "ingredient-3",
          product: "Azucar",
          measure: "cucharaditas",
          quantity: 2,
          beverage: "beverage-1"
        },
      ]
    }
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