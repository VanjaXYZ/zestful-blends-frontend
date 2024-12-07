"use client";

import Image from "next/image";
import { useComboStore } from "../store/comboStore";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

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
    </div>
  );
}
