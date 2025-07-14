// import React from "react";
import { Link } from "react-router-dom";
import { IoHome } from "../../assets/index"; // Adjust the import path as necessary

const HomeButtonArtist: React.FC = () => {
  return (
    <section>
      <div className="rounded-full bg-gray-950 w-12 h-12">
        <Link to="/listenerhome">
          <button className="group flex flex-col gap-2 items-center absolute left- -ml-4.5 top-[3.1rem] transform -translate-y-1/2 text-gray-500">
            <IoHome className="w-7 h-8 text-gray-600" />
            <span className="text-White opacity-0 group-hover:opacity-100 transition-opacity duration-200">
              Home
            </span>
          </button>
        </Link>
      </div>
    </section>
  );
};

export default HomeButtonArtist;
