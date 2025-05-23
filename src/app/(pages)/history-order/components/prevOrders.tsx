 type product = {
  id: number, 
  name: string,
  details: string[],
  price: number
 }
 
 type prevOrder = {
  id: number,
  number: string,
  date: string,
  delivery: string,
  payment: string,
  products: product[],
  discount: number,
  tip: number,
  tax: number
 }
 
 export const prevOrders: prevOrder[] = [
  {
    id: 1,
    number: "123456789",
    date: "2024/10/23",
    delivery: 'Pick-up',
    payment: 'credit card 12222222',
    products: [
      {
        id: 1,
        name: "17'' berry pizza",
        details: ['NO blueberry', 'Extra raspberry'],
        price: 20.23
      },
    
      {
        id: 2,
        name: "Super Amazing Juice",
        details: [],
        price: 8.80
      },
    
      {
        id: 3,
        name: "Super Amazing Smooth",
        details: ['size L'],
        price: 9.90
      },
    ],
    discount: 3,
    tip: 3,
    tax: 3
  },

  {
    id: 2,
    number: "15555559",
    date: "2025/01/12",
    delivery: 'Pick-up',
    payment: 'credit card 9999888888888',
    products: [
      {
        id: 1,
        name: "17'' berry pizza",
        details: ['NO blueberry', 'Extra raspberry'],
        price: 20.23
      },
    ],
    discount: 2,
    tip: 2.5,
    tax: 1.5
  },

  {
    id: 3,
    number: "22222777777",
    date: "2025/03/15",
    delivery: 'Pick-up',
    payment: 'credit card 0001199233333',
    products: [
      {
        id: 1,
        name: "Super Amazing Juice",
        details: ["size L", "extra berry"],
        price: 8.80
      },
    
      {
        id: 2,
        name: "Super Amazing Smooth",
        details: [],
        price: 9.90
      },
    ],
    discount: 1.5,
    tip: 1,
    tax: 0.5
  }
]

export const sumsProductsPrices: number[] = prevOrders.map(order =>
  order.products.reduce((sum, product) => sum + product.price, 0)
);