// import React from 'react'
import { FaSearch } from "../../assets/index";
const SearchButton: React.FC = () => {
  return (
    <main>
      <div className="relative w-[50rem] max-w-md">
        <FaSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500 w-5 h-5" />
        <input
          type="text"
          placeholder="Search..."
          className="pl-12 pr-5 py-2 w-full border-2 border-gray-900 rounded-full focus:outline-none focus:ring-2 focus:ring-gray-950"
        />
      </div>
    </main>
  );
};

export default SearchButton;
