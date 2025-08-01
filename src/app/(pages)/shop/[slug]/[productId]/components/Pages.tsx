
import type { StaticImageData } from 'next/image';
import Image1 from "@/assets/Caribbean Bliss Smoothie-1.png";
import Image2 from "@/assets/Crimson Apple Zest-1.png";
import Image3 from "@/assets/mango-juice-splashing.png";
import Image4 from "@/assets/four-juices.png";
import Image from 'next/image';

interface paragraph {
  id: number;
  paragraphTitle?: string;
  paragraphTextSmaller?: string;
  paragraphTextBigger?: string;
}

interface p {
  id: number;
  title?: string;
  text?: string;
}

interface review {
  id: number;
  customerName: string;
  rate: string;
  customerReview: string;
  date: string;
}

interface Product {
  id: string;
  images: StaticImageData[];
  productName: string;
  priceMin: number;
  priceMed: number;
  priceMax: number;
  isNewProduct: boolean;
  ingredients?: string[];
  collectionOptions?: string[];
  sizes: string[];
  description?: paragraph[]
  additionalInformations?: p[];
  reviews?: review[]
  relatedProducts?: Product[]
  group?: string
}

const relatedProductsExample = [
  {
    id: "1",
    images: [Image1],
    productName: "Strawberry Juice",
    group: "fruit-juices",
    priceMin: 9.70,
    priceMed: 10,
    priceMax: 16.00,
    isNewProduct: true,
    ingredients: ["Pineapple", "Yellow Pear", "Coconut water for a tropical taste"],
    sizes: ["Large", "Medium", "Small"],
    
  },
  {
        id: "12",
        images: [Image3, Image4],
        productName: "Mango Juice",
        group: "smoothies",
        priceMin: 5.50,
        priceMed: 10,
        priceMax: 13.00,
        isNewProduct: false,
        ingredients: ["Raspberries", "Slices of Apple", "Water or ice for blending"],
        collectionOptions: ["Regular Blends", "another option"],
        sizes: ["Large", "Medium", "Small"],
        description: [
          {
            id: 1,
            paragraphTextBigger: 'Savor the sophisticated and invigorating flavors of the Pomegranate Orchard Blend Smoothie. This unique blend combines the sweet and juicy pomegranate arils, crisp pear slices, and succulent red grapes, offering a perfect balance of orchard fruits. A sprig of rosemary adds an aromatic herbal note, while sparkling water brings a fizzy twist that elevates the taste experience. Ideal for a refreshing morning boost or an afternoon pick-me-up, the Pomegranate Orchard Blend Smoothie not only delights the taste buds but also provides an array of health benefits. Sip, savor, and indulge in this fizzy, nutrient-packed smoothie with every refreshing sip.',
          },
          {
            id: 2,
            paragraphTitle: 'Health Highlights',
            paragraphTextSmaller: 'Antioxidant-Rich: The combination of pomegranate, grapes, and rosemary provides a potent dose of antioxidants, protecting your body from oxidative damage and supporting overall cellular health.\nDigestive Support: Pears are high in fiber, promoting healthy digestion and supporting gut health.\nHeart Health: Red grapes and pomegranate are both known for their heart-healthy benefits, including improving circulation and reducing inflammation.\nHydration and Refreshment: The sparkling water adds a refreshing effervescence, making this smoothie a perfect choice for hydration without added sugars.'
          },
          {
            id: 3,
            paragraphTitle: "Allergy Information",
            paragraphTextSmaller: "The Pomegranate Orchard Blend Smoothie is free from common allergens like nuts, dairy, and gluten. However, it is prepared in a facility that processes these allergens, so cross-contamination may occur. If you have any concerns about allergies, especially related to fruit or herbs, please consult your healthcare provider."
          }
        ],
      additionalInformations: [
        {
          id: 1,
          title: "Size",
          text: ["Large", "Medium", "Small"].join(', ')
        }
      ],
      reviews: [
        {
          id: 1,
          customerName: "Martha",
          rate: "Perfect",
          customerReview: "That was the amazing experience for my soul and senses. I'm definitely going to buy it again!",
          date: "2025-07-09T14:30:00-07:00",
        },
        {
          id: 2,
          customerName: "Sam",
          rate: "Good",
          customerReview: "Really delicious. I can't wait to try another products",
          date: "2024-12-15T18:45:00-08:00",
        },
      ],
        
      },
  {
    id: "3",
    images: [Image3],
    productName: "Mango Juice",
    group: "fruit-pizzas",
    priceMin: 9.70,
    priceMed: 10,
    priceMax: 16.00,
    isNewProduct: false,
    ingredients: ["Pineapple", "Yellow Pear", "Coconut water for a tropical taste"],
    sizes: ["Large", "Medium", "Small"],
  },
  {
    id: "4",
    images: [Image4],
    productName: "Pomegranate Juice very very tasty",
    group: "fruit-salads",
    priceMin: 5.50,
    priceMed: 10,
    priceMax: 13.00,
    isNewProduct: true,
    ingredients: ["Pineapple", "Yellow Pear", "Coconut water for a tropical taste"],
    sizes: ["Large", "Medium", "Small"],
  },
  {
    id: "5",
    images: [Image1],
    productName: "Bubble Milk Tea",
    group: "pre-packed-fruits",
    priceMin: 5.50,
    priceMed: 10,
    priceMax: 13.00,
    isNewProduct: true,
    ingredients: ["Raspberries", "Slices of Apple", "Water or ice for blending"],
    sizes: ["Large", "Medium", "Small"],
  },
]

