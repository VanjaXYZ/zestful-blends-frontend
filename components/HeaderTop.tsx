"use client";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF,  faInstagram, faYoutube } from "@fortawesome/free-brands-svg-icons";

const HeaderTop = () => {
    return(
        <div className='border-b border-bg-yellow-400 bg-yellow-400 hidden sm:block'>
            <div className='container py-4 px-4 w-full h-4'>
                <div className='flex justify-between items-center'>
                    <div className='hidden lg:flex gap-1'>
                    <div className="flex ml-4 mb-6  space-x-4">
                        <a href="#" className="flex justify-center items-center text-black   hover:text-gray-300">
                         <FontAwesomeIcon icon={faInstagram} size="sm" />
                        </a>
   
                        <a href="#" className="flex justify-center items-center text-black   hover:text-gray-300">
                         <FontAwesomeIcon icon={faFacebookF} size="sm" />
                        </a>
                        <a href="#" className="flex justify-center items-center text-black   hover:text-gray-300">
                         <FontAwesomeIcon icon={faYoutube} size="sm" />
                        </a>

                        </div>

                    </div>
                    
                    <div className=' flex items-center mb-6 text-xs '>
                    <p>OUR PRODUCTS HAVE NUT ALLERGIES IN THEM.</p>
                    </div>
                    <div className=' flex items-center mb-6 text-xs '>
                    <p>Info@zestfulBlends.com</p>
                    </div>


                </div>
                
            </div>
        </div>

    );

};
export default HeaderTop;