import React, { useState } from "react";
import { Profile } from "../assets/index";
import Profiles from "./profile/Profile";
import LogOut from "./profile/LogOut";

const ProfileSection = [
  { label: "Profile", Component: Profiles },
  { label: "Log Out", Component: LogOut },
];

const ArtistProfile: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section>
      <main>
        <div className="rounded-full bg-gray-950 w-12 h-12 ">
          <button
            type="button"
            onClick={() => setIsOpen((prev) => !prev)}
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
        {isOpen && (
          <div className="absolute right-27 mt-1 w-55 bg-gray-900 rounded-xl shadow-2xl z-50 p-2">
            <ul className="flex flex-col gap-">
              {ProfileSection.map(({ Component }, index) => (
                <li key={index} className="hover:bg-gray-800 rounded-lg transition p-3 cursor-pointer">
                  <Component />
                </li>
              ))}
            </ul>
          </div>
        )}
      </main>
    </section>
  );
};

export default ArtistProfile;
