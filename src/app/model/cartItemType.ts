import type { StaticImageData } from 'next/image';

export interface CartItemType {
  // id: string;
  // name: string;
  // toppings: string;
  // imageSrc: any;
  // price: number;
  // quantity: number;
  id: string,
  name: string,
  toppings?: string,
  imageSrc: StaticImageData,
  priceBefore: number | null,
  price: number | null,
  quantity: number,
  collectionOption?: string, 
  size: string, 
  fruits?: string
}
