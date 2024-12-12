import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faTwitter, faInstagram,  faGooglePlusG } from "@fortawesome/free-brands-svg-icons";
import Image from 'next/image';




export default function Footer() {
  return (
    <footer className="bg-[#3C93BE] text-white py-12">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row justify-between ">
        {/* Left section: Logo and Text */}
        <div className="flex flex-col p-1">
        
    
          <div className="flex items-center mb-4">
          <Image 
          src="/images/logo.png" 
         alt="Zestful Blends Logo" 
          width={100}
          height={50}
         />
            
          </div>
          <p className="text-sm text-white">
            Donec St Armet Nibh Vestibulum Ipsum Cursus.<br />Duis Ac Tortor Gravida Ligula Efficit Finibus Sed Vel Tellus.
          </p>
          <div className="flex mt-4 space-x-4">
            <a href="#" className="flex justify-center items-center bg-white rounded-full p-3 shadow-md text-black   hover:text-gray-300">
              <FontAwesomeIcon icon={faFacebookF} size="lg" />
            </a>
            <a href="#" className="flex justify-center items-center bg-white rounded-full p-3 shadow-md text-black   hover:text-gray-300">
              <FontAwesomeIcon icon={faTwitter} size="lg" />
            </a>
            <a href="#" className="flex justify-center items-center bg-white rounded-full p-3 shadow-md text-black   hover:text-gray-300">
              <FontAwesomeIcon icon={faInstagram} size="lg" />
            </a>
            <a href="#" className="flex justify-center items-center bg-white rounded-full p-3 shadow-md text-black   hover:text-gray-300">
              <FontAwesomeIcon icon={faGooglePlusG} size="lg" />
            </a>
          </div>
        </div>

        {/* Middle section: Contact */}
        <div className="flex flex-col">
          <h3 className="font-bold text-lg mb-4">CONTACT</h3>
          <ul className="space-y-2">
            <li>1245, North Western Street</li>
            <li>Europa, Lumbio</li>
            <li>Call Us +63 (0) 123 456 789</li>
            <li>chocolatier@admin.com</li>
          </ul>
        </div>

        {/* Right section: Shop and Services */}
        <div className="flex flex-col">
          <h3 className="font-bold text-lg mb-4">SHOP</h3>
          <ul className="space-y-2">
            <li>Juices</li>
            <li>Supplements</li>
            <li>Pantry</li>
            <li>Milkshakes</li>
            <li>Health Drinks</li>
          </ul>
        </div>

        {/* Right section: Services */}
        <div className="flex flex-col">
          <h3 className="font-bold text-lg mb-4">SERVICES</h3>
          <ul className="space-y-2">
            <li>Orders</li>
            <li>Addresses</li>
            <li>Account</li>
            <li>Details</li>
            <li>24x7 Calls</li>
            <li>Blogs & News</li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
