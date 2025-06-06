import React, { useState } from "react";
import { HiDotsVertical } from "react-icons/hi";
import { useNavigate } from "react-router-dom";

interface UploadDotsProps {
  songId: number;
  songTitle: string;
  onDelete: (id: number) => void;
}

const UploadDots: React.FC<UploadDotsProps> = ({ songId, onDelete, songTitle}) => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const toggleMenuList = ["Details", "Delete"];

   const handleMenuClick = (item: string) => {
    if (item === "Details") {
      navigate(`/${songTitle}/${songId}`);
    } else if (item === "Delete") {
      if (window.confirm("Are you sure you want to delete this song?")) {
        onDelete(songId);
      }
    }
    setIsOpen(false);
  };

  return (
    <main className="">
      <div className="relative inline-block">
        <span onClick={() => setIsOpen(!isOpen)} className="">
          <HiDotsVertical className="text-White w-6 h-6" />
        </span>
        {isOpen && (
          <ul className="absolute right-0 mt-2 w-40 bg-gray-800 rounded-md shadow-lg">
            {toggleMenuList.map((item, index) => (
              <li
                key={index}
                className="px-4 py-2 text-white hover:bg-gray-700 cursor-pointer"
                onClick={() => {
                  handleMenuClick(item);
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
