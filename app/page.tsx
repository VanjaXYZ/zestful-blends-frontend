"use client";

import Image from "next/image";
import { useComboStore } from "../store/comboStore";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown,faHeart,faSeedling,faBolt,faShieldVirus } from "@fortawesome/free-solid-svg-icons";

export default function Page() {
  const { combos, selectedCombo, setSelectedCombo } = useComboStore();

  return (
    <div className="bg-[rgba(244,202,138,0.68)] min-h-screen p-8 pt-40 mt-16">
      <h1 className="text-center text-4xl font-bold mb-4 text-[#654321]">
        Item Collections
      </h1>

      <div className="text-center mb-8">
        <select
          className="border border-gray-300 rounded-lg px-4 py-2 text-[#654321] bg-white shadow-lg"
          value={selectedCombo ?? ""}
          onChange={(e) => setSelectedCombo(Number(e.target.value))}
        >
          <option value="" disabled>
            Variety Combo
          </option>
          {combos.map((combo) => (
            <option key={combo.id} value={combo.id}>
              {combo.name}
            </option>
          ))}
        </select>
        <FontAwesomeIcon
          icon={faChevronDown}
          className="text-[#654321] ml-2"
        />
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {combos.map((combo) => (
          <div
            key={combo.id}
            className="bg-white rounded-lg shadow-lg overflow-hidden border border-gray-200"
          >
            <Image
              src={combo.image}
              alt={combo.name}
              width={500}
              height={300}
              className="w-full h-48 object-cover"
            />
            <div className="p-4 bg-customYellow">
              <h2 className="text-lg font-bold text-[#654321]">{combo.name}</h2>
              <p className="text-sm text-gray-600 my-2">{combo.description}</p>
              <button className="bg-customRed text-white px-4 py-2 rounded-lg">
                Buy Now
              </button>
            </div>
          </div>
        ))}
      </div>
      {/* Pagination */}
<div className="flex justify-center items-center gap-3 mt-8">
  {/* Left Arrow */}
  <button
    className="flex items-center justify-center w-10 h-10 text-black bg-white rounded-full shadow hover:bg-[#FFCC00] hover:text-white transition"
    onClick={() => console.log("Go to previous page")} 
  >
    ←
  </button>

  {/* Page Numbers */}
  <button
    className="flex items-center justify-center w-10 h-10 bg-[#FFCC00] text-white rounded-full font-semibold"
    onClick={() => console.log("Go to page 1")} 
  >
    1
  </button>
  <button
    className="flex items-center justify-center w-10 h-10 bg-white text-black rounded-full font-semibold hover:bg-[#FFCC00] hover:text-white transition"
    onClick={() => console.log("Go to page 2")} 
  >
    2
  </button>
  <button
    className="flex items-center justify-center w-10 h-10 bg-white text-black rounded-full font-semibold hover:bg-[#FFF64F] hover:text-white transition"
    onClick={() => console.log("Go to page 3")} 
  >
    3
  </button>

  {/* Right Arrow */}
  <button
    className="flex items-center justify-center w-10 h-10 text-black bg-white rounded-full shadow hover:bg-[#FFCC00] hover:text-white transition"
    onClick={() => console.log("Go to next page")} 
  >
    →
  </button>
</div>

      <div className=" py-16">
        <h2 className="text-center text-4xl font-bold text-[#654321] mb-8">
          The Benefits of Juices from our Shop
        </h2>

        <div className="grid md:grid-cols-4 gap-8 px-4">
          {/* Benefit 1 */}
          <div className=" p-6  text-center">
            <div className="text-4xl mb-4">
              {/* Replace with your icon or Image */}
              <FontAwesomeIcon icon={faHeart} />
            </div>
            <h3 className="font-semibold text-xl text-[#654321] mb-2">Digestive Health</h3>
            <p className="text-sm text-gray-600">
              Lorem ipsum dolor sit amet consectetur adipiscing elit.
            </p>
          </div>

          {/* Benefit 2 */}
          <div className=" p-6   text-center">
            <div className="text-4xl mb-4">
            <FontAwesomeIcon icon={faShieldVirus} />
            </div>
            <h3 className="font-semibold text-xl text-[#654321] mb-2">Immune Support</h3>
            <p className="text-sm text-gray-600">
              Lorem ipsum dolor sit amet consectetur adipiscing elit.
            </p>
          </div>

          {/* Benefit 3 */}
          <div className=" p-6   text-center">
            <div className="text-4xl mb-4">
            <FontAwesomeIcon icon={faBolt} /> 
            
            </div>
            <h3 className="font-semibold text-xl text-[#654321] mb-2">Energy Boost</h3>
            
            <p className="text-sm text-gray-600">
              Lorem ipsum dolor sit amet consectetur adipiscing elit.
            </p>
            
          </div>

          {/* Benefit 4 */}
          <div className=" p-6   text-center">
            <div className="text-4xl mb-4">
            <FontAwesomeIcon icon={faSeedling} />
            </div>
            <h3 className="font-semibold text-xl text-[#654321] mb-2">Antioxidant Power</h3>
            <p className="text-sm text-gray-600">
              Lorem ipsum dolor sit amet consectetur adipiscing elit.
            </p>
          </div>
        </div>

        
      </div>
    </div>
    
  );
}
