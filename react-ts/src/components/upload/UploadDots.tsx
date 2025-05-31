import React, { useState } from "react";
import { HiDotsVertical } from "react-icons/hi";

const UploadDots: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenuList = ["Details", "Delete"];

  return (
    <main className="">
      <div className="relative inline-block">
        <button onClick={() => setIsOpen(!isOpen)} className="">
          <HiDotsVertical className="text-White w-6 h-6" />
        </button>
        {isOpen && (
          <ul className="absolute right-0 mt-2 w-40 bg-gray-800 rounded-md shadow-lg">
            {toggleMenuList.map((item, index) => (
              <li
                key={index}
                className="px-4 py-2 text-white hover:bg-gray-700 cursor-pointer"
                onClick={() => {
                  console.log(`${item} clicked`);
                  setIsOpen(false);
                }}
              >
                {item}
              </li>
            ))}
          </ul>
        )}
      </div>
    </main>
  );
};

export default UploadDots;
