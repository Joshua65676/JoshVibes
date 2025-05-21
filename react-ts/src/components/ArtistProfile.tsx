import React from "react";
import { Profile } from "../assets/index";

const ArtistProfile: React.FC = () => {
  return (
    <section>
      <main>
        <div className="rounded-full bg-gray-950 w-12 h-12 ">
          <button
            type="button"
            className="group flex flex-col gap-2 items-center absolute -ml-4.5 top-[4rem] transform -translate-y-1/2 text-gray-500"
          >
            <img
              src={Profile}
              alt="Profile"
              className="w-7 h-8 text-gray-600"
            />
            <span className="text-gray-600 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
              Profile
            </span>
          </button>
        </div>
      </main>
    </section>
  );
};

export default ArtistProfile;
