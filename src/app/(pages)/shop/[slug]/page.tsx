"use client"
import { notFound } from 'next/navigation';
import Breadcrumbs from "@/app/custom_components/shared/Breadcrumbs";
import Image1 from "@/assets/Caribbean Bliss Smoothie-1.png";
import Image2 from "@/assets/Crimson Apple Zest-1.png";
import Image3 from "@/assets/mango-juice-splashing.png";
import Image4 from "@/assets/four-juices.png";
import Image from 'next/image';
import { useState } from "react";
import { FaHeart, FaRegHeart, FaPlus, FaCheck } from "react-icons/fa";
import Link from "next/link";
import {pages} from "./[productId]/components/Pages"




export default function ShopSubpage({ params }: { params: { slug: string } }) {
  const page = pages[params.slug as keyof typeof pages];

  const PRODUCTS_PER_PAGE = 12;
const [currentPage, setCurrentPage] = useState(1);

const totalPages = Math.ceil(page.products.length / PRODUCTS_PER_PAGE);

const startIndex = (currentPage - 1) * PRODUCTS_PER_PAGE;
const endIndex = startIndex + PRODUCTS_PER_PAGE;

const currentProducts = page.products.slice(startIndex, endIndex);

const [likedProducts, setLikedProducts] = useState<string[]>([]);

  const toggleLike = (id: string) => {
    setLikedProducts((prev) =>
      prev.includes(id) ? prev.filter((pid) => pid !== id) : [...prev, id]
    );
  };

  if (!page) {
    notFound();
  }

  return (
    <main>
      <Breadcrumbs currentPageName="Shop" />
      <div className='bg-primary-yellow lg:mt-24'>
        <div className="relative bg-[length:100%_100%] bg-no-repeat -mt-[1px]"
          style={{backgroundImage: `linear-gradient(to bottom, #93BE3B 15%, #FFC10C  25%)`,}}>
            <div className="absolute w-full top-[-4px] h-4 bg-primary-green z-[-1]"></div>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 200"><path fill="#93BE3B" fillOpacity="1" d="M0,96L60,90.7C120,85,240,75,360,96C480,117,600,171,720,160C840,149,960,75,1080,53.3C1200,32,1320,64,1380,80L1440,96L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"></path></svg>
        </div>

        {/* <h1>{page.title}</h1> */}
        <div className='grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] px-[2.5%] gap-x-[3%] gap-y-20'>
          {currentProducts.map((product)=> (
            <div key={product.id} className='flex flex-col gap-3 items-center'>
              <Link href={`/shop/${params.slug}/${product.id}`}>
                <Image 
                  src={product.images[0]} 
                  alt={product.productName} 
                  width={300}
                />
              </Link>
              <p className="font-bold text-xl text-center">{product.productName}</p>
              <p className='text-gray-700'>{`$${product.priceMin.toFixed(2)} - $${product.priceMax.toFixed(2)}`}</p>
              <div className='flex gap-5 items-center'>
                <Link href={`/shop/${params.slug}/${product.id}`}>
                  <button className='bg-primary-green px-5 py-1 rounded-xl hover:bg-primary-orange'>SELECT OPTIONS</button>
                </Link>
                <div>
                  <button onClick={() => toggleLike(product.id)} className="relative text-2xl text-white mt-2">
                    {likedProducts.includes(product.id) ? 
                    <>
                      <FaHeart />
                      <FaCheck className="absolute bottom-0 left-0 text-green-500 text-xs" />
                    </> : 
                    <>
                      <FaRegHeart />
                      <FaPlus className="absolute bottom-0 left-0 text-primary-orange text-xs" />
                    </>
                    }               
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-8 space-x-2">
          {Array.from({ length: totalPages }, (_, index) => (
            <button
              key={index}
              onClick={() => setCurrentPage(index + 1)}
              className={`px-4 py-2 rounded ${
                currentPage === index + 1 ? 'bg-primary-green text-white' : 'bg-gray-200'
              }`}
            >
              {index + 1}
            </button>
          ))}
        </div>

        <div className="relative bg-[length:100%_100%] bg-no-repeat -mt-[1px]"
          style={{backgroundImage: `linear-gradient(to bottom, #FFC10C 15%, #6E8E2D  25%)`,}}>
            <div className="absolute w-full top-[-4px] h-4 bg-primary-yellow z-[-1]"></div>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 200"><path fill="#FFC10C" fillOpacity="1" d="M0,96L60,90.7C120,85,240,75,360,96C480,117,600,171,720,160C840,149,960,75,1080,53.3C1200,32,1320,64,1380,80L1440,96L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"></path></svg>
        </div>
      </div>
    </main>
    
  );
}
