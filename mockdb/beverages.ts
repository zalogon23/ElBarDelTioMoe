import { BeverageGraphType } from "../models/BeverageType";

const beverages: BeverageGraphType[] = [
  {
    "id": "61770d68784b13cb7b945a83",
    "name": "Bebida Lactea",
    "description": "Tiene alto contenido en leche",
    "image": "https://www.galletaspolen.com/wp-content/uploads/2020/03/leche-con-galletas-525x350.jpeg",
    "native": true,
    "instructions": [
      {
        "id": "618426792a0f5003032aec96",
        "content": "Cocer la leche a fuego lento",
        "order": 0,
        "beverageId": "61770d68784b13cb7b945a83"
      },
      {
        "id": "618426792a0f5003032aec97",
        "content": "Agregarle azucar",
        "order": 1,
        "beverageId": "61770d68784b13cb7b945a83"
      }
    ],
    "ingredients": [
      {
        "id": "61830b242249702f32bbbc20",
        "product": "Leche",
        "measure": "Trago",
        "quantity": 1.5,
        "beverageId": "61770d68784b13cb7b945a83"
      },
      {
        "id": "61830b242249702f32bbbc21",
        "product": "Canela",
        "measure": "Ramita",
        "quantity": 1,
        "beverageId": "61770d68784b13cb7b945a83"
      }
    ],
    "keywords": [
      {
        "id": "61770d9a784b13cb7b945a84",
        "content": "clasicos"
      }
    ]
  },
  {
    "id": "617ef8db7505e9a8c0e34419",
    "name": "Bebida con Queso",
    "description": "Tiene alto contenido en quesos",
    "image": "https://www.webconsultas.com/sites/default/files/styles/wc_adaptive_curiosidad__small/public/articulos/te_queso.jpg",
    "native": true,
    "instructions": [],
    "ingredients": [],
    "keywords": []
  },
  {
    "id": "618311e502440d771fd553a8",
    "name": "Bebida con Acerrin",
    "description": "Tiene alto contenido en maderas",
    "image": "https://docplayer.es/docs-images/77/76565764/images/20-1.jpg",
    "native": true,
    "instructions": [],
    "ingredients": [],
    "keywords": []
  }
]

export default beverages;