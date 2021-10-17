import BeverageType from "../models/BeverageType";

const beverages: BeverageType[] = [
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
  },
  {
    id: "beverage-2",
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
        beverage: "beverage-2"
      },
      {
        id: "instruction-2",
        content: "Pelarlo",
        order: 1,
        createdAt: new Date(),
        beverage: "beverage-2"
      },
      {
        id: "instruction-3",
        content: "Comerlo",
        order: 2,
        createdAt: new Date(),
        beverage: "beverage-2"
      },
    ],
    native: true,
    ingredients: [
      {
        id: "ingredient-1",
        product: "Menta",
        measure: "gramos",
        quantity: 10,
        beverage: "beverage-2"
      },
      {
        id: "ingredient-2",
        product: "Petalos de Rosa",
        measure: "petalos",
        quantity: 3,
        beverage: "beverage-2"
      },
      {
        id: "ingredient-3",
        product: "Azucar",
        measure: "cucharaditas",
        quantity: 2,
        beverage: "beverage-2"
      },
    ]
  },
  {
    id: "beverage-3",
    name: "Mojito de Cancun",
    description: "Bebida aprodisíaca con notas de Lavanda. Aromatizada para que disfrutes del zaoco mundial.",
    image: "https://i0.wp.com/hornomx.com/wp-content/uploads/2020/12/hot-chocolate-recipe-hornomx-side.jpg?resize=1024%2C683&ssl=1",
    keywords: [{
      id: "keyword-1",
      content: "monarquicos"
    }
    ],
    instructions: [
      {
        id: "instruction-1",
        content: "Hervir huevo peludo",
        order: 0,
        createdAt: new Date(),
        beverage: "beverage-3"
      },
      {
        id: "instruction-2",
        content: "Pelarlo",
        order: 1,
        createdAt: new Date(),
        beverage: "beverage-3"
      },
      {
        id: "instruction-3",
        content: "Comerlo",
        order: 2,
        createdAt: new Date(),
        beverage: "beverage-3"
      },
    ],
    native: true,
    ingredients: [
      {
        id: "ingredient-1",
        product: "Menta",
        measure: "gramos",
        quantity: 10,
        beverage: "beverage-3"
      },
      {
        id: "ingredient-2",
        product: "Petalos de Rosa",
        measure: "petalos",
        quantity: 3,
        beverage: "beverage-3"
      },
      {
        id: "ingredient-3",
        product: "Azucar",
        measure: "cucharaditas",
        quantity: 2,
        beverage: "beverage-3"
      },
    ]
  },
]

export default beverages;