export const pages: Record<string, { title: string; products: Product[] }> = {
  smoothies: { 
    title: 'Smoothies',
    products: [
      {
        id: "1",
        images: [Image1],
        productName: "Strawberry Juice",
        priceMin: 9.70,
        priceMed: 10,
        priceMax: 16.00,
        isNewProduct: true,
        ingredients: ["Pineapple", "Yellow Pear", "Coconut water for a tropical taste"],
        sizes: ["Large", "Medium", "Small"],
        description: [
          {
            id: 1,
            paragraphTextBigger: 'Savor the sophisticated and invigorating flavors of the Pomegranate Orchard Blend Smoothie. This unique blend combines the sweet and juicy pomegranate arils, crisp pear slices, and succulent red grapes, offering a perfect balance of orchard fruits. A sprig of rosemary adds an aromatic herbal note, while sparkling water brings a fizzy twist that elevates the taste experience. Ideal for a refreshing morning boost or an afternoon pick-me-up, the Pomegranate Orchard Blend Smoothie not only delights the taste buds but also provides an array of health benefits. Sip, savor, and indulge in this fizzy, nutrient-packed smoothie with every refreshing sip.',
          },
          {
            id: 2,
            paragraphTitle: 'Health Highlights',
            paragraphTextSmaller: 'Antioxidant-Rich: The combination of pomegranate, grapes, and rosemary provides a potent dose of antioxidants, protecting your body from oxidative damage and supporting overall cellular health.\nDigestive Support: Pears are high in fiber, promoting healthy digestion and supporting gut health.\nHeart Health: Red grapes and pomegranate are both known for their heart-healthy benefits, including improving circulation and reducing inflammation.\nHydration and Refreshment: The sparkling water adds a refreshing effervescence, making this smoothie a perfect choice for hydration without added sugars.'
          },
          {
            id: 3,
            paragraphTitle: "Allergy Information",
            paragraphTextSmaller: "The Pomegranate Orchard Blend Smoothie is free from common allergens like nuts, dairy, and gluten. However, it is prepared in a facility that processes these allergens, so cross-contamination may occur. If you have any concerns about allergies, especially related to fruit or herbs, please consult your healthcare provider."
          }
        ],
      additionalInformations: [
        {
          id: 1,
          title: "Size",
          text: ["Large", "Medium", "Small"].join(', ')
        }
      ],
      reviews: [
        {
          id: 1,
          customerName: "Martha",
          rate: "Perfect",
          customerReview: "That was the amazing experience for my soul and senses. I'm definitely going to buy it again!",
          date: "2025-07-09T14:30:00-07:00",
        },
        {
          id: 2,
          customerName: "Sam",
          rate: "Good",
          customerReview: "Really delicious. I can't wait to try another products",
          date: "2024-12-15T18:45:00-08:00",
        },
      ],
      relatedProducts: relatedProductsExample,
      },
      {
        id: "2",
        images: [Image2],
        productName: "Tomato Juice",
        priceMin: 5.50,
        priceMed: 10,
        priceMax: 13.00,
        isNewProduct: false,
        ingredients: ["Raspberries", "Slices of Apple", "Water or ice for blending"],
        collectionOptions: ["Regular Blends", "another option"],
        sizes: ["Large", "Medium", "Small"],
        description: [
          {
            id: 1,
            paragraphTextBigger: 'Savor the sophisticated and invigorating flavors of the Pomegranate Orchard Blend Smoothie. This unique blend combines the sweet and juicy pomegranate arils, crisp pear slices, and succulent red grapes, offering a perfect balance of orchard fruits. A sprig of rosemary adds an aromatic herbal note, while sparkling water brings a fizzy twist that elevates the taste experience. Ideal for a refreshing morning boost or an afternoon pick-me-up, the Pomegranate Orchard Blend Smoothie not only delights the taste buds but also provides an array of health benefits. Sip, savor, and indulge in this fizzy, nutrient-packed smoothie with every refreshing sip.',
          },
          {
            id: 2,
            paragraphTitle: 'Health Highlights',
            paragraphTextSmaller: 'Antioxidant-Rich: The combination of pomegranate, grapes, and rosemary provides a potent dose of antioxidants, protecting your body from oxidative damage and supporting overall cellular health.\nDigestive Support: Pears are high in fiber, promoting healthy digestion and supporting gut health.\nHeart Health: Red grapes and pomegranate are both known for their heart-healthy benefits, including improving circulation and reducing inflammation.\nHydration and Refreshment: The sparkling water adds a refreshing effervescence, making this smoothie a perfect choice for hydration without added sugars.'
          },
          {
            id: 3,
            paragraphTitle: "Allergy Information",
            paragraphTextSmaller: "The Pomegranate Orchard Blend Smoothie is free from common allergens like nuts, dairy, and gluten. However, it is prepared in a facility that processes these allergens, so cross-contamination may occur. If you have any concerns about allergies, especially related to fruit or herbs, please consult your healthcare provider."
          }
        ],
      additionalInformations: [
        {
          id: 1,
          title: "Size",
          text: ["Large", "Medium", "Small"].join(', ')
        }
      ],
      reviews: [
        {
          id: 1,
          customerName: "Martha",
          rate: "Perfect",
          customerReview: "That was the amazing experience for my soul and senses. I'm definitely going to buy it again!",
          date: "2025-07-09T14:30:00-07:00",
        },
        {
          id: 2,
          customerName: "Sam",
          rate: "Good",
          customerReview: "Really delicious. I can't wait to try another products",
          date: "2024-12-15T18:45:00-08:00",
        },
      ],
      relatedProducts: relatedProductsExample,
      },
      {
        id: "3",
        images: [Image3],
        productName: "Mango Juice",
        priceMin: 9.70,
        priceMed: 10,
        priceMax: 16.00,
        isNewProduct: false,
        ingredients: ["Pineapple", "Yellow Pear", "Coconut water for a tropical taste"],
        collectionOptions: ["Regular Blends", "another option"],
        sizes: ["Large", "Medium", "Small"],
        description: [
          {
            id: 1,
            paragraphTextBigger: 'Savor the sophisticated and invigorating flavors of the Pomegranate Orchard Blend Smoothie. This unique blend combines the sweet and juicy pomegranate arils, crisp pear slices, and succulent red grapes, offering a perfect balance of orchard fruits. A sprig of rosemary adds an aromatic herbal note, while sparkling water brings a fizzy twist that elevates the taste experience. Ideal for a refreshing morning boost or an afternoon pick-me-up, the Pomegranate Orchard Blend Smoothie not only delights the taste buds but also provides an array of health benefits. Sip, savor, and indulge in this fizzy, nutrient-packed smoothie with every refreshing sip.',
          },
          {
            id: 2,
            paragraphTitle: 'Health Highlights',
            paragraphTextSmaller: 'Antioxidant-Rich: The combination of pomegranate, grapes, and rosemary provides a potent dose of antioxidants, protecting your body from oxidative damage and supporting overall cellular health.\nDigestive Support: Pears are high in fiber, promoting healthy digestion and supporting gut health.\nHeart Health: Red grapes and pomegranate are both known for their heart-healthy benefits, including improving circulation and reducing inflammation.\nHydration and Refreshment: The sparkling water adds a refreshing effervescence, making this smoothie a perfect choice for hydration without added sugars.'
          },
          {
            id: 3,
            paragraphTitle: "Allergy Information",
            paragraphTextSmaller: "The Pomegranate Orchard Blend Smoothie is free from common allergens like nuts, dairy, and gluten. However, it is prepared in a facility that processes these allergens, so cross-contamination may occur. If you have any concerns about allergies, especially related to fruit or herbs, please consult your healthcare provider."
          }
        ],
      additionalInformations: [
        {
          id: 1,
          title: "Size",
          text: ["Large", "Medium", "Small"].join(', ')
        }
      ],
      reviews: [
        {
          id: 1,
          customerName: "Martha",
          rate: "Perfect",
          customerReview: "That was the amazing experience for my soul and senses. I'm definitely going to buy it again!",
          date: "2025-07-09T14:30:00-07:00",
        },
        {
          id: 2,
          customerName: "Sam",
          rate: "Good",
          customerReview: "Really delicious. I can't wait to try another products",
          date: "2024-12-15T18:45:00-08:00",
        },
      ],
      relatedProducts: relatedProductsExample,
      },
      {
        id: "4",
        images: [Image4],
        productName: "Pomegranate Juice very very tasty and superdelicious",
        priceMin: 5.50,
        priceMed: 10,
        priceMax: 13.00,
        isNewProduct: true,
        ingredients: ["Pineapple", "Yellow Pear", "Coconut water for a tropical taste"],
        collectionOptions: ["Regular Blends", "another option"],
        sizes: ["Large", "Medium", "Small"],
        description: [
          {
            id: 1,
            paragraphTextBigger: 'Savor the sophisticated and invigorating flavors of the Pomegranate Orchard Blend Smoothie. This unique blend combines the sweet and juicy pomegranate arils, crisp pear slices, and succulent red grapes, offering a perfect balance of orchard fruits. A sprig of rosemary adds an aromatic herbal note, while sparkling water brings a fizzy twist that elevates the taste experience. Ideal for a refreshing morning boost or an afternoon pick-me-up, the Pomegranate Orchard Blend Smoothie not only delights the taste buds but also provides an array of health benefits. Sip, savor, and indulge in this fizzy, nutrient-packed smoothie with every refreshing sip.',
          },
          {
            id: 2,
            paragraphTitle: 'Health Highlights',
            paragraphTextSmaller: 'Antioxidant-Rich: The combination of pomegranate, grapes, and rosemary provides a potent dose of antioxidants, protecting your body from oxidative damage and supporting overall cellular health.\nDigestive Support: Pears are high in fiber, promoting healthy digestion and supporting gut health.\nHeart Health: Red grapes and pomegranate are both known for their heart-healthy benefits, including improving circulation and reducing inflammation.\nHydration and Refreshment: The sparkling water adds a refreshing effervescence, making this smoothie a perfect choice for hydration without added sugars.'
          },
          {
            id: 3,
            paragraphTitle: "Allergy Information",
            paragraphTextSmaller: "The Pomegranate Orchard Blend Smoothie is free from common allergens like nuts, dairy, and gluten. However, it is prepared in a facility that processes these allergens, so cross-contamination may occur. If you have any concerns about allergies, especially related to fruit or herbs, please consult your healthcare provider."
          }
        ],
      additionalInformations: [
        {
          id: 1,
          title: "Size",
          text: ["Large", "Medium", "Small"].join(', ')
        }
      ],
      reviews: [
        {
          id: 1,
          customerName: "Martha",
          rate: "Perfect",
          customerReview: "That was the amazing experience for my soul and senses. I'm definitely going to buy it again!",
          date: "2025-07-09T14:30:00-07:00",
        },
        {
          id: 2,
          customerName: "Sam",
          rate: "Good",
          customerReview: "Really delicious. I can't wait to try another products",
          date: "2024-12-15T18:45:00-08:00",
        },
      ],
      relatedProducts: relatedProductsExample,
      },
      {
        id: "5",
        images: [Image1],
        productName: "Bubble Milk Tea",
        priceMin: 5.50,
        priceMed: 10,
        priceMax: 13.00,
        isNewProduct: true,
        ingredients: ["Raspberries", "Slices of Apple", "Water or ice for blending"],
        collectionOptions: ["Regular Blends", "another option"],
        sizes: ["Large", "Medium", "Small"],
        description: [
          {
            id: 1,
            paragraphTextBigger: 'Savor the sophisticated and invigorating flavors of the Pomegranate Orchard Blend Smoothie. This unique blend combines the sweet and juicy pomegranate arils, crisp pear slices, and succulent red grapes, offering a perfect balance of orchard fruits. A sprig of rosemary adds an aromatic herbal note, while sparkling water brings a fizzy twist that elevates the taste experience. Ideal for a refreshing morning boost or an afternoon pick-me-up, the Pomegranate Orchard Blend Smoothie not only delights the taste buds but also provides an array of health benefits. Sip, savor, and indulge in this fizzy, nutrient-packed smoothie with every refreshing sip.',
          },
          {
            id: 2,
            paragraphTitle: 'Health Highlights',
            paragraphTextSmaller: 'Antioxidant-Rich: The combination of pomegranate, grapes, and rosemary provides a potent dose of antioxidants, protecting your body from oxidative damage and supporting overall cellular health.\nDigestive Support: Pears are high in fiber, promoting healthy digestion and supporting gut health.\nHeart Health: Red grapes and pomegranate are both known for their heart-healthy benefits, including improving circulation and reducing inflammation.\nHydration and Refreshment: The sparkling water adds a refreshing effervescence, making this smoothie a perfect choice for hydration without added sugars.'
          },
          {
            id: 3,
            paragraphTitle: "Allergy Information",
            paragraphTextSmaller: "The Pomegranate Orchard Blend Smoothie is free from common allergens like nuts, dairy, and gluten. However, it is prepared in a facility that processes these allergens, so cross-contamination may occur. If you have any concerns about allergies, especially related to fruit or herbs, please consult your healthcare provider."
          }
        ],
      additionalInformations: [
        {
          id: 1,
          title: "Size",
          text: ["Large", "Medium", "Small"].join(', ')
        }
      ],
      reviews: [
        {
          id: 1,
          customerName: "Martha",
          rate: "Perfect",
          customerReview: "That was the amazing experience for my soul and senses. I'm definitely going to buy it again!",
          date: "2025-07-09T14:30:00-07:00",
        },
        {
          id: 2,
          customerName: "Sam",
          rate: "Good",
          customerReview: "Really delicious. I can't wait to try another products",
          date: "2024-12-15T18:45:00-08:00",
        },
      ],
      relatedProducts: relatedProductsExample,
      },
      {
        id: "6",
        images: [Image2],
        productName: "Kiwi Juice",
        priceMin: 9.70,
        priceMed: 10,
        priceMax: 16.00,
        isNewProduct: false,
        ingredients: ["Pineapple", "Yellow Pear", "Coconut water for a tropical taste"],
        collectionOptions: ["Regular Blends", "another option"],
        sizes: ["Large", "Medium", "Small"],
        description: [
          {
            id: 1,
            paragraphTextBigger: 'Savor the sophisticated and invigorating flavors of the Pomegranate Orchard Blend Smoothie. This unique blend combines the sweet and juicy pomegranate arils, crisp pear slices, and succulent red grapes, offering a perfect balance of orchard fruits. A sprig of rosemary adds an aromatic herbal note, while sparkling water brings a fizzy twist that elevates the taste experience. Ideal for a refreshing morning boost or an afternoon pick-me-up, the Pomegranate Orchard Blend Smoothie not only delights the taste buds but also provides an array of health benefits. Sip, savor, and indulge in this fizzy, nutrient-packed smoothie with every refreshing sip.',
          },
          {
            id: 2,
            paragraphTitle: 'Health Highlights',
            paragraphTextSmaller: 'Antioxidant-Rich: The combination of pomegranate, grapes, and rosemary provides a potent dose of antioxidants, protecting your body from oxidative damage and supporting overall cellular health.\nDigestive Support: Pears are high in fiber, promoting healthy digestion and supporting gut health.\nHeart Health: Red grapes and pomegranate are both known for their heart-healthy benefits, including improving circulation and reducing inflammation.\nHydration and Refreshment: The sparkling water adds a refreshing effervescence, making this smoothie a perfect choice for hydration without added sugars.'
          },
          {
            id: 3,
            paragraphTitle: "Allergy Information",
            paragraphTextSmaller: "The Pomegranate Orchard Blend Smoothie is free from common allergens like nuts, dairy, and gluten. However, it is prepared in a facility that processes these allergens, so cross-contamination may occur. If you have any concerns about allergies, especially related to fruit or herbs, please consult your healthcare provider."
          }
        ],
      additionalInformations: [
        {
          id: 1,
          title: "Size",
          text: ["Large", "Medium", "Small"].join(', ')
        }
      ],
      reviews: [
        {
          id: 1,
          customerName: "Martha",
          rate: "Perfect",
          customerReview: "That was the amazing experience for my soul and senses. I'm definitely going to buy it again!",
          date: "2025-07-09T14:30:00-07:00",
        },
        {
          id: 2,
          customerName: "Sam",
          rate: "Good",
          customerReview: "Really delicious. I can't wait to try another products",
          date: "2024-12-15T18:45:00-08:00",
        },
      ],
      relatedProducts: relatedProductsExample,
      },
      {
        id: "7",
        images: [Image3],
        productName: "Pomegranate Juice",
        priceMin: 5.50,
        priceMed: 10,
        priceMax: 13.00,
        isNewProduct: false,
        ingredients: ["Pineapple", "Yellow Pear", "Coconut water for a tropical taste"],
        collectionOptions: ["Regular Blends", "another option"],
        sizes: ["Large", "Medium", "Small"],
        description: [
          {
            id: 1,
            paragraphTextBigger: 'Savor the sophisticated and invigorating flavors of the Pomegranate Orchard Blend Smoothie. This unique blend combines the sweet and juicy pomegranate arils, crisp pear slices, and succulent red grapes, offering a perfect balance of orchard fruits. A sprig of rosemary adds an aromatic herbal note, while sparkling water brings a fizzy twist that elevates the taste experience. Ideal for a refreshing morning boost or an afternoon pick-me-up, the Pomegranate Orchard Blend Smoothie not only delights the taste buds but also provides an array of health benefits. Sip, savor, and indulge in this fizzy, nutrient-packed smoothie with every refreshing sip.',
          },
          {
            id: 2,
            paragraphTitle: 'Health Highlights',
            paragraphTextSmaller: 'Antioxidant-Rich: The combination of pomegranate, grapes, and rosemary provides a potent dose of antioxidants, protecting your body from oxidative damage and supporting overall cellular health.\nDigestive Support: Pears are high in fiber, promoting healthy digestion and supporting gut health.\nHeart Health: Red grapes and pomegranate are both known for their heart-healthy benefits, including improving circulation and reducing inflammation.\nHydration and Refreshment: The sparkling water adds a refreshing effervescence, making this smoothie a perfect choice for hydration without added sugars.'
          },
          {
            id: 3,
            paragraphTitle: "Allergy Information",
            paragraphTextSmaller: "The Pomegranate Orchard Blend Smoothie is free from common allergens like nuts, dairy, and gluten. However, it is prepared in a facility that processes these allergens, so cross-contamination may occur. If you have any concerns about allergies, especially related to fruit or herbs, please consult your healthcare provider."
          }
        ],
      additionalInformations: [
        {
          id: 1,
          title: "Size",
          text: ["Large", "Medium", "Small"].join(', ')
        }
      ],
      reviews: [
        {
          id: 1,
          customerName: "Martha",
          rate: "Perfect",
          customerReview: "That was the amazing experience for my soul and senses. I'm definitely going to buy it again!",
          date: "2025-07-09T14:30:00-07:00",
        },
        {
          id: 2,
          customerName: "Sam",
          rate: "Good",
          customerReview: "Really delicious. I can't wait to try another products",
          date: "2024-12-15T18:45:00-08:00",
        },
      ],
      relatedProducts: relatedProductsExample,
      },
      {
        id: "8",
        images: [Image4],
        productName: "Bubble Milk Tea",
        priceMin: 5.50,
        priceMed: 10,
        priceMax: 13.00,
        isNewProduct: false,
        ingredients: ["Pineapple", "Yellow Pear", "Coconut water for a tropical taste"],
        collectionOptions: ["Regular Blends", "another option"],
        sizes: ["Large", "Medium", "Small"],
        description: [
          {
            id: 1,
            paragraphTextBigger: 'Savor the sophisticated and invigorating flavors of the Pomegranate Orchard Blend Smoothie. This unique blend combines the sweet and juicy pomegranate arils, crisp pear slices, and succulent red grapes, offering a perfect balance of orchard fruits. A sprig of rosemary adds an aromatic herbal note, while sparkling water brings a fizzy twist that elevates the taste experience. Ideal for a refreshing morning boost or an afternoon pick-me-up, the Pomegranate Orchard Blend Smoothie not only delights the taste buds but also provides an array of health benefits. Sip, savor, and indulge in this fizzy, nutrient-packed smoothie with every refreshing sip.',
          },
          {
            id: 2,
            paragraphTitle: 'Health Highlights',
            paragraphTextSmaller: 'Antioxidant-Rich: The combination of pomegranate, grapes, and rosemary provides a potent dose of antioxidants, protecting your body from oxidative damage and supporting overall cellular health.\nDigestive Support: Pears are high in fiber, promoting healthy digestion and supporting gut health.\nHeart Health: Red grapes and pomegranate are both known for their heart-healthy benefits, including improving circulation and reducing inflammation.\nHydration and Refreshment: The sparkling water adds a refreshing effervescence, making this smoothie a perfect choice for hydration without added sugars.'
          },
          {
            id: 3,
            paragraphTitle: "Allergy Information",
            paragraphTextSmaller: "The Pomegranate Orchard Blend Smoothie is free from common allergens like nuts, dairy, and gluten. However, it is prepared in a facility that processes these allergens, so cross-contamination may occur. If you have any concerns about allergies, especially related to fruit or herbs, please consult your healthcare provider."
          }
        ],
      additionalInformations: [
        {
          id: 1,
          title: "Size",
          text: ["Large", "Medium", "Small"].join(', ')
        }
      ],
      reviews: [
        {
          id: 1,
          customerName: "Martha",
          rate: "Perfect",
          customerReview: "That was the amazing experience for my soul and senses. I'm definitely going to buy it again!",
          date: "2025-07-09T14:30:00-07:00",
        },
        {
          id: 2,
          customerName: "Sam",
          rate: "Good",
          customerReview: "Really delicious. I can't wait to try another products",
          date: "2024-12-15T18:45:00-08:00",
        },
      ],
      relatedProducts: relatedProductsExample,
      },
      {
        id: "9",
        images: [Image1],
        productName: "Kiwi Juice",
        priceMin: 9.70,
        priceMed: 10,
        priceMax: 16.00,
        isNewProduct: false,
        ingredients: ["Raspberries", "Slices of Apple", "Water or ice for blending"],
        collectionOptions: ["Regular Blends", "another option"],
        sizes: ["Large", "Medium", "Small"],
        description: [
          {
            id: 1,
            paragraphTextBigger: 'Savor the sophisticated and invigorating flavors of the Pomegranate Orchard Blend Smoothie. This unique blend combines the sweet and juicy pomegranate arils, crisp pear slices, and succulent red grapes, offering a perfect balance of orchard fruits. A sprig of rosemary adds an aromatic herbal note, while sparkling water brings a fizzy twist that elevates the taste experience. Ideal for a refreshing morning boost or an afternoon pick-me-up, the Pomegranate Orchard Blend Smoothie not only delights the taste buds but also provides an array of health benefits. Sip, savor, and indulge in this fizzy, nutrient-packed smoothie with every refreshing sip.',
          },
          {
            id: 2,
            paragraphTitle: 'Health Highlights',
            paragraphTextSmaller: 'Antioxidant-Rich: The combination of pomegranate, grapes, and rosemary provides a potent dose of antioxidants, protecting your body from oxidative damage and supporting overall cellular health.\nDigestive Support: Pears are high in fiber, promoting healthy digestion and supporting gut health.\nHeart Health: Red grapes and pomegranate are both known for their heart-healthy benefits, including improving circulation and reducing inflammation.\nHydration and Refreshment: The sparkling water adds a refreshing effervescence, making this smoothie a perfect choice for hydration without added sugars.'
          },
          {
            id: 3,
            paragraphTitle: "Allergy Information",
            paragraphTextSmaller: "The Pomegranate Orchard Blend Smoothie is free from common allergens like nuts, dairy, and gluten. However, it is prepared in a facility that processes these allergens, so cross-contamination may occur. If you have any concerns about allergies, especially related to fruit or herbs, please consult your healthcare provider."
          }
        ],
      additionalInformations: [
        {
          id: 1,
          title: "Size",
          text: ["Large", "Medium", "Small"].join(', ')
        }
      ],
      reviews: [
        {
          id: 1,
          customerName: "Martha",
          rate: "Perfect",
          customerReview: "That was the amazing experience for my soul and senses. I'm definitely going to buy it again!",
          date: "2025-07-09T14:30:00-07:00",
        },
        {
          id: 2,
          customerName: "Sam",
          rate: "Good",
          customerReview: "Really delicious. I can't wait to try another products",
          date: "2024-12-15T18:45:00-08:00",
        },
      ],
      relatedProducts: relatedProductsExample,
      },
      {
        id: "10",
        images: [Image1],
        productName: "Strawberry Juice",
        priceMin: 5.50,
        priceMed: 10,
        priceMax: 13.00,
        isNewProduct: true,
        ingredients: ["Raspberries", "Slices of Apple", "Water or ice for blending"],
        collectionOptions: ["Regular Blends", "another option"],
        sizes: ["Large", "Medium", "Small"],
        description: [
          {
            id: 1,
            paragraphTextBigger: 'Savor the sophisticated and invigorating flavors of the Pomegranate Orchard Blend Smoothie. This unique blend combines the sweet and juicy pomegranate arils, crisp pear slices, and succulent red grapes, offering a perfect balance of orchard fruits. A sprig of rosemary adds an aromatic herbal note, while sparkling water brings a fizzy twist that elevates the taste experience. Ideal for a refreshing morning boost or an afternoon pick-me-up, the Pomegranate Orchard Blend Smoothie not only delights the taste buds but also provides an array of health benefits. Sip, savor, and indulge in this fizzy, nutrient-packed smoothie with every refreshing sip.',
          },
          {
            id: 2,
            paragraphTitle: 'Health Highlights',
            paragraphTextSmaller: 'Antioxidant-Rich: The combination of pomegranate, grapes, and rosemary provides a potent dose of antioxidants, protecting your body from oxidative damage and supporting overall cellular health.\nDigestive Support: Pears are high in fiber, promoting healthy digestion and supporting gut health.\nHeart Health: Red grapes and pomegranate are both known for their heart-healthy benefits, including improving circulation and reducing inflammation.\nHydration and Refreshment: The sparkling water adds a refreshing effervescence, making this smoothie a perfect choice for hydration without added sugars.'
          },
          {
            id: 3,
            paragraphTitle: "Allergy Information",
            paragraphTextSmaller: "The Pomegranate Orchard Blend Smoothie is free from common allergens like nuts, dairy, and gluten. However, it is prepared in a facility that processes these allergens, so cross-contamination may occur. If you have any concerns about allergies, especially related to fruit or herbs, please consult your healthcare provider."
          }
        ],
      additionalInformations: [
        {
          id: 1,
          title: "Size",
          text: ["Large", "Medium", "Small"].join(', ')
        }
      ],
      reviews: [
        {
          id: 1,
          customerName: "Martha",
          rate: "Perfect",
          customerReview: "That was the amazing experience for my soul and senses. I'm definitely going to buy it again!",
          date: "2025-07-09T14:30:00-07:00",
        },
        {
          id: 2,
          customerName: "Sam",
          rate: "Good",
          customerReview: "Really delicious. I can't wait to try another products",
          date: "2024-12-15T18:45:00-08:00",
        },
      ],
      relatedProducts: relatedProductsExample,
      },
      {
        id: "11",
        images: [Image2],
        productName: "Tomato Juice",
        priceMin: 5.50,
        priceMed: 10,
        priceMax: 13.00,
        isNewProduct: false,
        ingredients: ["Pineapple", "Yellow Pear", "Coconut water for a tropical taste"],
        collectionOptions: ["Regular Blends", "another option"],
        sizes: ["Large", "Medium", "Small"],
        description: [
          {
            id: 1,
            paragraphTextBigger: 'Savor the sophisticated and invigorating flavors of the Pomegranate Orchard Blend Smoothie. This unique blend combines the sweet and juicy pomegranate arils, crisp pear slices, and succulent red grapes, offering a perfect balance of orchard fruits. A sprig of rosemary adds an aromatic herbal note, while sparkling water brings a fizzy twist that elevates the taste experience. Ideal for a refreshing morning boost or an afternoon pick-me-up, the Pomegranate Orchard Blend Smoothie not only delights the taste buds but also provides an array of health benefits. Sip, savor, and indulge in this fizzy, nutrient-packed smoothie with every refreshing sip.',
          },
          {
            id: 2,
            paragraphTitle: 'Health Highlights',
            paragraphTextSmaller: 'Antioxidant-Rich: The combination of pomegranate, grapes, and rosemary provides a potent dose of antioxidants, protecting your body from oxidative damage and supporting overall cellular health.\nDigestive Support: Pears are high in fiber, promoting healthy digestion and supporting gut health.\nHeart Health: Red grapes and pomegranate are both known for their heart-healthy benefits, including improving circulation and reducing inflammation.\nHydration and Refreshment: The sparkling water adds a refreshing effervescence, making this smoothie a perfect choice for hydration without added sugars.'
          },
          {
            id: 3,
            paragraphTitle: "Allergy Information",
            paragraphTextSmaller: "The Pomegranate Orchard Blend Smoothie is free from common allergens like nuts, dairy, and gluten. However, it is prepared in a facility that processes these allergens, so cross-contamination may occur. If you have any concerns about allergies, especially related to fruit or herbs, please consult your healthcare provider."
          }
        ],
      additionalInformations: [
        {
          id: 1,
          title: "Size",
          text: ["Large", "Medium", "Small"].join(', ')
        }
      ],
      reviews: [
        {
          id: 1,
          customerName: "Martha",
          rate: "Perfect",
          customerReview: "That was the amazing experience for my soul and senses. I'm definitely going to buy it again!",
          date: "2025-07-09T14:30:00-07:00",
        },
        {
          id: 2,
          customerName: "Sam",
          rate: "Good",
          customerReview: "Really delicious. I can't wait to try another products",
          date: "2024-12-15T18:45:00-08:00",
        },
      ],
      relatedProducts: relatedProductsExample,
      },
      {
        id: "12",
        images: [Image3, Image4],
        productName: "Mango Juice",
        priceMin: 5.50,
        priceMed: 10,
        priceMax: 13.00,
        isNewProduct: false,
        ingredients: ["Raspberries", "Slices of Apple", "Water or ice for blending"],
        collectionOptions: ["Regular Blends", "another option"],
        sizes: ["Large", "Medium", "Small"],
        description: [
          {
            id: 1,
            paragraphTextBigger: 'Savor the sophisticated and invigorating flavors of the Pomegranate Orchard Blend Smoothie. This unique blend combines the sweet and juicy pomegranate arils, crisp pear slices, and succulent red grapes, offering a perfect balance of orchard fruits. A sprig of rosemary adds an aromatic herbal note, while sparkling water brings a fizzy twist that elevates the taste experience. Ideal for a refreshing morning boost or an afternoon pick-me-up, the Pomegranate Orchard Blend Smoothie not only delights the taste buds but also provides an array of health benefits. Sip, savor, and indulge in this fizzy, nutrient-packed smoothie with every refreshing sip.',
          },
          {
            id: 2,
            paragraphTitle: 'Health Highlights',
            paragraphTextSmaller: 'Antioxidant-Rich: The combination of pomegranate, grapes, and rosemary provides a potent dose of antioxidants, protecting your body from oxidative damage and supporting overall cellular health.\nDigestive Support: Pears are high in fiber, promoting healthy digestion and supporting gut health.\nHeart Health: Red grapes and pomegranate are both known for their heart-healthy benefits, including improving circulation and reducing inflammation.\nHydration and Refreshment: The sparkling water adds a refreshing effervescence, making this smoothie a perfect choice for hydration without added sugars.'
          },
          {
            id: 3,
            paragraphTitle: "Allergy Information",
            paragraphTextSmaller: "The Pomegranate Orchard Blend Smoothie is free from common allergens like nuts, dairy, and gluten. However, it is prepared in a facility that processes these allergens, so cross-contamination may occur. If you have any concerns about allergies, especially related to fruit or herbs, please consult your healthcare provider."
          }
        ],
      additionalInformations: [
        {
          id: 1,
          title: "Size",
          text: ["Large", "Medium", "Small"].join(', ')
        }
      ],
      reviews: [
        {
          id: 1,
          customerName: "Martha",
          rate: "Perfect",
          customerReview: "That was the amazing experience for my soul and senses. I'm definitely going to buy it again!",
          date: "2025-07-09T14:30:00-07:00",
        },
        {
          id: 2,
          customerName: "Samabjdbajsbdjasbdjasdj",
          rate: "Not that bad",
          customerReview: "Really delicious. I can't wait to try another products",
          date: "2024-12-15T18:45:00-08:00",
        },
      ],
      relatedProducts: relatedProductsExample,
        
      },
      {
        id: "13",
        images: [Image4],
        productName: "Pomegranate Juice very very tasty",
        priceMin: 9.70,
        priceMed: 10,
        priceMax: 16.00,
        isNewProduct: true,
        ingredients: ["Raspberries", "Slices of Apple", "Water or ice for blending"],
        collectionOptions: ["Regular Blends", "another option"],
        sizes: ["Large", "Medium", "Small"],
        description: [
          {
            id: 1,
            paragraphTextBigger: 'Savor the sophisticated and invigorating flavors of the Pomegranate Orchard Blend Smoothie. This unique blend combines the sweet and juicy pomegranate arils, crisp pear slices, and succulent red grapes, offering a perfect balance of orchard fruits. A sprig of rosemary adds an aromatic herbal note, while sparkling water brings a fizzy twist that elevates the taste experience. Ideal for a refreshing morning boost or an afternoon pick-me-up, the Pomegranate Orchard Blend Smoothie not only delights the taste buds but also provides an array of health benefits. Sip, savor, and indulge in this fizzy, nutrient-packed smoothie with every refreshing sip.',
          },
          {
            id: 2,
            paragraphTitle: 'Health Highlights',
            paragraphTextSmaller: 'Antioxidant-Rich: The combination of pomegranate, grapes, and rosemary provides a potent dose of antioxidants, protecting your body from oxidative damage and supporting overall cellular health.\nDigestive Support: Pears are high in fiber, promoting healthy digestion and supporting gut health.\nHeart Health: Red grapes and pomegranate are both known for their heart-healthy benefits, including improving circulation and reducing inflammation.\nHydration and Refreshment: The sparkling water adds a refreshing effervescence, making this smoothie a perfect choice for hydration without added sugars.'
          },
          {
            id: 3,
            paragraphTitle: "Allergy Information",
            paragraphTextSmaller: "The Pomegranate Orchard Blend Smoothie is free from common allergens like nuts, dairy, and gluten. However, it is prepared in a facility that processes these allergens, so cross-contamination may occur. If you have any concerns about allergies, especially related to fruit or herbs, please consult your healthcare provider."
          }
        ],
      additionalInformations: [
        {
          id: 1,
          title: "Size",
          text: ["Large", "Medium", "Small"].join(', ')
        }
      ],
      reviews: [
        {
          id: 1,
          customerName: "Martha",
          rate: "Perfect",
          customerReview: "That was the amazing experience for my soul and senses. I'm definitely going to buy it again!",
          date: "2025-07-09T14:30:00-07:00",
        },
        {
          id: 2,
          customerName: "Sam",
          rate: "Good",
          customerReview: "Really delicious. I can't wait to try another products",
          date: "2024-12-15T18:45:00-08:00",
        },
      ],
      relatedProducts: relatedProductsExample,
        
      },
      {
        id: "14",
        images: [Image1],
        productName: "Bubble Milk Tea",
        priceMin: 5.50,
        priceMed: 10,
        priceMax: 13.00,
        isNewProduct: true,
        ingredients: ["Pineapple", "Yellow Pear", "Coconut water for a tropical taste"],
        collectionOptions: ["Regular Blends", "another option"],
        sizes: ["Large", "Medium", "Small"],
        description: [
          {
            id: 1,
            paragraphTextBigger: 'Savor the sophisticated and invigorating flavors of the Pomegranate Orchard Blend Smoothie. This unique blend combines the sweet and juicy pomegranate arils, crisp pear slices, and succulent red grapes, offering a perfect balance of orchard fruits. A sprig of rosemary adds an aromatic herbal note, while sparkling water brings a fizzy twist that elevates the taste experience. Ideal for a refreshing morning boost or an afternoon pick-me-up, the Pomegranate Orchard Blend Smoothie not only delights the taste buds but also provides an array of health benefits. Sip, savor, and indulge in this fizzy, nutrient-packed smoothie with every refreshing sip.',
          },
          {
            id: 2,
            paragraphTitle: 'Health Highlights',
            paragraphTextSmaller: 'Antioxidant-Rich: The combination of pomegranate, grapes, and rosemary provides a potent dose of antioxidants, protecting your body from oxidative damage and supporting overall cellular health.\nDigestive Support: Pears are high in fiber, promoting healthy digestion and supporting gut health.\nHeart Health: Red grapes and pomegranate are both known for their heart-healthy benefits, including improving circulation and reducing inflammation.\nHydration and Refreshment: The sparkling water adds a refreshing effervescence, making this smoothie a perfect choice for hydration without added sugars.'
          },
          {
            id: 3,
            paragraphTitle: "Allergy Information",
            paragraphTextSmaller: "The Pomegranate Orchard Blend Smoothie is free from common allergens like nuts, dairy, and gluten. However, it is prepared in a facility that processes these allergens, so cross-contamination may occur. If you have any concerns about allergies, especially related to fruit or herbs, please consult your healthcare provider."
          }
        ],
      additionalInformations: [
        {
          id: 1,
          title: "Size",
          text: ["Large", "Medium", "Small"].join(', ')
        }
      ],
      reviews: [
        {
          id: 1,
          customerName: "Martha",
          rate: "Perfect",
          customerReview: "That was the amazing experience for my soul and senses. I'm definitely going to buy it again!",
          date: "2025-07-09T14:30:00-07:00",
        },
        {
          id: 2,
          customerName: "Sam",
          rate: "Good",
          customerReview: "Really delicious. I can't wait to try another products",
          date: "2024-12-15T18:45:00-08:00",
        },
      ],
      relatedProducts: relatedProductsExample,
      },
    ],
   },
  "fruit-juices": { 
    title: 'Juices',
    products: [
      {
        id: "11",
        images: [Image2],
        productName: "Tomato Juice",
        priceMin: 5.50,
        priceMed: 10,
        priceMax: 13.00,
        isNewProduct: false,
        ingredients: ["Pineapple", "Yellow Pear", "Coconut water for a tropical taste"],
        collectionOptions: ["Regular Blends", "another option"],
        sizes: ["Large", "Medium", "Small"],
        description: [
          {
            id: 1,
            paragraphTextBigger: 'Savor the sophisticated and invigorating flavors of the Pomegranate Orchard Blend Smoothie. This unique blend combines the sweet and juicy pomegranate arils, crisp pear slices, and succulent red grapes, offering a perfect balance of orchard fruits. A sprig of rosemary adds an aromatic herbal note, while sparkling water brings a fizzy twist that elevates the taste experience. Ideal for a refreshing morning boost or an afternoon pick-me-up, the Pomegranate Orchard Blend Smoothie not only delights the taste buds but also provides an array of health benefits. Sip, savor, and indulge in this fizzy, nutrient-packed smoothie with every refreshing sip.',
          },
          {
            id: 2,
            paragraphTitle: 'Health Highlights',
            paragraphTextSmaller: 'Antioxidant-Rich: The combination of pomegranate, grapes, and rosemary provides a potent dose of antioxidants, protecting your body from oxidative damage and supporting overall cellular health.\nDigestive Support: Pears are high in fiber, promoting healthy digestion and supporting gut health.\nHeart Health: Red grapes and pomegranate are both known for their heart-healthy benefits, including improving circulation and reducing inflammation.\nHydration and Refreshment: The sparkling water adds a refreshing effervescence, making this smoothie a perfect choice for hydration without added sugars.'
          },
          {
            id: 3,
            paragraphTitle: "Allergy Information",
            paragraphTextSmaller: "The Pomegranate Orchard Blend Smoothie is free from common allergens like nuts, dairy, and gluten. However, it is prepared in a facility that processes these allergens, so cross-contamination may occur. If you have any concerns about allergies, especially related to fruit or herbs, please consult your healthcare provider."
          }
        ],
      additionalInformations: [
        {
          id: 1,
          title: "Size",
          text: ["Large", "Medium", "Small"].join(', ')
        }
      ],
      reviews: [
        {
          id: 1,
          customerName: "Martha",
          rate: "Perfect",
          customerReview: "That was the amazing experience for my soul and senses. I'm definitely going to buy it again!",
          date: "2025-07-09T14:30:00-07:00",
        },
        {
          id: 2,
          customerName: "Sam",
          rate: "Good",
          customerReview: "Really delicious. I can't wait to try another products",
          date: "2024-12-15T18:45:00-08:00",
        },
      ],
      relatedProducts: relatedProductsExample,
      },
      {
        id: "12",
        images: [Image3, Image4],
        productName: "Mango Juice",
        priceMin: 5.50,
        priceMed: 10,
        priceMax: 13.00,
        isNewProduct: false,
        ingredients: ["Raspberries", "Slices of Apple", "Water or ice for blending"],
        collectionOptions: ["Regular Blends", "another option"],
        sizes: ["Large", "Medium", "Small"],
        description: [
          {
            id: 1,
            paragraphTextBigger: 'Savor the sophisticated and invigorating flavors of the Pomegranate Orchard Blend Smoothie. This unique blend combines the sweet and juicy pomegranate arils, crisp pear slices, and succulent red grapes, offering a perfect balance of orchard fruits. A sprig of rosemary adds an aromatic herbal note, while sparkling water brings a fizzy twist that elevates the taste experience. Ideal for a refreshing morning boost or an afternoon pick-me-up, the Pomegranate Orchard Blend Smoothie not only delights the taste buds but also provides an array of health benefits. Sip, savor, and indulge in this fizzy, nutrient-packed smoothie with every refreshing sip.',
          },
          {
            id: 2,
            paragraphTitle: 'Health Highlights',
            paragraphTextSmaller: 'Antioxidant-Rich: The combination of pomegranate, grapes, and rosemary provides a potent dose of antioxidants, protecting your body from oxidative damage and supporting overall cellular health.\nDigestive Support: Pears are high in fiber, promoting healthy digestion and supporting gut health.\nHeart Health: Red grapes and pomegranate are both known for their heart-healthy benefits, including improving circulation and reducing inflammation.\nHydration and Refreshment: The sparkling water adds a refreshing effervescence, making this smoothie a perfect choice for hydration without added sugars.'
          },
          {
            id: 3,
            paragraphTitle: "Allergy Information",
            paragraphTextSmaller: "The Pomegranate Orchard Blend Smoothie is free from common allergens like nuts, dairy, and gluten. However, it is prepared in a facility that processes these allergens, so cross-contamination may occur. If you have any concerns about allergies, especially related to fruit or herbs, please consult your healthcare provider."
          }
        ],
      additionalInformations: [
        {
          id: 1,
          title: "Size",
          text: ["Large", "Medium", "Small"].join(', ')
        }
      ],
      reviews: [
        {
          id: 1,
          customerName: "Martha",
          rate: "Perfect",
          customerReview: "That was the amazing experience for my soul and senses. I'm definitely going to buy it again!",
          date: "2025-07-09T14:30:00-07:00",
        },
        {
          id: 2,
          customerName: "Sam",
          rate: "Good",
          customerReview: "Really delicious. I can't wait to try another products",
          date: "2024-12-15T18:45:00-08:00",
        },
      ],
      relatedProducts: relatedProductsExample,
        
      },
      {
        id: "13",
        images: [Image4],
        productName: "Pomegranate Juice very very tasty",
        priceMin: 9.70,
        priceMed: 10,
        priceMax: 16.00,
        isNewProduct: true,
        ingredients: ["Raspberries", "Slices of Apple", "Water or ice for blending"],
        collectionOptions: ["Regular Blends", "another option"],
        sizes: ["Large", "Medium", "Small"],
        description: [
          {
            id: 1,
            paragraphTextBigger: 'Savor the sophisticated and invigorating flavors of the Pomegranate Orchard Blend Smoothie. This unique blend combines the sweet and juicy pomegranate arils, crisp pear slices, and succulent red grapes, offering a perfect balance of orchard fruits. A sprig of rosemary adds an aromatic herbal note, while sparkling water brings a fizzy twist that elevates the taste experience. Ideal for a refreshing morning boost or an afternoon pick-me-up, the Pomegranate Orchard Blend Smoothie not only delights the taste buds but also provides an array of health benefits. Sip, savor, and indulge in this fizzy, nutrient-packed smoothie with every refreshing sip.',
          },
          {
            id: 2,
            paragraphTitle: 'Health Highlights',
            paragraphTextSmaller: 'Antioxidant-Rich: The combination of pomegranate, grapes, and rosemary provides a potent dose of antioxidants, protecting your body from oxidative damage and supporting overall cellular health.\nDigestive Support: Pears are high in fiber, promoting healthy digestion and supporting gut health.\nHeart Health: Red grapes and pomegranate are both known for their heart-healthy benefits, including improving circulation and reducing inflammation.\nHydration and Refreshment: The sparkling water adds a refreshing effervescence, making this smoothie a perfect choice for hydration without added sugars.'
          },
          {
            id: 3,
            paragraphTitle: "Allergy Information",
            paragraphTextSmaller: "The Pomegranate Orchard Blend Smoothie is free from common allergens like nuts, dairy, and gluten. However, it is prepared in a facility that processes these allergens, so cross-contamination may occur. If you have any concerns about allergies, especially related to fruit or herbs, please consult your healthcare provider."
          }
        ],
      additionalInformations: [
        {
          id: 1,
          title: "Size",
          text: ["Large", "Medium", "Small"].join(', ')
        }
      ],
      reviews: [
        {
          id: 1,
          customerName: "Martha",
          rate: "Perfect",
          customerReview: "That was the amazing experience for my soul and senses. I'm definitely going to buy it again!",
          date: "2025-07-09T14:30:00-07:00",
        },
        {
          id: 2,
          customerName: "Sam",
          rate: "Good",
          customerReview: "Really delicious. I can't wait to try another products",
          date: "2024-12-15T18:45:00-08:00",
        },
      ],
      relatedProducts: relatedProductsExample,
        
      },
      {
        id: "6",
        images: [Image2],
        productName: "Kiwi Juice",
        priceMin: 9.70,
        priceMed: 10,
        priceMax: 16.00,
        isNewProduct: false,
        ingredients: ["Pineapple", "Yellow Pear", "Coconut water for a tropical taste"],
        collectionOptions: ["Regular Blends", "another option"],
        sizes: ["Large", "Medium", "Small"],
        description: [
          {
            id: 1,
            paragraphTextBigger: 'Savor the sophisticated and invigorating flavors of the Pomegranate Orchard Blend Smoothie. This unique blend combines the sweet and juicy pomegranate arils, crisp pear slices, and succulent red grapes, offering a perfect balance of orchard fruits. A sprig of rosemary adds an aromatic herbal note, while sparkling water brings a fizzy twist that elevates the taste experience. Ideal for a refreshing morning boost or an afternoon pick-me-up, the Pomegranate Orchard Blend Smoothie not only delights the taste buds but also provides an array of health benefits. Sip, savor, and indulge in this fizzy, nutrient-packed smoothie with every refreshing sip.',
          },
          {
            id: 2,
            paragraphTitle: 'Health Highlights',
            paragraphTextSmaller: 'Antioxidant-Rich: The combination of pomegranate, grapes, and rosemary provides a potent dose of antioxidants, protecting your body from oxidative damage and supporting overall cellular health.\nDigestive Support: Pears are high in fiber, promoting healthy digestion and supporting gut health.\nHeart Health: Red grapes and pomegranate are both known for their heart-healthy benefits, including improving circulation and reducing inflammation.\nHydration and Refreshment: The sparkling water adds a refreshing effervescence, making this smoothie a perfect choice for hydration without added sugars.'
          },
          {
            id: 3,
            paragraphTitle: "Allergy Information",
            paragraphTextSmaller: "The Pomegranate Orchard Blend Smoothie is free from common allergens like nuts, dairy, and gluten. However, it is prepared in a facility that processes these allergens, so cross-contamination may occur. If you have any concerns about allergies, especially related to fruit or herbs, please consult your healthcare provider."
          }
        ],
      additionalInformations: [
        {
          id: 1,
          title: "Size",
          text: ["Large", "Medium", "Small"].join(', ')
        }
      ],
      reviews: [
        {
          id: 1,
          customerName: "Martha",
          rate: "Perfect",
          customerReview: "That was the amazing experience for my soul and senses. I'm definitely going to buy it again!",
          date: "2025-07-09T14:30:00-07:00",
        },
        {
          id: 2,
          customerName: "Sam",
          rate: "Good",
          customerReview: "Really delicious. I can't wait to try another products",
          date: "2024-12-15T18:45:00-08:00",
        },
      ],
      relatedProducts: relatedProductsExample,
      },
      {
        id: "7",
        images: [Image3],
        productName: "Pomegranate Juice",
        priceMin: 5.50,
        priceMed: 10,
        priceMax: 13.00,
        isNewProduct: false,
        ingredients: ["Pineapple", "Yellow Pear", "Coconut water for a tropical taste"],
        collectionOptions: ["Regular Blends", "another option"],
        sizes: ["Large", "Medium", "Small"],
        description: [
          {
            id: 1,
            paragraphTextBigger: 'Savor the sophisticated and invigorating flavors of the Pomegranate Orchard Blend Smoothie. This unique blend combines the sweet and juicy pomegranate arils, crisp pear slices, and succulent red grapes, offering a perfect balance of orchard fruits. A sprig of rosemary adds an aromatic herbal note, while sparkling water brings a fizzy twist that elevates the taste experience. Ideal for a refreshing morning boost or an afternoon pick-me-up, the Pomegranate Orchard Blend Smoothie not only delights the taste buds but also provides an array of health benefits. Sip, savor, and indulge in this fizzy, nutrient-packed smoothie with every refreshing sip.',
          },
          {
            id: 2,
            paragraphTitle: 'Health Highlights',
            paragraphTextSmaller: 'Antioxidant-Rich: The combination of pomegranate, grapes, and rosemary provides a potent dose of antioxidants, protecting your body from oxidative damage and supporting overall cellular health.\nDigestive Support: Pears are high in fiber, promoting healthy digestion and supporting gut health.\nHeart Health: Red grapes and pomegranate are both known for their heart-healthy benefits, including improving circulation and reducing inflammation.\nHydration and Refreshment: The sparkling water adds a refreshing effervescence, making this smoothie a perfect choice for hydration without added sugars.'
          },
          {
            id: 3,
            paragraphTitle: "Allergy Information",
            paragraphTextSmaller: "The Pomegranate Orchard Blend Smoothie is free from common allergens like nuts, dairy, and gluten. However, it is prepared in a facility that processes these allergens, so cross-contamination may occur. If you have any concerns about allergies, especially related to fruit or herbs, please consult your healthcare provider."
          }
        ],
      additionalInformations: [
        {
          id: 1,
          title: "Size",
          text: ["Large", "Medium", "Small"].join(', ')
        }
      ],
      reviews: [
        {
          id: 1,
          customerName: "Martha",
          rate: "Perfect",
          customerReview: "That was the amazing experience for my soul and senses. I'm definitely going to buy it again!",
          date: "2025-07-09T14:30:00-07:00",
        },
        {
          id: 2,
          customerName: "Sam",
          rate: "Good",
          customerReview: "Really delicious. I can't wait to try another products",
          date: "2024-12-15T18:45:00-08:00",
        },
      ],
      relatedProducts: relatedProductsExample,
      },
      {
        id: "8",
        images: [Image4],
        productName: "Bubble Milk Tea",
        priceMin: 5.50,
        priceMed: 10,
        priceMax: 13.00,
        isNewProduct: false,
        ingredients: ["Pineapple", "Yellow Pear", "Coconut water for a tropical taste"],
        collectionOptions: ["Regular Blends", "another option"],
        sizes: ["Large", "Medium", "Small"],
        description: [
          {
            id: 1,
            paragraphTextBigger: 'Savor the sophisticated and invigorating flavors of the Pomegranate Orchard Blend Smoothie. This unique blend combines the sweet and juicy pomegranate arils, crisp pear slices, and succulent red grapes, offering a perfect balance of orchard fruits. A sprig of rosemary adds an aromatic herbal note, while sparkling water brings a fizzy twist that elevates the taste experience. Ideal for a refreshing morning boost or an afternoon pick-me-up, the Pomegranate Orchard Blend Smoothie not only delights the taste buds but also provides an array of health benefits. Sip, savor, and indulge in this fizzy, nutrient-packed smoothie with every refreshing sip.',
          },
          {
            id: 2,
            paragraphTitle: 'Health Highlights',
            paragraphTextSmaller: 'Antioxidant-Rich: The combination of pomegranate, grapes, and rosemary provides a potent dose of antioxidants, protecting your body from oxidative damage and supporting overall cellular health.\nDigestive Support: Pears are high in fiber, promoting healthy digestion and supporting gut health.\nHeart Health: Red grapes and pomegranate are both known for their heart-healthy benefits, including improving circulation and reducing inflammation.\nHydration and Refreshment: The sparkling water adds a refreshing effervescence, making this smoothie a perfect choice for hydration without added sugars.'
          },
          {
            id: 3,
            paragraphTitle: "Allergy Information",
            paragraphTextSmaller: "The Pomegranate Orchard Blend Smoothie is free from common allergens like nuts, dairy, and gluten. However, it is prepared in a facility that processes these allergens, so cross-contamination may occur. If you have any concerns about allergies, especially related to fruit or herbs, please consult your healthcare provider."
          }
        ],
      additionalInformations: [
        {
          id: 1,
          title: "Size",
          text: ["Large", "Medium", "Small"].join(', ')
        }
      ],
      reviews: [
        {
          id: 1,
          customerName: "Martha",
          rate: "Perfect",
          customerReview: "That was the amazing experience for my soul and senses. I'm definitely going to buy it again!",
          date: "2025-07-09T14:30:00-07:00",
        },
        {
          id: 2,
          customerName: "Sam",
          rate: "Good",
          customerReview: "Really delicious. I can't wait to try another products",
          date: "2024-12-15T18:45:00-08:00",
        },
      ],
      relatedProducts: relatedProductsExample,
      },
      {
        id: "9",
        images: [Image1],
        productName: "Kiwi Juice",
        priceMin: 9.70,
        priceMed: 10,
        priceMax: 16.00,
        isNewProduct: false,
        ingredients: ["Raspberries", "Slices of Apple", "Water or ice for blending"],
        collectionOptions: ["Regular Blends", "another option"],
        sizes: ["Large", "Medium", "Small"],
        description: [
          {
            id: 1,
            paragraphTextBigger: 'Savor the sophisticated and invigorating flavors of the Pomegranate Orchard Blend Smoothie. This unique blend combines the sweet and juicy pomegranate arils, crisp pear slices, and succulent red grapes, offering a perfect balance of orchard fruits. A sprig of rosemary adds an aromatic herbal note, while sparkling water brings a fizzy twist that elevates the taste experience. Ideal for a refreshing morning boost or an afternoon pick-me-up, the Pomegranate Orchard Blend Smoothie not only delights the taste buds but also provides an array of health benefits. Sip, savor, and indulge in this fizzy, nutrient-packed smoothie with every refreshing sip.',
          },
          {
            id: 2,
            paragraphTitle: 'Health Highlights',
            paragraphTextSmaller: 'Antioxidant-Rich: The combination of pomegranate, grapes, and rosemary provides a potent dose of antioxidants, protecting your body from oxidative damage and supporting overall cellular health.\nDigestive Support: Pears are high in fiber, promoting healthy digestion and supporting gut health.\nHeart Health: Red grapes and pomegranate are both known for their heart-healthy benefits, including improving circulation and reducing inflammation.\nHydration and Refreshment: The sparkling water adds a refreshing effervescence, making this smoothie a perfect choice for hydration without added sugars.'
          },
          {
            id: 3,
            paragraphTitle: "Allergy Information",
            paragraphTextSmaller: "The Pomegranate Orchard Blend Smoothie is free from common allergens like nuts, dairy, and gluten. However, it is prepared in a facility that processes these allergens, so cross-contamination may occur. If you have any concerns about allergies, especially related to fruit or herbs, please consult your healthcare provider."
          }
        ],
      additionalInformations: [
        {
          id: 1,
          title: "Size",
          text: ["Large", "Medium", "Small"].join(', ')
        }
      ],
      reviews: [
        {
          id: 1,
          customerName: "Martha",
          rate: "Perfect",
          customerReview: "That was the amazing experience for my soul and senses. I'm definitely going to buy it again!",
          date: "2025-07-09T14:30:00-07:00",
        },
        {
          id: 2,
          customerName: "Sam",
          rate: "Good",
          customerReview: "Really delicious. I can't wait to try another products",
          date: "2024-12-15T18:45:00-08:00",
        },
      ],
      relatedProducts: relatedProductsExample,
      },
      {
        id: "10",
        images: [Image1],
        productName: "Strawberry Juice",
        priceMin: 5.50,
        priceMed: 10,
        priceMax: 13.00,
        isNewProduct: true,
        ingredients: ["Raspberries", "Slices of Apple", "Water or ice for blending"],
        collectionOptions: ["Regular Blends", "another option"],
        sizes: ["Large", "Medium", "Small"],
        description: [
          {
            id: 1,
            paragraphTextBigger: 'Savor the sophisticated and invigorating flavors of the Pomegranate Orchard Blend Smoothie. This unique blend combines the sweet and juicy pomegranate arils, crisp pear slices, and succulent red grapes, offering a perfect balance of orchard fruits. A sprig of rosemary adds an aromatic herbal note, while sparkling water brings a fizzy twist that elevates the taste experience. Ideal for a refreshing morning boost or an afternoon pick-me-up, the Pomegranate Orchard Blend Smoothie not only delights the taste buds but also provides an array of health benefits. Sip, savor, and indulge in this fizzy, nutrient-packed smoothie with every refreshing sip.',
          },
          {
            id: 2,
            paragraphTitle: 'Health Highlights',
            paragraphTextSmaller: 'Antioxidant-Rich: The combination of pomegranate, grapes, and rosemary provides a potent dose of antioxidants, protecting your body from oxidative damage and supporting overall cellular health.\nDigestive Support: Pears are high in fiber, promoting healthy digestion and supporting gut health.\nHeart Health: Red grapes and pomegranate are both known for their heart-healthy benefits, including improving circulation and reducing inflammation.\nHydration and Refreshment: The sparkling water adds a refreshing effervescence, making this smoothie a perfect choice for hydration without added sugars.'
          },
          {
            id: 3,
            paragraphTitle: "Allergy Information",
            paragraphTextSmaller: "The Pomegranate Orchard Blend Smoothie is free from common allergens like nuts, dairy, and gluten. However, it is prepared in a facility that processes these allergens, so cross-contamination may occur. If you have any concerns about allergies, especially related to fruit or herbs, please consult your healthcare provider."
          }
        ],
      additionalInformations: [
        {
          id: 1,
          title: "Size",
          text: ["Large", "Medium", "Small"].join(', ')
        }
      ],
      reviews: [
        {
          id: 1,
          customerName: "Martha",
          rate: "Perfect",
          customerReview: "That was the amazing experience for my soul and senses. I'm definitely going to buy it again!",
          date: "2025-07-09T14:30:00-07:00",
        },
        {
          id: 2,
          customerName: "Sam",
          rate: "Good",
          customerReview: "Really delicious. I can't wait to try another products",
          date: "2024-12-15T18:45:00-08:00",
        },
      ],
      relatedProducts: relatedProductsExample,
      },
    ] 
  },
  "fruit-salads": { 
    title: 'Salads',
    products: [
      {
        id: "4",
        images: [Image4],
        productName: "Pomegranate Juice very very tasty and superdelicious",
        priceMin: 5.50,
        priceMed: 10,
        priceMax: 13.00,
        isNewProduct: true,
        ingredients: ["Pineapple", "Yellow Pear", "Coconut water for a tropical taste"],
        collectionOptions: ["Regular Blends", "another option"],
        sizes: ["Large", "Medium", "Small"],
        description: [
          {
            id: 1,
            paragraphTextBigger: 'Savor the sophisticated and invigorating flavors of the Pomegranate Orchard Blend Smoothie. This unique blend combines the sweet and juicy pomegranate arils, crisp pear slices, and succulent red grapes, offering a perfect balance of orchard fruits. A sprig of rosemary adds an aromatic herbal note, while sparkling water brings a fizzy twist that elevates the taste experience. Ideal for a refreshing morning boost or an afternoon pick-me-up, the Pomegranate Orchard Blend Smoothie not only delights the taste buds but also provides an array of health benefits. Sip, savor, and indulge in this fizzy, nutrient-packed smoothie with every refreshing sip.',
          },
          {
            id: 2,
            paragraphTitle: 'Health Highlights',
            paragraphTextSmaller: 'Antioxidant-Rich: The combination of pomegranate, grapes, and rosemary provides a potent dose of antioxidants, protecting your body from oxidative damage and supporting overall cellular health.\nDigestive Support: Pears are high in fiber, promoting healthy digestion and supporting gut health.\nHeart Health: Red grapes and pomegranate are both known for their heart-healthy benefits, including improving circulation and reducing inflammation.\nHydration and Refreshment: The sparkling water adds a refreshing effervescence, making this smoothie a perfect choice for hydration without added sugars.'
          },
          {
            id: 3,
            paragraphTitle: "Allergy Information",
            paragraphTextSmaller: "The Pomegranate Orchard Blend Smoothie is free from common allergens like nuts, dairy, and gluten. However, it is prepared in a facility that processes these allergens, so cross-contamination may occur. If you have any concerns about allergies, especially related to fruit or herbs, please consult your healthcare provider."
          }
        ],
      additionalInformations: [
        {
          id: 1,
          title: "Size",
          text: ["Large", "Medium", "Small"].join(', ')
        }
      ],
      reviews: [
        {
          id: 1,
          customerName: "Martha",
          rate: "Perfect",
          customerReview: "That was the amazing experience for my soul and senses. I'm definitely going to buy it again!",
          date: "2025-07-09T14:30:00-07:00",
        },
        {
          id: 2,
          customerName: "Sam",
          rate: "Good",
          customerReview: "Really delicious. I can't wait to try another products",
          date: "2024-12-15T18:45:00-08:00",
        },
      ],
      relatedProducts: relatedProductsExample,
      },
      {
        id: "5",
        images: [Image1],
        productName: "Bubble Milk Tea",
        priceMin: 5.50,
        priceMed: 10,
        priceMax: 13.00,
        isNewProduct: true,
        ingredients: ["Raspberries", "Slices of Apple", "Water or ice for blending"],
        collectionOptions: ["Regular Blends", "another option"],
        sizes: ["Large", "Medium", "Small"],
        description: [
          {
            id: 1,
            paragraphTextBigger: 'Savor the sophisticated and invigorating flavors of the Pomegranate Orchard Blend Smoothie. This unique blend combines the sweet and juicy pomegranate arils, crisp pear slices, and succulent red grapes, offering a perfect balance of orchard fruits. A sprig of rosemary adds an aromatic herbal note, while sparkling water brings a fizzy twist that elevates the taste experience. Ideal for a refreshing morning boost or an afternoon pick-me-up, the Pomegranate Orchard Blend Smoothie not only delights the taste buds but also provides an array of health benefits. Sip, savor, and indulge in this fizzy, nutrient-packed smoothie with every refreshing sip.',
          },
          {
            id: 2,
            paragraphTitle: 'Health Highlights',
            paragraphTextSmaller: 'Antioxidant-Rich: The combination of pomegranate, grapes, and rosemary provides a potent dose of antioxidants, protecting your body from oxidative damage and supporting overall cellular health.\nDigestive Support: Pears are high in fiber, promoting healthy digestion and supporting gut health.\nHeart Health: Red grapes and pomegranate are both known for their heart-healthy benefits, including improving circulation and reducing inflammation.\nHydration and Refreshment: The sparkling water adds a refreshing effervescence, making this smoothie a perfect choice for hydration without added sugars.'
          },
          {
            id: 3,
            paragraphTitle: "Allergy Information",
            paragraphTextSmaller: "The Pomegranate Orchard Blend Smoothie is free from common allergens like nuts, dairy, and gluten. However, it is prepared in a facility that processes these allergens, so cross-contamination may occur. If you have any concerns about allergies, especially related to fruit or herbs, please consult your healthcare provider."
          }
        ],
      additionalInformations: [
        {
          id: 1,
          title: "Size",
          text: ["Large", "Medium", "Small"].join(', ')
        }
      ],
      reviews: [
        {
          id: 1,
          customerName: "Martha",
          rate: "Perfect",
          customerReview: "That was the amazing experience for my soul and senses. I'm definitely going to buy it again!",
          date: "2025-07-09T14:30:00-07:00",
        },
        {
          id: 2,
          customerName: "Sam",
          rate: "Good",
          customerReview: "Really delicious. I can't wait to try another products",
          date: "2024-12-15T18:45:00-08:00",
        },
      ],
      relatedProducts: relatedProductsExample,
      },
      {
        id: "6",
        images: [Image2],
        productName: "Kiwi Juice",
        priceMin: 9.70,
        priceMed: 10,
        priceMax: 16.00,
        isNewProduct: false,
        ingredients: ["Pineapple", "Yellow Pear", "Coconut water for a tropical taste"],
        collectionOptions: ["Regular Blends", "another option"],
        sizes: ["Large", "Medium", "Small"],
        description: [
          {
            id: 1,
            paragraphTextBigger: 'Savor the sophisticated and invigorating flavors of the Pomegranate Orchard Blend Smoothie. This unique blend combines the sweet and juicy pomegranate arils, crisp pear slices, and succulent red grapes, offering a perfect balance of orchard fruits. A sprig of rosemary adds an aromatic herbal note, while sparkling water brings a fizzy twist that elevates the taste experience. Ideal for a refreshing morning boost or an afternoon pick-me-up, the Pomegranate Orchard Blend Smoothie not only delights the taste buds but also provides an array of health benefits. Sip, savor, and indulge in this fizzy, nutrient-packed smoothie with every refreshing sip.',
          },
          {
            id: 2,
            paragraphTitle: 'Health Highlights',
            paragraphTextSmaller: 'Antioxidant-Rich: The combination of pomegranate, grapes, and rosemary provides a potent dose of antioxidants, protecting your body from oxidative damage and supporting overall cellular health.\nDigestive Support: Pears are high in fiber, promoting healthy digestion and supporting gut health.\nHeart Health: Red grapes and pomegranate are both known for their heart-healthy benefits, including improving circulation and reducing inflammation.\nHydration and Refreshment: The sparkling water adds a refreshing effervescence, making this smoothie a perfect choice for hydration without added sugars.'
          },
          {
            id: 3,
            paragraphTitle: "Allergy Information",
            paragraphTextSmaller: "The Pomegranate Orchard Blend Smoothie is free from common allergens like nuts, dairy, and gluten. However, it is prepared in a facility that processes these allergens, so cross-contamination may occur. If you have any concerns about allergies, especially related to fruit or herbs, please consult your healthcare provider."
          }
        ],
      additionalInformations: [
        {
          id: 1,
          title: "Size",
          text: ["Large", "Medium", "Small"].join(', ')
        }
      ],
      reviews: [
        {
          id: 1,
          customerName: "Martha",
          rate: "Perfect",
          customerReview: "That was the amazing experience for my soul and senses. I'm definitely going to buy it again!",
          date: "2025-07-09T14:30:00-07:00",
        },
        {
          id: 2,
          customerName: "Sam",
          rate: "Good",
          customerReview: "Really delicious. I can't wait to try another products",
          date: "2024-12-15T18:45:00-08:00",
        },
      ],
      relatedProducts: relatedProductsExample,
      },
      {
        id: "7",
        images: [Image3],
        productName: "Pomegranate Juice",
        priceMin: 5.50,
        priceMed: 10,
        priceMax: 13.00,
        isNewProduct: false,
        ingredients: ["Pineapple", "Yellow Pear", "Coconut water for a tropical taste"],
        collectionOptions: ["Regular Blends", "another option"],
        sizes: ["Large", "Medium", "Small"],
        description: [
          {
            id: 1,
            paragraphTextBigger: 'Savor the sophisticated and invigorating flavors of the Pomegranate Orchard Blend Smoothie. This unique blend combines the sweet and juicy pomegranate arils, crisp pear slices, and succulent red grapes, offering a perfect balance of orchard fruits. A sprig of rosemary adds an aromatic herbal note, while sparkling water brings a fizzy twist that elevates the taste experience. Ideal for a refreshing morning boost or an afternoon pick-me-up, the Pomegranate Orchard Blend Smoothie not only delights the taste buds but also provides an array of health benefits. Sip, savor, and indulge in this fizzy, nutrient-packed smoothie with every refreshing sip.',
          },
          {
            id: 2,
            paragraphTitle: 'Health Highlights',
            paragraphTextSmaller: 'Antioxidant-Rich: The combination of pomegranate, grapes, and rosemary provides a potent dose of antioxidants, protecting your body from oxidative damage and supporting overall cellular health.\nDigestive Support: Pears are high in fiber, promoting healthy digestion and supporting gut health.\nHeart Health: Red grapes and pomegranate are both known for their heart-healthy benefits, including improving circulation and reducing inflammation.\nHydration and Refreshment: The sparkling water adds a refreshing effervescence, making this smoothie a perfect choice for hydration without added sugars.'
          },
          {
            id: 3,
            paragraphTitle: "Allergy Information",
            paragraphTextSmaller: "The Pomegranate Orchard Blend Smoothie is free from common allergens like nuts, dairy, and gluten. However, it is prepared in a facility that processes these allergens, so cross-contamination may occur. If you have any concerns about allergies, especially related to fruit or herbs, please consult your healthcare provider."
          }
        ],
      additionalInformations: [
        {
          id: 1,
          title: "Size",
          text: ["Large", "Medium", "Small"].join(', ')
        }
      ],
      reviews: [
        {
          id: 1,
          customerName: "Martha",
          rate: "Perfect",
          customerReview: "That was the amazing experience for my soul and senses. I'm definitely going to buy it again!",
          date: "2025-07-09T14:30:00-07:00",
        },
        {
          id: 2,
          customerName: "Sam",
          rate: "Good",
          customerReview: "Really delicious. I can't wait to try another products",
          date: "2024-12-15T18:45:00-08:00",
        },
      ],
      relatedProducts: relatedProductsExample,
      },
      {
        id: "8",
        images: [Image4],
        productName: "Bubble Milk Tea",
        priceMin: 5.50,
        priceMed: 10,
        priceMax: 13.00,
        isNewProduct: false,
        ingredients: ["Pineapple", "Yellow Pear", "Coconut water for a tropical taste"],
        collectionOptions: ["Regular Blends", "another option"],
        sizes: ["Large", "Medium", "Small"],
        description: [
          {
            id: 1,
            paragraphTextBigger: 'Savor the sophisticated and invigorating flavors of the Pomegranate Orchard Blend Smoothie. This unique blend combines the sweet and juicy pomegranate arils, crisp pear slices, and succulent red grapes, offering a perfect balance of orchard fruits. A sprig of rosemary adds an aromatic herbal note, while sparkling water brings a fizzy twist that elevates the taste experience. Ideal for a refreshing morning boost or an afternoon pick-me-up, the Pomegranate Orchard Blend Smoothie not only delights the taste buds but also provides an array of health benefits. Sip, savor, and indulge in this fizzy, nutrient-packed smoothie with every refreshing sip.',
          },
          {
            id: 2,
            paragraphTitle: 'Health Highlights',
            paragraphTextSmaller: 'Antioxidant-Rich: The combination of pomegranate, grapes, and rosemary provides a potent dose of antioxidants, protecting your body from oxidative damage and supporting overall cellular health.\nDigestive Support: Pears are high in fiber, promoting healthy digestion and supporting gut health.\nHeart Health: Red grapes and pomegranate are both known for their heart-healthy benefits, including improving circulation and reducing inflammation.\nHydration and Refreshment: The sparkling water adds a refreshing effervescence, making this smoothie a perfect choice for hydration without added sugars.'
          },
          {
            id: 3,
            paragraphTitle: "Allergy Information",
            paragraphTextSmaller: "The Pomegranate Orchard Blend Smoothie is free from common allergens like nuts, dairy, and gluten. However, it is prepared in a facility that processes these allergens, so cross-contamination may occur. If you have any concerns about allergies, especially related to fruit or herbs, please consult your healthcare provider."
          }
        ],
      additionalInformations: [
        {
          id: 1,
          title: "Size",
          text: ["Large", "Medium", "Small"].join(', ')
        }
      ],
      reviews: [
        {
          id: 1,
          customerName: "Martha",
          rate: "Perfect",
          customerReview: "That was the amazing experience for my soul and senses. I'm definitely going to buy it again!",
          date: "2025-07-09T14:30:00-07:00",
        },
        {
          id: 2,
          customerName: "Sam",
          rate: "Good",
          customerReview: "Really delicious. I can't wait to try another products",
          date: "2024-12-15T18:45:00-08:00",
        },
      ],
      relatedProducts: relatedProductsExample,
      },
    ]
  },
  "fruit-shakes": { 
    title: 'Shakes',
    products: [
       {
        id: "10",
        images: [Image1],
        productName: "Strawberry Juice",
        priceMin: 5.50,
        priceMed: 10,
        priceMax: 13.00,
        isNewProduct: true,
        ingredients: ["Raspberries", "Slices of Apple", "Water or ice for blending"],
        collectionOptions: ["Regular Blends", "another option"],
        sizes: ["Large", "Medium", "Small"],
        description: [
          {
            id: 1,
            paragraphTextBigger: 'Savor the sophisticated and invigorating flavors of the Pomegranate Orchard Blend Smoothie. This unique blend combines the sweet and juicy pomegranate arils, crisp pear slices, and succulent red grapes, offering a perfect balance of orchard fruits. A sprig of rosemary adds an aromatic herbal note, while sparkling water brings a fizzy twist that elevates the taste experience. Ideal for a refreshing morning boost or an afternoon pick-me-up, the Pomegranate Orchard Blend Smoothie not only delights the taste buds but also provides an array of health benefits. Sip, savor, and indulge in this fizzy, nutrient-packed smoothie with every refreshing sip.',
          },
          {
            id: 2,
            paragraphTitle: 'Health Highlights',
            paragraphTextSmaller: 'Antioxidant-Rich: The combination of pomegranate, grapes, and rosemary provides a potent dose of antioxidants, protecting your body from oxidative damage and supporting overall cellular health.\nDigestive Support: Pears are high in fiber, promoting healthy digestion and supporting gut health.\nHeart Health: Red grapes and pomegranate are both known for their heart-healthy benefits, including improving circulation and reducing inflammation.\nHydration and Refreshment: The sparkling water adds a refreshing effervescence, making this smoothie a perfect choice for hydration without added sugars.'
          },
          {
            id: 3,
            paragraphTitle: "Allergy Information",
            paragraphTextSmaller: "The Pomegranate Orchard Blend Smoothie is free from common allergens like nuts, dairy, and gluten. However, it is prepared in a facility that processes these allergens, so cross-contamination may occur. If you have any concerns about allergies, especially related to fruit or herbs, please consult your healthcare provider."
          }
        ],
      additionalInformations: [
        {
          id: 1,
          title: "Size",
          text: ["Large", "Medium", "Small"].join(', ')
        }
      ],
      reviews: [
        {
          id: 1,
          customerName: "Martha",
          rate: "Perfect",
          customerReview: "That was the amazing experience for my soul and senses. I'm definitely going to buy it again!",
          date: "2025-07-09T14:30:00-07:00",
        },
        {
          id: 2,
          customerName: "Sam",
          rate: "Good",
          customerReview: "Really delicious. I can't wait to try another products",
          date: "2024-12-15T18:45:00-08:00",
        },
      ],
      relatedProducts: relatedProductsExample,
      },
      {
        id: "11",
        images: [Image2],
        productName: "Tomato Juice",
        priceMin: 5.50,
        priceMed: 10,
        priceMax: 13.00,
        isNewProduct: false,
        ingredients: ["Pineapple", "Yellow Pear", "Coconut water for a tropical taste"],
        collectionOptions: ["Regular Blends", "another option"],
        sizes: ["Large", "Medium", "Small"],
        description: [
          {
            id: 1,
            paragraphTextBigger: 'Savor the sophisticated and invigorating flavors of the Pomegranate Orchard Blend Smoothie. This unique blend combines the sweet and juicy pomegranate arils, crisp pear slices, and succulent red grapes, offering a perfect balance of orchard fruits. A sprig of rosemary adds an aromatic herbal note, while sparkling water brings a fizzy twist that elevates the taste experience. Ideal for a refreshing morning boost or an afternoon pick-me-up, the Pomegranate Orchard Blend Smoothie not only delights the taste buds but also provides an array of health benefits. Sip, savor, and indulge in this fizzy, nutrient-packed smoothie with every refreshing sip.',
          },
          {
            id: 2,
            paragraphTitle: 'Health Highlights',
            paragraphTextSmaller: 'Antioxidant-Rich: The combination of pomegranate, grapes, and rosemary provides a potent dose of antioxidants, protecting your body from oxidative damage and supporting overall cellular health.\nDigestive Support: Pears are high in fiber, promoting healthy digestion and supporting gut health.\nHeart Health: Red grapes and pomegranate are both known for their heart-healthy benefits, including improving circulation and reducing inflammation.\nHydration and Refreshment: The sparkling water adds a refreshing effervescence, making this smoothie a perfect choice for hydration without added sugars.'
          },
          {
            id: 3,
            paragraphTitle: "Allergy Information",
            paragraphTextSmaller: "The Pomegranate Orchard Blend Smoothie is free from common allergens like nuts, dairy, and gluten. However, it is prepared in a facility that processes these allergens, so cross-contamination may occur. If you have any concerns about allergies, especially related to fruit or herbs, please consult your healthcare provider."
          }
        ],
      additionalInformations: [
        {
          id: 1,
          title: "Size",
          text: ["Large", "Medium", "Small"].join(', ')
        }
      ],
      reviews: [
        {
          id: 1,
          customerName: "Martha",
          rate: "Perfect",
          customerReview: "That was the amazing experience for my soul and senses. I'm definitely going to buy it again!",
          date: "2025-07-09T14:30:00-07:00",
        },
        {
          id: 2,
          customerName: "Sam",
          rate: "Good",
          customerReview: "Really delicious. I can't wait to try another products",
          date: "2024-12-15T18:45:00-08:00",
        },
      ],
      relatedProducts: relatedProductsExample,
      },
      {
        id: "12",
        images: [Image3, Image4],
        productName: "Mango Juice",
        priceMin: 5.50,
        priceMed: 10,
        priceMax: 13.00,
        isNewProduct: false,
        ingredients: ["Raspberries", "Slices of Apple", "Water or ice for blending"],
        collectionOptions: ["Regular Blends", "another option"],
        sizes: ["Large", "Medium", "Small"],
        description: [
          {
            id: 1,
            paragraphTextBigger: 'Savor the sophisticated and invigorating flavors of the Pomegranate Orchard Blend Smoothie. This unique blend combines the sweet and juicy pomegranate arils, crisp pear slices, and succulent red grapes, offering a perfect balance of orchard fruits. A sprig of rosemary adds an aromatic herbal note, while sparkling water brings a fizzy twist that elevates the taste experience. Ideal for a refreshing morning boost or an afternoon pick-me-up, the Pomegranate Orchard Blend Smoothie not only delights the taste buds but also provides an array of health benefits. Sip, savor, and indulge in this fizzy, nutrient-packed smoothie with every refreshing sip.',
          },
          {
            id: 2,
            paragraphTitle: 'Health Highlights',
            paragraphTextSmaller: 'Antioxidant-Rich: The combination of pomegranate, grapes, and rosemary provides a potent dose of antioxidants, protecting your body from oxidative damage and supporting overall cellular health.\nDigestive Support: Pears are high in fiber, promoting healthy digestion and supporting gut health.\nHeart Health: Red grapes and pomegranate are both known for their heart-healthy benefits, including improving circulation and reducing inflammation.\nHydration and Refreshment: The sparkling water adds a refreshing effervescence, making this smoothie a perfect choice for hydration without added sugars.'
          },
          {
            id: 3,
            paragraphTitle: "Allergy Information",
            paragraphTextSmaller: "The Pomegranate Orchard Blend Smoothie is free from common allergens like nuts, dairy, and gluten. However, it is prepared in a facility that processes these allergens, so cross-contamination may occur. If you have any concerns about allergies, especially related to fruit or herbs, please consult your healthcare provider."
          }
        ],
      additionalInformations: [
        {
          id: 1,
          title: "Size",
          text: ["Large", "Medium", "Small"].join(', ')
        }
      ],
      reviews: [
        {
          id: 1,
          customerName: "Martha",
          rate: "Perfect",
          customerReview: "That was the amazing experience for my soul and senses. I'm definitely going to buy it again!",
          date: "2025-07-09T14:30:00-07:00",
        },
        {
          id: 2,
          customerName: "Sam",
          rate: "Good",
          customerReview: "Really delicious. I can't wait to try another products",
          date: "2024-12-15T18:45:00-08:00",
        },
      ],
      relatedProducts: relatedProductsExample,
        
      },
      {
        id: "13",
        images: [Image4],
        productName: "Pomegranate Juice very very tasty",
        priceMin: 9.70,
        priceMed: 10,
        priceMax: 16.00,
        isNewProduct: true,
        ingredients: ["Raspberries", "Slices of Apple", "Water or ice for blending"],
        collectionOptions: ["Regular Blends", "another option"],
        sizes: ["Large", "Medium", "Small"],
        description: [
          {
            id: 1,
            paragraphTextBigger: 'Savor the sophisticated and invigorating flavors of the Pomegranate Orchard Blend Smoothie. This unique blend combines the sweet and juicy pomegranate arils, crisp pear slices, and succulent red grapes, offering a perfect balance of orchard fruits. A sprig of rosemary adds an aromatic herbal note, while sparkling water brings a fizzy twist that elevates the taste experience. Ideal for a refreshing morning boost or an afternoon pick-me-up, the Pomegranate Orchard Blend Smoothie not only delights the taste buds but also provides an array of health benefits. Sip, savor, and indulge in this fizzy, nutrient-packed smoothie with every refreshing sip.',
          },
          {
            id: 2,
            paragraphTitle: 'Health Highlights',
            paragraphTextSmaller: 'Antioxidant-Rich: The combination of pomegranate, grapes, and rosemary provides a potent dose of antioxidants, protecting your body from oxidative damage and supporting overall cellular health.\nDigestive Support: Pears are high in fiber, promoting healthy digestion and supporting gut health.\nHeart Health: Red grapes and pomegranate are both known for their heart-healthy benefits, including improving circulation and reducing inflammation.\nHydration and Refreshment: The sparkling water adds a refreshing effervescence, making this smoothie a perfect choice for hydration without added sugars.'
          },
          {
            id: 3,
            paragraphTitle: "Allergy Information",
            paragraphTextSmaller: "The Pomegranate Orchard Blend Smoothie is free from common allergens like nuts, dairy, and gluten. However, it is prepared in a facility that processes these allergens, so cross-contamination may occur. If you have any concerns about allergies, especially related to fruit or herbs, please consult your healthcare provider."
          }
        ],
      additionalInformations: [
        {
          id: 1,
          title: "Size",
          text: ["Large", "Medium", "Small"].join(', ')
        }
      ],
      reviews: [
        {
          id: 1,
          customerName: "Martha",
          rate: "Perfect",
          customerReview: "That was the amazing experience for my soul and senses. I'm definitely going to buy it again!",
          date: "2025-07-09T14:30:00-07:00",
        },
        {
          id: 2,
          customerName: "Sam",
          rate: "Good",
          customerReview: "Really delicious. I can't wait to try another products",
          date: "2024-12-15T18:45:00-08:00",
        },
      ],
      relatedProducts: relatedProductsExample,
        
      },
      {
        id: "14",
        images: [Image1],
        productName: "Bubble Milk Tea",
        priceMin: 5.50,
        priceMed: 10,
        priceMax: 13.00,
        isNewProduct: true,
        ingredients: ["Pineapple", "Yellow Pear", "Coconut water for a tropical taste"],
        collectionOptions: ["Regular Blends", "another option"],
        sizes: ["Large", "Medium", "Small"],
        description: [
          {
            id: 1,
            paragraphTextBigger: 'Savor the sophisticated and invigorating flavors of the Pomegranate Orchard Blend Smoothie. This unique blend combines the sweet and juicy pomegranate arils, crisp pear slices, and succulent red grapes, offering a perfect balance of orchard fruits. A sprig of rosemary adds an aromatic herbal note, while sparkling water brings a fizzy twist that elevates the taste experience. Ideal for a refreshing morning boost or an afternoon pick-me-up, the Pomegranate Orchard Blend Smoothie not only delights the taste buds but also provides an array of health benefits. Sip, savor, and indulge in this fizzy, nutrient-packed smoothie with every refreshing sip.',
          },
          {
            id: 2,
            paragraphTitle: 'Health Highlights',
            paragraphTextSmaller: 'Antioxidant-Rich: The combination of pomegranate, grapes, and rosemary provides a potent dose of antioxidants, protecting your body from oxidative damage and supporting overall cellular health.\nDigestive Support: Pears are high in fiber, promoting healthy digestion and supporting gut health.\nHeart Health: Red grapes and pomegranate are both known for their heart-healthy benefits, including improving circulation and reducing inflammation.\nHydration and Refreshment: The sparkling water adds a refreshing effervescence, making this smoothie a perfect choice for hydration without added sugars.'
          },
          {
            id: 3,
            paragraphTitle: "Allergy Information",
            paragraphTextSmaller: "The Pomegranate Orchard Blend Smoothie is free from common allergens like nuts, dairy, and gluten. However, it is prepared in a facility that processes these allergens, so cross-contamination may occur. If you have any concerns about allergies, especially related to fruit or herbs, please consult your healthcare provider."
          }
        ],
      additionalInformations: [
        {
          id: 1,
          title: "Size",
          text: ["Large", "Medium", "Small"].join(', ')
        }
      ],
      reviews: [
        {
          id: 1,
          customerName: "Martha",
          rate: "Perfect",
          customerReview: "That was the amazing experience for my soul and senses. I'm definitely going to buy it again!",
          date: "2025-07-09T14:30:00-07:00",
        },
        {
          id: 2,
          customerName: "Sam",
          rate: "Good",
          customerReview: "Really delicious. I can't wait to try another products",
          date: "2024-12-15T18:45:00-08:00",
        },
      ],
      relatedProducts: relatedProductsExample,
      },
    ] },
  'fruit-pizzas': { 
    title: 'Fruit Pizzas',
    products: [
      {
        id: "6",
        images: [Image2],
        productName: "Kiwi Juice",
        priceMin: 9.70,
        priceMed: 10,
        priceMax: 16.00,
        isNewProduct: false,
        ingredients: ["Pineapple", "Yellow Pear", "Coconut water for a tropical taste"],
        collectionOptions: ["Regular Blends", "another option"],
        sizes: ["Large", "Medium", "Small"],
        description: [
          {
            id: 1,
            paragraphTextBigger: 'Savor the sophisticated and invigorating flavors of the Pomegranate Orchard Blend Smoothie. This unique blend combines the sweet and juicy pomegranate arils, crisp pear slices, and succulent red grapes, offering a perfect balance of orchard fruits. A sprig of rosemary adds an aromatic herbal note, while sparkling water brings a fizzy twist that elevates the taste experience. Ideal for a refreshing morning boost or an afternoon pick-me-up, the Pomegranate Orchard Blend Smoothie not only delights the taste buds but also provides an array of health benefits. Sip, savor, and indulge in this fizzy, nutrient-packed smoothie with every refreshing sip.',
          },
          {
            id: 2,
            paragraphTitle: 'Health Highlights',
            paragraphTextSmaller: 'Antioxidant-Rich: The combination of pomegranate, grapes, and rosemary provides a potent dose of antioxidants, protecting your body from oxidative damage and supporting overall cellular health.\nDigestive Support: Pears are high in fiber, promoting healthy digestion and supporting gut health.\nHeart Health: Red grapes and pomegranate are both known for their heart-healthy benefits, including improving circulation and reducing inflammation.\nHydration and Refreshment: The sparkling water adds a refreshing effervescence, making this smoothie a perfect choice for hydration without added sugars.'
          },
          {
            id: 3,
            paragraphTitle: "Allergy Information",
            paragraphTextSmaller: "The Pomegranate Orchard Blend Smoothie is free from common allergens like nuts, dairy, and gluten. However, it is prepared in a facility that processes these allergens, so cross-contamination may occur. If you have any concerns about allergies, especially related to fruit or herbs, please consult your healthcare provider."
          }
        ],
      additionalInformations: [
        {
          id: 1,
          title: "Size",
          text: ["Large", "Medium", "Small"].join(', ')
        }
      ],
      reviews: [
        {
          id: 1,
          customerName: "Martha",
          rate: "Perfect",
          customerReview: "That was the amazing experience for my soul and senses. I'm definitely going to buy it again!",
          date: "2025-07-09T14:30:00-07:00",
        },
        {
          id: 2,
          customerName: "Sam",
          rate: "Good",
          customerReview: "Really delicious. I can't wait to try another products",
          date: "2024-12-15T18:45:00-08:00",
        },
      ],
      relatedProducts: relatedProductsExample,
      },
      {
        id: "7",
        images: [Image3],
        productName: "Pomegranate Juice",
        priceMin: 5.50,
        priceMed: 10,
        priceMax: 13.00,
        isNewProduct: false,
        ingredients: ["Pineapple", "Yellow Pear", "Coconut water for a tropical taste"],
        collectionOptions: ["Regular Blends", "another option"],
        sizes: ["Large", "Medium", "Small"],
        description: [
          {
            id: 1,
            paragraphTextBigger: 'Savor the sophisticated and invigorating flavors of the Pomegranate Orchard Blend Smoothie. This unique blend combines the sweet and juicy pomegranate arils, crisp pear slices, and succulent red grapes, offering a perfect balance of orchard fruits. A sprig of rosemary adds an aromatic herbal note, while sparkling water brings a fizzy twist that elevates the taste experience. Ideal for a refreshing morning boost or an afternoon pick-me-up, the Pomegranate Orchard Blend Smoothie not only delights the taste buds but also provides an array of health benefits. Sip, savor, and indulge in this fizzy, nutrient-packed smoothie with every refreshing sip.',
          },
          {
            id: 2,
            paragraphTitle: 'Health Highlights',
            paragraphTextSmaller: 'Antioxidant-Rich: The combination of pomegranate, grapes, and rosemary provides a potent dose of antioxidants, protecting your body from oxidative damage and supporting overall cellular health.\nDigestive Support: Pears are high in fiber, promoting healthy digestion and supporting gut health.\nHeart Health: Red grapes and pomegranate are both known for their heart-healthy benefits, including improving circulation and reducing inflammation.\nHydration and Refreshment: The sparkling water adds a refreshing effervescence, making this smoothie a perfect choice for hydration without added sugars.'
          },
          {
            id: 3,
            paragraphTitle: "Allergy Information",
            paragraphTextSmaller: "The Pomegranate Orchard Blend Smoothie is free from common allergens like nuts, dairy, and gluten. However, it is prepared in a facility that processes these allergens, so cross-contamination may occur. If you have any concerns about allergies, especially related to fruit or herbs, please consult your healthcare provider."
          }
        ],
      additionalInformations: [
        {
          id: 1,
          title: "Size",
          text: ["Large", "Medium", "Small"].join(', ')
        }
      ],
      reviews: [
        {
          id: 1,
          customerName: "Martha",
          rate: "Perfect",
          customerReview: "That was the amazing experience for my soul and senses. I'm definitely going to buy it again!",
          date: "2025-07-09T14:30:00-07:00",
        },
        {
          id: 2,
          customerName: "Sam",
          rate: "Good",
          customerReview: "Really delicious. I can't wait to try another products",
          date: "2024-12-15T18:45:00-08:00",
        },
      ],
      relatedProducts: relatedProductsExample,
      },
      {
        id: "8",
        images: [Image4],
        productName: "Bubble Milk Tea",
        priceMin: 5.50,
        priceMed: 10,
        priceMax: 13.00,
        isNewProduct: false,
        ingredients: ["Pineapple", "Yellow Pear", "Coconut water for a tropical taste"],
        collectionOptions: ["Regular Blends", "another option"],
        sizes: ["Large", "Medium", "Small"],
        description: [
          {
            id: 1,
            paragraphTextBigger: 'Savor the sophisticated and invigorating flavors of the Pomegranate Orchard Blend Smoothie. This unique blend combines the sweet and juicy pomegranate arils, crisp pear slices, and succulent red grapes, offering a perfect balance of orchard fruits. A sprig of rosemary adds an aromatic herbal note, while sparkling water brings a fizzy twist that elevates the taste experience. Ideal for a refreshing morning boost or an afternoon pick-me-up, the Pomegranate Orchard Blend Smoothie not only delights the taste buds but also provides an array of health benefits. Sip, savor, and indulge in this fizzy, nutrient-packed smoothie with every refreshing sip.',
          },
          {
            id: 2,
            paragraphTitle: 'Health Highlights',
            paragraphTextSmaller: 'Antioxidant-Rich: The combination of pomegranate, grapes, and rosemary provides a potent dose of antioxidants, protecting your body from oxidative damage and supporting overall cellular health.\nDigestive Support: Pears are high in fiber, promoting healthy digestion and supporting gut health.\nHeart Health: Red grapes and pomegranate are both known for their heart-healthy benefits, including improving circulation and reducing inflammation.\nHydration and Refreshment: The sparkling water adds a refreshing effervescence, making this smoothie a perfect choice for hydration without added sugars.'
          },
          {
            id: 3,
            paragraphTitle: "Allergy Information",
            paragraphTextSmaller: "The Pomegranate Orchard Blend Smoothie is free from common allergens like nuts, dairy, and gluten. However, it is prepared in a facility that processes these allergens, so cross-contamination may occur. If you have any concerns about allergies, especially related to fruit or herbs, please consult your healthcare provider."
          }
        ],
      additionalInformations: [
        {
          id: 1,
          title: "Size",
          text: ["Large", "Medium", "Small"].join(', ')
        }
      ],
      reviews: [
        {
          id: 1,
          customerName: "Martha",
          rate: "Perfect",
          customerReview: "That was the amazing experience for my soul and senses. I'm definitely going to buy it again!",
          date: "2025-07-09T14:30:00-07:00",
        },
        {
          id: 2,
          customerName: "Sam",
          rate: "Good",
          customerReview: "Really delicious. I can't wait to try another products",
          date: "2024-12-15T18:45:00-08:00",
        },
      ],
      relatedProducts: relatedProductsExample,
      },
      {
        id: "9",
        images: [Image1],
        productName: "Kiwi Juice",
        priceMin: 9.70,
        priceMed: 10,
        priceMax: 16.00,
        isNewProduct: false,
        ingredients: ["Raspberries", "Slices of Apple", "Water or ice for blending"],
        collectionOptions: ["Regular Blends", "another option"],
        sizes: ["Large", "Medium", "Small"],
        description: [
          {
            id: 1,
            paragraphTextBigger: 'Savor the sophisticated and invigorating flavors of the Pomegranate Orchard Blend Smoothie. This unique blend combines the sweet and juicy pomegranate arils, crisp pear slices, and succulent red grapes, offering a perfect balance of orchard fruits. A sprig of rosemary adds an aromatic herbal note, while sparkling water brings a fizzy twist that elevates the taste experience. Ideal for a refreshing morning boost or an afternoon pick-me-up, the Pomegranate Orchard Blend Smoothie not only delights the taste buds but also provides an array of health benefits. Sip, savor, and indulge in this fizzy, nutrient-packed smoothie with every refreshing sip.',
          },
          {
            id: 2,
            paragraphTitle: 'Health Highlights',
            paragraphTextSmaller: 'Antioxidant-Rich: The combination of pomegranate, grapes, and rosemary provides a potent dose of antioxidants, protecting your body from oxidative damage and supporting overall cellular health.\nDigestive Support: Pears are high in fiber, promoting healthy digestion and supporting gut health.\nHeart Health: Red grapes and pomegranate are both known for their heart-healthy benefits, including improving circulation and reducing inflammation.\nHydration and Refreshment: The sparkling water adds a refreshing effervescence, making this smoothie a perfect choice for hydration without added sugars.'
          },
          {
            id: 3,
            paragraphTitle: "Allergy Information",
            paragraphTextSmaller: "The Pomegranate Orchard Blend Smoothie is free from common allergens like nuts, dairy, and gluten. However, it is prepared in a facility that processes these allergens, so cross-contamination may occur. If you have any concerns about allergies, especially related to fruit or herbs, please consult your healthcare provider."
          }
        ],
      additionalInformations: [
        {
          id: 1,
          title: "Size",
          text: ["Large", "Medium", "Small"].join(', ')
        }
      ],
      reviews: [
        {
          id: 1,
          customerName: "Martha",
          rate: "Perfect",
          customerReview: "That was the amazing experience for my soul and senses. I'm definitely going to buy it again!",
          date: "2025-07-09T14:30:00-07:00",
        },
        {
          id: 2,
          customerName: "Sam",
          rate: "Good",
          customerReview: "Really delicious. I can't wait to try another products",
          date: "2024-12-15T18:45:00-08:00",
        },
      ],
      relatedProducts: relatedProductsExample,
      },
      {
        id: "10",
        images: [Image1],
        productName: "Strawberry Juice",
        priceMin: 5.50,
        priceMed: 10,
        priceMax: 13.00,
        isNewProduct: true,
        ingredients: ["Raspberries", "Slices of Apple", "Water or ice for blending"],
        collectionOptions: ["Regular Blends", "another option"],
        sizes: ["Large", "Medium", "Small"],
        description: [
          {
            id: 1,
            paragraphTextBigger: 'Savor the sophisticated and invigorating flavors of the Pomegranate Orchard Blend Smoothie. This unique blend combines the sweet and juicy pomegranate arils, crisp pear slices, and succulent red grapes, offering a perfect balance of orchard fruits. A sprig of rosemary adds an aromatic herbal note, while sparkling water brings a fizzy twist that elevates the taste experience. Ideal for a refreshing morning boost or an afternoon pick-me-up, the Pomegranate Orchard Blend Smoothie not only delights the taste buds but also provides an array of health benefits. Sip, savor, and indulge in this fizzy, nutrient-packed smoothie with every refreshing sip.',
          },
          {
            id: 2,
            paragraphTitle: 'Health Highlights',
            paragraphTextSmaller: 'Antioxidant-Rich: The combination of pomegranate, grapes, and rosemary provides a potent dose of antioxidants, protecting your body from oxidative damage and supporting overall cellular health.\nDigestive Support: Pears are high in fiber, promoting healthy digestion and supporting gut health.\nHeart Health: Red grapes and pomegranate are both known for their heart-healthy benefits, including improving circulation and reducing inflammation.\nHydration and Refreshment: The sparkling water adds a refreshing effervescence, making this smoothie a perfect choice for hydration without added sugars.'
          },
          {
            id: 3,
            paragraphTitle: "Allergy Information",
            paragraphTextSmaller: "The Pomegranate Orchard Blend Smoothie is free from common allergens like nuts, dairy, and gluten. However, it is prepared in a facility that processes these allergens, so cross-contamination may occur. If you have any concerns about allergies, especially related to fruit or herbs, please consult your healthcare provider."
          }
        ],
      additionalInformations: [
        {
          id: 1,
          title: "Size",
          text: ["Large", "Medium", "Small"].join(', ')
        }
      ],
      reviews: [
        {
          id: 1,
          customerName: "Martha",
          rate: "Perfect",
          customerReview: "That was the amazing experience for my soul and senses. I'm definitely going to buy it again!",
          date: "2025-07-09T14:30:00-07:00",
        },
        {
          id: 2,
          customerName: "Sam",
          rate: "Good",
          customerReview: "Really delicious. I can't wait to try another products",
          date: "2024-12-15T18:45:00-08:00",
        },
      ],
      relatedProducts: relatedProductsExample,
      },
      {
        id: "13",
        images: [Image4],
        productName: "Pomegranate Juice very very tasty",
        priceMin: 9.70,
        priceMed: 10,
        priceMax: 16.00,
        isNewProduct: true,
        ingredients: ["Raspberries", "Slices of Apple", "Water or ice for blending"],
        collectionOptions: ["Regular Blends", "another option"],
        sizes: ["Large", "Medium", "Small"],
        description: [
          {
            id: 1,
            paragraphTextBigger: 'Savor the sophisticated and invigorating flavors of the Pomegranate Orchard Blend Smoothie. This unique blend combines the sweet and juicy pomegranate arils, crisp pear slices, and succulent red grapes, offering a perfect balance of orchard fruits. A sprig of rosemary adds an aromatic herbal note, while sparkling water brings a fizzy twist that elevates the taste experience. Ideal for a refreshing morning boost or an afternoon pick-me-up, the Pomegranate Orchard Blend Smoothie not only delights the taste buds but also provides an array of health benefits. Sip, savor, and indulge in this fizzy, nutrient-packed smoothie with every refreshing sip.',
          },
          {
            id: 2,
            paragraphTitle: 'Health Highlights',
            paragraphTextSmaller: 'Antioxidant-Rich: The combination of pomegranate, grapes, and rosemary provides a potent dose of antioxidants, protecting your body from oxidative damage and supporting overall cellular health.\nDigestive Support: Pears are high in fiber, promoting healthy digestion and supporting gut health.\nHeart Health: Red grapes and pomegranate are both known for their heart-healthy benefits, including improving circulation and reducing inflammation.\nHydration and Refreshment: The sparkling water adds a refreshing effervescence, making this smoothie a perfect choice for hydration without added sugars.'
          },
          {
            id: 3,
            paragraphTitle: "Allergy Information",
            paragraphTextSmaller: "The Pomegranate Orchard Blend Smoothie is free from common allergens like nuts, dairy, and gluten. However, it is prepared in a facility that processes these allergens, so cross-contamination may occur. If you have any concerns about allergies, especially related to fruit or herbs, please consult your healthcare provider."
          }
        ],
      additionalInformations: [
        {
          id: 1,
          title: "Size",
          text: ["Large", "Medium", "Small"].join(', ')
        }
      ],
      reviews: [
        {
          id: 1,
          customerName: "Martha",
          rate: "Perfect",
          customerReview: "That was the amazing experience for my soul and senses. I'm definitely going to buy it again!",
          date: "2025-07-09T14:30:00-07:00",
        },
        {
          id: 2,
          customerName: "Sam",
          rate: "Good",
          customerReview: "Really delicious. I can't wait to try another products",
          date: "2024-12-15T18:45:00-08:00",
        },
      ],
      relatedProducts: relatedProductsExample,
        
      },
      {
        id: "14",
        images: [Image1],
        productName: "Bubble Milk Tea",
        priceMin: 5.50,
        priceMed: 10,
        priceMax: 13.00,
        isNewProduct: true,
        ingredients: ["Pineapple", "Yellow Pear", "Coconut water for a tropical taste"],
        collectionOptions: ["Regular Blends", "another option"],
        sizes: ["Large", "Medium", "Small"],
        description: [
          {
            id: 1,
            paragraphTextBigger: 'Savor the sophisticated and invigorating flavors of the Pomegranate Orchard Blend Smoothie. This unique blend combines the sweet and juicy pomegranate arils, crisp pear slices, and succulent red grapes, offering a perfect balance of orchard fruits. A sprig of rosemary adds an aromatic herbal note, while sparkling water brings a fizzy twist that elevates the taste experience. Ideal for a refreshing morning boost or an afternoon pick-me-up, the Pomegranate Orchard Blend Smoothie not only delights the taste buds but also provides an array of health benefits. Sip, savor, and indulge in this fizzy, nutrient-packed smoothie with every refreshing sip.',
          },
          {
            id: 2,
            paragraphTitle: 'Health Highlights',
            paragraphTextSmaller: 'Antioxidant-Rich: The combination of pomegranate, grapes, and rosemary provides a potent dose of antioxidants, protecting your body from oxidative damage and supporting overall cellular health.\nDigestive Support: Pears are high in fiber, promoting healthy digestion and supporting gut health.\nHeart Health: Red grapes and pomegranate are both known for their heart-healthy benefits, including improving circulation and reducing inflammation.\nHydration and Refreshment: The sparkling water adds a refreshing effervescence, making this smoothie a perfect choice for hydration without added sugars.'
          },
          {
            id: 3,
            paragraphTitle: "Allergy Information",
            paragraphTextSmaller: "The Pomegranate Orchard Blend Smoothie is free from common allergens like nuts, dairy, and gluten. However, it is prepared in a facility that processes these allergens, so cross-contamination may occur. If you have any concerns about allergies, especially related to fruit or herbs, please consult your healthcare provider."
          }
        ],
      additionalInformations: [
        {
          id: 1,
          title: "Size",
          text: ["Large", "Medium", "Small"].join(', ')
        }
      ],
      reviews: [
        {
          id: 1,
          customerName: "Martha",
          rate: "Perfect",
          customerReview: "That was the amazing experience for my soul and senses. I'm definitely going to buy it again!",
          date: "2025-07-09T14:30:00-07:00",
        },
        {
          id: 2,
          customerName: "Sam",
          rate: "Good",
          customerReview: "Really delicious. I can't wait to try another products",
          date: "2024-12-15T18:45:00-08:00",
        },
      ],
      relatedProducts: relatedProductsExample,
      },
    ] },
  'pre-packed-fruits': { 
    title: 'Pre-packed Fruits',
    products: [
       {
        id: "10",
        images: [Image1],
        productName: "Strawberry Juice",
        priceMin: 5.50,
        priceMed: 10,
        priceMax: 13.00,
        isNewProduct: true,
        collectionOptions: ["Regular Blends", "another option"],
        sizes: ["Large", "Medium", "Small"],
        description: [
          {
            id: 1,
            paragraphTextBigger: 'Savor the sophisticated and invigorating flavors of the Pomegranate Orchard Blend Smoothie. This unique blend combines the sweet and juicy pomegranate arils, crisp pear slices, and succulent red grapes, offering a perfect balance of orchard fruits. A sprig of rosemary adds an aromatic herbal note, while sparkling water brings a fizzy twist that elevates the taste experience. Ideal for a refreshing morning boost or an afternoon pick-me-up, the Pomegranate Orchard Blend Smoothie not only delights the taste buds but also provides an array of health benefits. Sip, savor, and indulge in this fizzy, nutrient-packed smoothie with every refreshing sip.',
          },
          {
            id: 2,
            paragraphTitle: 'Health Highlights',
            paragraphTextSmaller: 'Antioxidant-Rich: The combination of pomegranate, grapes, and rosemary provides a potent dose of antioxidants, protecting your body from oxidative damage and supporting overall cellular health.\nDigestive Support: Pears are high in fiber, promoting healthy digestion and supporting gut health.\nHeart Health: Red grapes and pomegranate are both known for their heart-healthy benefits, including improving circulation and reducing inflammation.\nHydration and Refreshment: The sparkling water adds a refreshing effervescence, making this smoothie a perfect choice for hydration without added sugars.'
          },
          {
            id: 3,
            paragraphTitle: "Allergy Information",
            paragraphTextSmaller: "The Pomegranate Orchard Blend Smoothie is free from common allergens like nuts, dairy, and gluten. However, it is prepared in a facility that processes these allergens, so cross-contamination may occur. If you have any concerns about allergies, especially related to fruit or herbs, please consult your healthcare provider."
          }
        ],
      additionalInformations: [
        {
          id: 1,
          title: "Size",
          text: ["Large", "Medium", "Small"].join(', ')
        }
      ],
      reviews: [
        {
          id: 1,
          customerName: "Martha",
          rate: "Perfect",
          customerReview: "That was the amazing experience for my soul and senses. I'm definitely going to buy it again!",
          date: "2025-07-09T14:30:00-07:00",
        },
        {
          id: 2,
          customerName: "Sam",
          rate: "Good",
          customerReview: "Really delicious. I can't wait to try another products",
          date: "2024-12-15T18:45:00-08:00",
        },
      ],
      relatedProducts: relatedProductsExample,
      },
      {
        id: "11",
        images: [Image2],
        productName: "Tomato Juice",
        priceMin: 5.50,
        priceMed: 10,
        priceMax: 13.00,
        isNewProduct: false,
        collectionOptions: ["Regular Blends", "another option"],
        sizes: ["Large", "Medium", "Small"],
        description: [
          {
            id: 1,
            paragraphTextBigger: 'Savor the sophisticated and invigorating flavors of the Pomegranate Orchard Blend Smoothie. This unique blend combines the sweet and juicy pomegranate arils, crisp pear slices, and succulent red grapes, offering a perfect balance of orchard fruits. A sprig of rosemary adds an aromatic herbal note, while sparkling water brings a fizzy twist that elevates the taste experience. Ideal for a refreshing morning boost or an afternoon pick-me-up, the Pomegranate Orchard Blend Smoothie not only delights the taste buds but also provides an array of health benefits. Sip, savor, and indulge in this fizzy, nutrient-packed smoothie with every refreshing sip.',
          },
          {
            id: 2,
            paragraphTitle: 'Health Highlights',
            paragraphTextSmaller: 'Antioxidant-Rich: The combination of pomegranate, grapes, and rosemary provides a potent dose of antioxidants, protecting your body from oxidative damage and supporting overall cellular health.\nDigestive Support: Pears are high in fiber, promoting healthy digestion and supporting gut health.\nHeart Health: Red grapes and pomegranate are both known for their heart-healthy benefits, including improving circulation and reducing inflammation.\nHydration and Refreshment: The sparkling water adds a refreshing effervescence, making this smoothie a perfect choice for hydration without added sugars.'
          },
          {
            id: 3,
            paragraphTitle: "Allergy Information",
            paragraphTextSmaller: "The Pomegranate Orchard Blend Smoothie is free from common allergens like nuts, dairy, and gluten. However, it is prepared in a facility that processes these allergens, so cross-contamination may occur. If you have any concerns about allergies, especially related to fruit or herbs, please consult your healthcare provider."
          }
        ],
      additionalInformations: [
        {
          id: 1,
          title: "Size",
          text: ["Large", "Medium", "Small"].join(', ')
        }
      ],
      reviews: [
        {
          id: 1,
          customerName: "Martha",
          rate: "Perfect",
          customerReview: "That was the amazing experience for my soul and senses. I'm definitely going to buy it again!",
          date: "2025-07-09T14:30:00-07:00",
        },
        {
          id: 2,
          customerName: "Sam",
          rate: "Good",
          customerReview: "Really delicious. I can't wait to try another products",
          date: "2024-12-15T18:45:00-08:00",
        },
      ],
      relatedProducts: relatedProductsExample,
      },
      {
        id: "12",
        images: [Image3, Image4],
        productName: "Mango Juice",
        priceMin: 5.50,
        priceMed: 10,
        priceMax: 13.00,
        isNewProduct: false,
        ingredients: ["Raspberries", "Slices of Apple", "Water or ice for blending"],
        collectionOptions: ["Regular Blends", "another option"],
        sizes: ["Large", "Medium", "Small"],
        description: [
          {
            id: 1,
            paragraphTextBigger: 'Savor the sophisticated and invigorating flavors of the Pomegranate Orchard Blend Smoothie. This unique blend combines the sweet and juicy pomegranate arils, crisp pear slices, and succulent red grapes, offering a perfect balance of orchard fruits. A sprig of rosemary adds an aromatic herbal note, while sparkling water brings a fizzy twist that elevates the taste experience. Ideal for a refreshing morning boost or an afternoon pick-me-up, the Pomegranate Orchard Blend Smoothie not only delights the taste buds but also provides an array of health benefits. Sip, savor, and indulge in this fizzy, nutrient-packed smoothie with every refreshing sip.',
          },
          {
            id: 2,
            paragraphTitle: 'Health Highlights',
            paragraphTextSmaller: 'Antioxidant-Rich: The combination of pomegranate, grapes, and rosemary provides a potent dose of antioxidants, protecting your body from oxidative damage and supporting overall cellular health.\nDigestive Support: Pears are high in fiber, promoting healthy digestion and supporting gut health.\nHeart Health: Red grapes and pomegranate are both known for their heart-healthy benefits, including improving circulation and reducing inflammation.\nHydration and Refreshment: The sparkling water adds a refreshing effervescence, making this smoothie a perfect choice for hydration without added sugars.'
          },
          {
            id: 3,
            paragraphTitle: "Allergy Information",
            paragraphTextSmaller: "The Pomegranate Orchard Blend Smoothie is free from common allergens like nuts, dairy, and gluten. However, it is prepared in a facility that processes these allergens, so cross-contamination may occur. If you have any concerns about allergies, especially related to fruit or herbs, please consult your healthcare provider."
          }
        ],
      additionalInformations: [
        {
          id: 1,
          title: "Size",
          text: ["Large", "Medium", "Small"].join(', ')
        }
      ],
      reviews: [
        {
          id: 1,
          customerName: "Martha",
          rate: "Perfect",
          customerReview: "That was the amazing experience for my soul and senses. I'm definitely going to buy it again!",
          date: "2025-07-09T14:30:00-07:00",
        },
        {
          id: 2,
          customerName: "Sam",
          rate: "Good",
          customerReview: "Really delicious. I can't wait to try another products",
          date: "2024-12-15T18:45:00-08:00",
        },
      ],
      relatedProducts: relatedProductsExample,
        
      },
      {
        id: "13",
        images: [Image4],
        productName: "Pomegranate Juice very very tasty",
        priceMin: 9.70,
        priceMed: 10,
        priceMax: 16.00,
        isNewProduct: true,
        ingredients: ["Raspberries", "Slices of Apple", "Water or ice for blending"],
        collectionOptions: ["Regular Blends", "another option"],
        sizes: ["Large", "Medium", "Small"],
        description: [
          {
            id: 1,
            paragraphTextBigger: 'Savor the sophisticated and invigorating flavors of the Pomegranate Orchard Blend Smoothie. This unique blend combines the sweet and juicy pomegranate arils, crisp pear slices, and succulent red grapes, offering a perfect balance of orchard fruits. A sprig of rosemary adds an aromatic herbal note, while sparkling water brings a fizzy twist that elevates the taste experience. Ideal for a refreshing morning boost or an afternoon pick-me-up, the Pomegranate Orchard Blend Smoothie not only delights the taste buds but also provides an array of health benefits. Sip, savor, and indulge in this fizzy, nutrient-packed smoothie with every refreshing sip.',
          },
          {
            id: 2,
            paragraphTitle: 'Health Highlights',
            paragraphTextSmaller: 'Antioxidant-Rich: The combination of pomegranate, grapes, and rosemary provides a potent dose of antioxidants, protecting your body from oxidative damage and supporting overall cellular health.\nDigestive Support: Pears are high in fiber, promoting healthy digestion and supporting gut health.\nHeart Health: Red grapes and pomegranate are both known for their heart-healthy benefits, including improving circulation and reducing inflammation.\nHydration and Refreshment: The sparkling water adds a refreshing effervescence, making this smoothie a perfect choice for hydration without added sugars.'
          },
          {
            id: 3,
            paragraphTitle: "Allergy Information",
            paragraphTextSmaller: "The Pomegranate Orchard Blend Smoothie is free from common allergens like nuts, dairy, and gluten. However, it is prepared in a facility that processes these allergens, so cross-contamination may occur. If you have any concerns about allergies, especially related to fruit or herbs, please consult your healthcare provider."
          }
        ],
      additionalInformations: [
        {
          id: 1,
          title: "Size",
          text: ["Large", "Medium", "Small"].join(', ')
        }
      ],
      reviews: [
        {
          id: 1,
          customerName: "Martha",
          rate: "Perfect",
          customerReview: "That was the amazing experience for my soul and senses. I'm definitely going to buy it again!",
          date: "2025-07-09T14:30:00-07:00",
        },
        {
          id: 2,
          customerName: "Sam",
          rate: "Good",
          customerReview: "Really delicious. I can't wait to try another products",
          date: "2024-12-15T18:45:00-08:00",
        },
      ],
      relatedProducts: relatedProductsExample,
        
      },
      {
        id: "14",
        images: [Image1],
        productName: "Bubble Milk Tea",
        priceMin: 5.50,
        priceMed: 10,
        priceMax: 13.00,
        isNewProduct: true,
        ingredients: ["Pineapple", "Yellow Pear", "Coconut water for a tropical taste"],
        collectionOptions: ["Regular Blends", "another option"],
        sizes: ["Large", "Medium", "Small"],
        description: [
          {
            id: 1,
            paragraphTextBigger: 'Savor the sophisticated and invigorating flavors of the Pomegranate Orchard Blend Smoothie. This unique blend combines the sweet and juicy pomegranate arils, crisp pear slices, and succulent red grapes, offering a perfect balance of orchard fruits. A sprig of rosemary adds an aromatic herbal note, while sparkling water brings a fizzy twist that elevates the taste experience. Ideal for a refreshing morning boost or an afternoon pick-me-up, the Pomegranate Orchard Blend Smoothie not only delights the taste buds but also provides an array of health benefits. Sip, savor, and indulge in this fizzy, nutrient-packed smoothie with every refreshing sip.',
          },
          {
            id: 2,
            paragraphTitle: 'Health Highlights',
            paragraphTextSmaller: 'Antioxidant-Rich: The combination of pomegranate, grapes, and rosemary provides a potent dose of antioxidants, protecting your body from oxidative damage and supporting overall cellular health.\nDigestive Support: Pears are high in fiber, promoting healthy digestion and supporting gut health.\nHeart Health: Red grapes and pomegranate are both known for their heart-healthy benefits, including improving circulation and reducing inflammation.\nHydration and Refreshment: The sparkling water adds a refreshing effervescence, making this smoothie a perfect choice for hydration without added sugars.'
          },
          {
            id: 3,
            paragraphTitle: "Allergy Information",
            paragraphTextSmaller: "The Pomegranate Orchard Blend Smoothie is free from common allergens like nuts, dairy, and gluten. However, it is prepared in a facility that processes these allergens, so cross-contamination may occur. If you have any concerns about allergies, especially related to fruit or herbs, please consult your healthcare provider."
          }
        ],
      additionalInformations: [
        {
          id: 1,
          title: "Size",
          text: ["Large", "Medium", "Small"].join(', ')
        }
      ],
      reviews: [
        {
          id: 1,
          customerName: "Martha",
          rate: "Perfect",
          customerReview: "That was the amazing experience for my soul and senses. I'm definitely going to buy it again!",
          date: "2025-07-09T14:30:00-07:00",
        },
        {
          id: 2,
          customerName: "Sam",
          rate: "Good",
          customerReview: "Really delicious. I can't wait to try another products",
          date: "2024-12-15T18:45:00-08:00",
        },
      ],
      relatedProducts: relatedProductsExample,
      },
    ] },
};