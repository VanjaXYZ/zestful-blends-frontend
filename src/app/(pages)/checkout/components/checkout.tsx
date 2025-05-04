interface orderedProduct {
  id: number,
  name: string,
  details: string[],
  price: number
}

export const checkoutList: orderedProduct[] = [
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
    details: [],
    price: 9.90
  },
]
