"use client"

import { notFound } from "next/navigation";
import Image from "next/image";
import { pages } from "./components/Pages"; 
import { cherryBomb } from '../../../../../../fonts';
import {FaHeart, FaRegHeart, FaPlus, FaCheck } from "react-icons/fa";
import Dropdown from "./components/Dropdown";
import { FormProvider, useForm } from "react-hook-form";
import FormElementBigger from "./components/FormElementBigger";
import Checkbox from "./components/Checkbox";
import { RiShoppingBag4Fill } from "react-icons/ri";
import { useState, useRef, useEffect } from "react";
import Breadcrumbs from "@/app/custom_components/shared/Breadcrumbs";
import { PiArrowSquareLeftFill } from "react-icons/pi";
import { PiArrowSquareRightFill } from "react-icons/pi";
import Link from "next/link";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import StarRating from "./components/StarRating";
import useWishlistStore from "@/app/store/wishlistStore";
import {nanoid} from 'nanoid'
import useCartStore from "@/app/store/cartStore";
import { useWatch } from "react-hook-form";
import { loadCartItems } from "@/lib/mock/CartItems";
import { CartItemType } from "@/app/model/cartItemType";
import { usePathname } from "next/navigation";
import clsx from "clsx"

export default function ProductPage({ params }: { params: { slug: string; productId: string } }) {
  
  const page = pages[params.slug as keyof typeof pages];
  if (!page) notFound();

  const product = page.products.find((p) => p.id === params.productId);
  if (!product) notFound();

  const orderSchema = z.object({
    collectionOption: z.string(),
    size: z.string().min(1, "size is required"),
    fruits: z.string(),
    toppings: z.string(),
  })

  type FormOrderValues = z.infer<typeof orderSchema>;

  const methods = useForm<FormOrderValues>({
    resolver: zodResolver(orderSchema),
    defaultValues: {
      collectionOption: '',
      size: '',
      fruits: '',
      toppings: '',
    }
  });

  const [submitAction, setSubmitAction] = useState<"cart" | "wishlist" | null>(null);

  const onCartOrWishlistSubmit = (data: FormOrderValues) => {

    const currentQuantity = itemsNumber;

    if (submitAction === "cart") {
      addToCart({
        id: `${product.id}-${nanoid()}`,
        name: product.productName,
        toppings: data.toppings,
        imageSrc: product.images[0],
        size: data.size,
        priceBefore: data.size === "Small"
          ? product.priceMin * itemsNumber
          : data.size === "Medium"
          ? product.priceMed * itemsNumber
          : data.size === "Large"
          ? product.priceMax * itemsNumber
          : null,
        price: 
          (!(subscribed && pathname.includes("special-offers"))) ?
          (data.size === "Small"
          ? product.priceMin * itemsNumber
          : data.size === "Medium"
          ? product.priceMed * itemsNumber
          : data.size === "Large"
          ? product.priceMax * itemsNumber
          : null) :
          (data.size === "Small"
          ? parseFloat((0.85 * product.priceMin * itemsNumber).toFixed(2))
          : data.size === "Medium"
          ? parseFloat((0.85 * product.priceMed * itemsNumber).toFixed(2))
          : data.size === "Large"
          ? parseFloat((0.85 * product.priceMax * itemsNumber).toFixed(2))
          : null),
        quantity: currentQuantity,
        collectionOption: data.collectionOption,
        fruits: data.fruits,
      });
      setItemsNumber(1);
      resetMainForm();
    }
    
    if (submitAction === "wishlist") {
      addToWishlist({
        id: `${product.id}-${nanoid()}`,
        name: product.productName,
        toppings: data.toppings,
        imageSrc: product.images[0],
        size: data.size,
        priceBefore: data.size === "Small"
          ? product.priceMin * itemsNumber
          : data.size === "Medium"
          ? product.priceMed * itemsNumber
          : data.size === "Large"
          ? product.priceMax * itemsNumber
          : null,
        price: 
          (!(subscribed && pathname.includes("special-offers"))) ?
          (data.size === "Small"
          ? product.priceMin * itemsNumber
          : data.size === "Medium"
          ? product.priceMed * itemsNumber
          : data.size === "Large"
          ? product.priceMax * itemsNumber
          : null) :
          (data.size === "Small"
          ? parseFloat((0.85 * product.priceMin * itemsNumber).toFixed(2))
          : data.size === "Medium"
          ? parseFloat((0.85 * product.priceMed * itemsNumber).toFixed(2))
          : data.size === "Large"
          ? parseFloat((0.85 * product.priceMax * itemsNumber).toFixed(2))
          : null),
        quantity: currentQuantity,
        collectionOption: data.collectionOption,
        fruits: data.fruits,
      });
      console.log("data:", data)
      console.log(useWishlistStore.getState().wishlist)
      setItemsNumber(1);
      resetMainForm();
    }

    setPopupVisible(true);
  } 

  const [itemsNumber, setItemsNumber] = useState<number>(1)

  const [arrowsVisibility, setArrowsVisibility] = useState<boolean>(false)
  const [imageIndex, setImageIndex] = useState<number>(0)

  const descriptionRef = useRef<HTMLDivElement>(null)
  const additionalRef = useRef<HTMLDivElement>(null)
  const reviewsRef = useRef<HTMLDivElement>(null)

  const scrollTo = (ref: React.RefObject<HTMLDivElement>) => {
    ref.current?.scrollIntoView({ behavior: 'smooth' })
  }

  const reviewSchema = z.object({
    ratings: z.string().min(1, "Rating is required"),
    review: z.string().min(10, "Review must be at least 10 characters"),
    name: z.string().min(1, "Name is required"),
    email: z.string().email("Invalid email"),
    saveInfo: z.boolean().optional(),
  });
  
  type FormValues = z.infer<typeof reviewSchema>;

  const savedName = typeof window !== "undefined" ? localStorage.getItem("reviewName") || "" : "";
  const savedEmail = typeof window !== "undefined" ? localStorage.getItem("reviewEmail") || "" : "";
  const savedSaveInfo = typeof window !== "undefined" ? localStorage.getItem("reviewSaveInfo") === "true" : false;

  const ratingMethods = useForm<FormValues>({
    resolver: zodResolver(reviewSchema),
    defaultValues: {
      ratings: '',
      review: '',
      name: savedName,
      email: savedEmail,
      saveInfo: savedSaveInfo,
    }
  });

  const {
    reset,
    formState: { isSubmitSuccessful }
  } = ratingMethods;

  const [confirmationMessage, setConfirmationMessage] = useState<string | null>(null);

  const onSubmit = (data: FormValues) => {
    console.log("Form data:", data);
    setConfirmationMessage("We have sent a message to your email address. Confirm there your review, please.");
    reset();

    if (isChecked) {
      localStorage.setItem("reviewName", data.name);
      localStorage.setItem("reviewEmail", data.email);
      localStorage.setItem("reviewSaveInfo", "true");
    } else {
      localStorage.removeItem("reviewName");
      localStorage.removeItem("reviewEmail");
      localStorage.setItem("reviewSaveInfo", "false");
    }

    isChecked && setIsChecked(false);
  }

  const [isChecked, setIsChecked] = useState(false);

  const relatedProductsIds: string[] = [];
  product.relatedProducts?.map(relatedProduct => (
    relatedProductsIds.push(relatedProduct.id)
  ))

  const initialWishlistState = Object.fromEntries(
    relatedProductsIds.map((id) => [id, false])
  );
  

  const [wishlistState, setWishlistState] = useState<Record<string, boolean>>(initialWishlistState);

  const toggleWishlist = (id: string) => {
    setWishlistState(prev => ({
      ...prev,
      [id]: !prev[id],
    }));
  }

  const transformWordrateIntoNumber = (wordrate: string) : number => {
    switch (wordrate) {
      case "Perfect":
        return 5;
      case "Good":
        return 4;
      case "Average":
        return 3;
      case "Not that bad":
        return 2;
      case "Very poor":
        return 1;
      default:
        return 0;
      }
  }

  const { addToWishlist } = useWishlistStore();
  const { addToCart } = useCartStore()
  const wishlist = useWishlistStore((state) => state.wishlist);
  const cart = useCartStore((state) => state.cart)
  const { /*getValues,*/ reset : resetMainForm } = methods;
  // const values = getValues();
  const watchedSize = useWatch({ name: "size", control: methods.control, });

  useEffect(() => {
  console.log("Zaktualizowana wishlist:", wishlist);
}, [wishlist]);

const [popupVisible, setPopupVisible] = useState(false);

const [subscribed, setSubscribed] = useState(true);

const pathname= usePathname();
console.log(pathname)

  return (
    <main>

      <Breadcrumbs currentPageName="Shop" />
      <div className='bg-primary-yellow lg:mt-24'>
        <div className="relative bg-[length:100%_100%] bg-no-repeat -mt-[1px]"
          style={{backgroundImage: `linear-gradient(to bottom, #93BE3B 15%, #FFC10C  25%)`,}}>
            <div className="absolute w-full top-[-4px] h-4 bg-primary-green z-[-1]"></div>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 200"><path fill="#93BE3B" fillOpacity="1" d="M0,96L60,90.7C120,85,240,75,360,96C480,117,600,171,720,160C840,149,960,75,1080,53.3C1200,32,1320,64,1380,80L1440,96L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"></path></svg>
        </div>

        <div className="flex p-10 max-sm:p-5 max-xl:flex-col max-xl:gap-8">
          <div className="w-[50%] max-xl:w-full h-fit relative cursor-pointer flex-1">
            <Image src={product.images[imageIndex]} alt={product.productName} className="w-full h-full" onMouseEnter={() => setArrowsVisibility(true)} onMouseLeave={() => {setArrowsVisibility(false)}}/>
            {arrowsVisibility ? 
            <div className="absolute w-full h-full">
              <button className="absolute left-8 -top-1/2 -translate-y-1/2">
                <PiArrowSquareLeftFill className="text-primary-green bg-white text-5xl" onMouseMove={() => setArrowsVisibility(true)} 
                onClick={() => imageIndex > 0 ? setImageIndex(prev => prev - 1) : null }/>
              </button>
              <button className="absolute right-8 -top-1/2 -translate-y-1/2">
                <PiArrowSquareRightFill className="text-primary-green bg-white text-5xl" onMouseMove={() => setArrowsVisibility(true)}
                onClick={() => imageIndex < product.images.length - 1 ? setImageIndex(prev => prev + 1) : null }/>
              </button>
            </div>
             :
            null
            }
          </div>
          <div className="flex flex-col pl-[5%] max-xl:pl-0 gap-10 flex-1">
            <div>
              <h1 className={`${cherryBomb.className} text-5xl font-bold mb-4`}>{product.productName}</h1>
              <p className="text-xl font-semibold text-primary-green">Price: ${product.priceMin.toFixed(2)} - ${product.priceMax.toFixed(2)}</p>
              {product.isNewProduct && <p className="text-green-600 mt-2">New Product!</p>}
            </div>
          {product.ingredients ? 
          <div className="flex flex-col gap-3">
              <p>Ingredients:</p>
              <div>
                {product.ingredients?.map(ingredient => (
                  <div key={product.id} className="flex gap-2 items-center">
                    <FaCheck className="text-primary-green"/>
                    <p>{ingredient}</p>
                  </div>
                ))}
              </div>
            </div> : null}
            
            <FormProvider {...methods}>
              <form onSubmit={methods.handleSubmit(onCartOrWishlistSubmit)}>
                <div className="flex flex-col gap-10">
                  {product.collectionOptions ? 
                  <div className="flex flex-col gap-2">
                    <p>THE ZEST COLLECTION</p>
                      <Dropdown name="collectionOption" 
                      title="Choose an option"
                      fieldWidth={100} 
                      options={product.collectionOptions}/>
                  </div> : null
                  }
                  {product.sizes ? 
                    <div className="flex flex-col gap-2">
                      <p>SIZE</p>
                      <Dropdown name="size" 
                        title="Choose an option"
                        fieldWidth={100} 
                        options={product.sizes}/>
                    </div> : null
                  }
                  <div className="flex flex-col gap-2">
                    <p>SELECT YOUR FRUITS</p>
                    <FormElementBigger name="fruits" fieldWidth={100}/>
                  </div>
                  <div className="flex flex-col gap-2">
                    <p>SELECT YOUR TOPPINGS</p>
                    <FormElementBigger name="toppings" fieldWidth={100}/>   
                  </div>
                </div>

                <div className ="flex flex-col gap-4 pt-10">
                    <p className={`text-primary-orange ${cherryBomb.className} text-3xl`}>Select Your Fruits</p>
                  <Checkbox text="CHOOSE UP TO 8 FRUTS FOR YOUR PLATTER"/>

                  <p className={clsx(`text-xl`, subscribed && pathname.includes("special-offers") && `line-through`)}>
                    {watchedSize === "Small" ? `$${(product.priceMin * itemsNumber).toFixed(2)}` :
                      watchedSize === "Medium" ? `$${(product.priceMed * itemsNumber).toFixed(2)}` :
                      watchedSize === "Large" ? `$${(product.priceMax * itemsNumber).toFixed(2)}` :
                      null}</p>

                  {subscribed && pathname.includes("special-offers") &&
                  <div>
                    <p>You&apos;ve got 15% discount due to your subscription</p>
                    <p>Final price for the product:</p>
                    <p className="text-xl font-semibold pt-1"> 
                      {watchedSize === "Small" ? `$${(0.85*product.priceMin * itemsNumber).toFixed(2)}` :
                      watchedSize === "Medium" ? `$${(0.85*product.priceMed * itemsNumber).toFixed(2)}` :
                      watchedSize === "Large" ? `$${(0.85*product.priceMax * itemsNumber).toFixed(2)}` :
                      null} 
                    </p>
                  </div>}

                  <div className="flex gap-4 max-sm:flex-col max-sm:items-center">
                    <div className="flex gap-6 text-2xl items-center border border-black px-4 ">
                      <button type="button" onClick={() => setItemsNumber(prev => prev + 1)}>+</button>
                      <div className="w-6 text-center">{itemsNumber}</div>
                      <button type="button" onClick={() => setItemsNumber(prev => prev >1 ? prev - 1 : prev)}>&ndash;</button>
                    </div>
                    <button 
                      type='submit' 
                      onClick={() => {setSubmitAction("cart");}} 
                      className={`text-white text-2xl bg-black px-10 py-2`}>
                      {<div className="flex gap-4 items-center">
                        <RiShoppingBag4Fill className="max-sm:w-[50%]"/>
                        <p className={`${cherryBomb.className}`}>ADD TO CART</p>
                      </div>}
                    </button>
                  </div>
                  <button 
                    onClick = {() => {setSubmitAction("wishlist");}}
                    type="submit" 
                    className="text-2xl w-fit text-white">
                    <div className="w-full flex gap-2 items-center">
                      <div className="w-fit relative">
                        <FaRegHeart />
                        <FaPlus className="absolute bottom-0 left-0 text-primary-orange text-xs" />
                      </div>
                      <p className="text-black">Add to Wishlist</p>
                    </div>
                  </button>
                </div>
              </form>
            </FormProvider>

            {popupVisible && (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
              <div className="bg-white p-6 rounded-lg shadow-lg text-center w-[90%] max-w-md animate-fade-in">
                <p className="text-xl font-semibold text-green-600">Product added to {submitAction === "cart" ? "cart" : "wishlist"}</p>
                <button
                  onClick={() => setPopupVisible(false)}
                  className="mt-4 text-white bg-primary-orange px-4 py-2 rounded"
                >
                  OK
                </button>
              </div>
            </div>
)}
            
            <div className="flex flex-wrap gap-4">
              {product.images.map((image, index) => 
                <Image key={index} src={image} alt={product.productName} className="w-32 h-32 cursor-pointer" onClick={() => setImageIndex(index)}/>
              )}
            </div>
          </div>
        </div>

        <div className=" mx-10 max-xl:mx-5 mb-10 flex flex-col gap-10">
          <div className="flex max-sm:flex-col max-sm:gap-8 justify-center gap-16 border-t border-b text-2xl py-3">
            <button onClick={() => scrollTo(descriptionRef)}>Description</button>
            <button onClick={() => scrollTo(additionalRef)}>Additional Information</button>
            <button onClick={() => scrollTo(reviewsRef)}>Reviews {`(${product.reviews ? product.reviews.length : 0})`}</button>
          </div>
          <div ref={descriptionRef} className="scroll-mt-4 flex flex-col gap-8">
            {product.description?.map((paragraph, index) => (
              <div className="flex flex-col gap-2" key={`${paragraph.id}-${index}`}>
                {paragraph.paragraphTitle && <h3 className={`text-2xl text-primary-orange whitespace-pre-line ${cherryBomb.className}`}>{paragraph.paragraphTitle}</h3>}
                {paragraph.paragraphTextBigger && <p className="text-xl whitespace-pre-line">{paragraph.paragraphTextBigger}</p>}
                {paragraph.paragraphTextSmaller && <p className="text-lg whitespace-pre-line">{paragraph.paragraphTextSmaller}</p>}
              </div>
              ))
            }
          </div>
          <div ref={additionalRef} className="scroll-mt-4">
            {product.additionalInformations?.map((additionalInformation, index) => (
              <div className="flex gap-2" key={`${additionalInformation.id}-${index}`}>
                <h2 className="font-bold">{additionalInformation.title}:</h2>
                <p>{additionalInformation.text}</p>
              </div>
            ))}
          </div>
          <section aria-label="reviews" className="flex max-lg:flex-col max-lg:gap-12">
            <div className="flex-1 flex flex-col gap-4">
              <h3 className={`text-3xl text-primary-green ${cherryBomb.className} scroll-mt-4`} ref={reviewsRef}>Reviews</h3>
              {product.reviews ? 
                <div className="flex flex-col gap-4 mr-8 max-sm:mr-0 max-h-[400px] overflow-y-auto pr-2">
                  {product.reviews
                  ?.slice()
                  .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
                  .map((review, index) => (
                    <div key={`${review.id}-${index}`}  className="border border-2 p-4 flex flex-col gap-2">
                      <div className="flex justify-between">
                        <p className="w-[50%] break-words whitespace-normal">customer: <span className="font-bold">{review.customerName}</span></p>
                        <p className="w-[50%] break-words whitespace-normal text-right">rate: <span className="font-bold">{review.rate}</span></p>
                      </div>
                      <p>{review.customerReview}</p>
                      <p className="flex justify-end">{review.date.slice(0,review.date.indexOf("T"))}</p>
                    </div>     
                  ))}
                </div> :
                <p>There are no reviews yet.</p>
              }
            </div>
            <div className="flex flex-1 w-full justify-center">
              <div className="flex flex-col w-[75%] max-sm:w-full gap-4 mr-4 max-sm:mr-0">
                <h3 className="text-2xl">
                  {product.reviews ?
                    `Be The Next To Review "${product.productName}"`:
                    `Be The First To Review "${product.productName}"`
                  }
                </h3>
                <p>Your email address will not be published. Required fields are marked *</p>
                
                <FormProvider {...ratingMethods}>
                    <form onSubmit={ratingMethods.handleSubmit(onSubmit)}>
                      <div className="flex flex-col gap-2">
                        <p>Your rating</p>

                        <Dropdown name="ratings" 
                        title="Rate..."
                        fieldWidth={100} 
                        options={["Perfect", "Good", "Average", "Not that bad", "Very poor"]}
                        />

                      <FormField
                        name="review"
                        render={({ field }) => (
                          <FormItem>
                            <FormControl>
                              <Textarea
                                placeholder="Your review *"
                                className="w-full min-h-[300px] border-gray-400 rounded-none"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      </div>

                      <div className="flex w-full max-xl:flex-col max-xl:gap-2 gap-8 my-4">
                        <FormField
                          name="name"
                          render={({ field }) => (
                            <FormItem className="flex-1">
                              <FormControl>
                                <Input
                                  placeholder="Name *"
                                  {...field}
                                  className="w-full max-sm:w-[100%] border-gray-400 placeholder:text-neutral-500 rounded-none"
                                />
                              </FormControl>

                              <FormMessage />
                            </FormItem>
                          )}
                        />

                        <FormField
                          name="email"
                          render={({ field }) => (
                            <FormItem className="flex-1">
                              <FormControl>
                                <Input
                                  placeholder="Email *"
                                  {...field}
                                  className="w-full max-sm:w-[100%] border-gray-400 placeholder:text-neutral-500 rounded-none"
                                />
                              </FormControl>

                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>
                      
                      {/* <Checkbox text="Save my name, email, and website in this browser for the next time I comment."/> */}

                      <FormField
                        name="saveInfo"
                        render={({ field }) => (
                          <FormItem className="flex gap-2 items-start items-center">
                            <FormControl>
                              <input 
                                type="checkbox" 
                                checked={isChecked} 
                                onChange={(e) => {
                                  setIsChecked(e.target.checked);
                                  field.onChange(e);
                                }}
                                className="mt-1" />
                            </FormControl>
                            <label className="text-md">
                              Save my name, email, and website in this browser for the next time I comment.
                            </label>
                          </FormItem>
                        )}
                      />

                      {confirmationMessage && (
                        <div className="text-green-700 bg-green-100 border border-green-400 px-4 py-2 rounded mt-2">
                          {confirmationMessage}
                        </div>
                      )}

                      <Button className="mt-2 w-full bg-black py-8 text-xl font-semibold hover:bg-primary-green" type="submit">Submit</Button>

                    </form>
                  </FormProvider>
              </div>
            </div>
          </section>

          <section aria-label="related products" className="flex flex-col gap-8">
            <h2 className={`${cherryBomb.className} text-4xl text-primary-green text-center mt-8`}>Related products</h2>
            <div className="flex w-full justify-between gap-16 flex-wrap">
              {product.relatedProducts?.map((relatedProduct, index) => {
                const isWishlisted = wishlistState[relatedProduct.id] ?? false;
                return (<div key={`${relatedProduct.id}-${index}`} className="flex flex-col flex-1 gap-1 items-center">
                  <Link href={`/shop/${relatedProduct.group}/${relatedProduct.id}`}>
                    <Image src={relatedProduct.images[0]} alt="related product" className=""/>
                  </Link>
                
                  <Link href={`/shop/${relatedProduct.group}/${relatedProduct.id}`} className="w-[100%]">
                    <Button className="w-full hover:bg-primary-green">
                      SELECT OPTIONS
                    </Button>
                  </Link>
                    {/* {isWishlisted ? 
                        
                        <div onClick={() => toggleWishlist(relatedProduct.id)} className="w-[10%] h-[50%] relative cursor-pointer">
                          <FaHeart className="w-full h-full text-white"/>
                          <FaCheck className="absolute bottom-0 left-0 text-green-500 text-xs" />
                        </div>
                        :
                        <div onClick={() => toggleWishlist(relatedProduct.id)} className="w-[10%] h-[50%] relative cursor-pointer">
                          <FaRegHeart className="w-full h-full text-white"/>
                          <FaPlus className="absolute bottom-0 left-0 text-primary-orange text-xs" />
                        </div>
                    } */}
                    
                  <div className="flex gap-4">
                    <StarRating rating={
                      (relatedProduct.reviews?.map(review =>
                        transformWordrateIntoNumber(review.rate)
                        ).reduce((acc, current) => acc + current, 0) ?? 0) /
                      (relatedProduct.reviews?.length || 1)
                    }/>
                    <p>{`(${relatedProduct.reviews ? relatedProduct.reviews.length : 0} reviews)`}</p>
                  </div>
                  <p>{relatedProduct.productName}</p>
                  <p>${product.priceMin.toFixed(2)} - ${product.priceMax.toFixed(2)}</p>
                </div>)
              }
              )}
            </div>
          </section>
        </div>
        

        <div className="relative bg-[length:100%_100%] bg-no-repeat -mt-[1px]"
          style={{backgroundImage: `linear-gradient(to bottom, #FFC10C 15%, #6E8E2D  25%)`,}}>
            <div className="absolute w-full top-[-4px] h-4 bg-primary-yellow z-[-1]"></div>
            <div className="absolute w-full bottom-[-3px] h-1 bg-[#6E8E2D] z-[100]"></div>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 200"><path fill="#FFC10C" fillOpacity="1" d="M0,96L60,90.7C120,85,240,75,360,96C480,117,600,171,720,160C840,149,960,75,1080,53.3C1200,32,1320,64,1380,80L1440,96L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"></path></svg>
        </div>

      </div>        
    </main>
  );
}
