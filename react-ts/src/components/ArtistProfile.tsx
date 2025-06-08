import React, { useState } from "react";
import { Profile } from "../assets/index";
import Profiles from "./profile/Profile";
import LogOut from "./profile/LogOut";
import Password from "./profile/Password";

const ArtistProfile: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [modal, setModal] = useState<"profile" | "password" | null>(
    null
  );

  // Close modal when clicking outside
  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) setModal(null);
  };

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
          <div className="absolute right-37 mt-3 w-40 bg-gray-900 rounded-xl shadow-2xl z-50 p-2">
            <ul className="flex flex-col gap-2">
              <li
                className="hover:bg-gray-800 rounded-lg transition p-3 cursor-pointer text-white"
                onClick={() => {
                  setModal("profile");
                  setIsOpen(false);
                }}
              >
                View Profile
              </li>
              <li
                className="hover:bg-gray-800 rounded-lg transition p-3 cursor-pointer text-white"
                onClick={() => {
                  setModal("password");
                  setIsOpen(false);
                }}
              >
                Password
              </li>
              <li
                className=" rounded-lg transition p-3 cursor-pointer text-red-700 font-semibold text-lg"
              >
                <LogOut />
              </li>
            </ul>
          </div>
        )}
        {/* Modal for Profile */}
        {modal && (
          <div
            className="fixed inset-0 bg-opacity-10 flex items-center justify-center z-50"
            onClick={handleBackdropClick}
          >
            <div className="bg-gray-900 p-8 rounded-xl shadow-2xl min-w-[300px] relative">
              <button
                className="absolute top-2 right-4 text-gray-400 hover:text-white text-xl"
                onClick={() => setModal(null)}
              >
                &times;
              </button>
              {modal === "profile" && <Profiles />}
              {modal === "password" && <Password />}
            </div>
          </div>
        )}
      </main>
    </section>
  );
};

export default ArtistProfile;
