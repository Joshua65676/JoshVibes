import { MdArrowBackIos } from "../../assets/index";
import { useNavigate } from "react-router-dom";
import CategoryButton from "../ui/CategoryButton";
import HomeButtonArtist from "../ui/HomeButtonArtist";
import SearchButton from "../ui/SearchButton";
import { useEffect, useState } from "react";
import NotificationButton from "../ui/NotificationButton";
import ArtistProfile from "../Profile";
const Navbar: React.FC = () => {
  const [stickyClass, setStickyClass] = useState<boolean>(false);
  const navigate = useNavigate();

  const stickNavbar = () => {
    const windowHeight = window.scrollY;
    setStickyClass(windowHeight > 50);
  };

  useEffect(() => {
    window.addEventListener("scroll", stickNavbar);
    return () => window.removeEventListener("scroll", stickNavbar);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50  ${
        stickyClass
          ? "bg-GrayBg backdrop-blur-sm border border-slate-300 shadow-md"
          : ""
      }`}
    >
      <section className="container max-w-6xl mx-auto w-full ">
        <main className="flex flex-row justify-between items-center p-4">
          {/* Back Button */}
          <div className="">
            <button
              type="button"
              onClick={() => navigate(-1)}
              className="group flex flex-col items-center absolute top-16 left-14 transform -translate-y-1/2"
            >
              <MdArrowBackIos className="w-8 h-8 text-gray-600" />
              <span className="text-gray-600 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                Go Back
              </span>
            </button>
          </div>
          {/* Home button, search button  and category*/}
          <main className="flex flex-row gap-1 items-center p-2">
            {/* Home Button */}
            <div>
              <HomeButtonArtist />
            </div>
            {/* Search Button */}
            <div>
              <SearchButton />
            </div>
            {/* Category Button */}
            <div>
              <CategoryButton />
            </div>
          </main>
          {/* Notification and Profile Button */}
          <main className="flex flex-row items-center ">
            {/* Notification Button */}
            <div>
              <NotificationButton />
            </div>
            <div>
              <ArtistProfile />
            </div>
          </main>
        </main>
      </section>
    </nav>
  );
};

export default Navbar;
