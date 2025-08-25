import React from "react";
import { Link } from "react-router-dom";
import SongHome from "../songs/SongHome";

const NewRelease: React.FC = () => {

  return (
    <section className="container max-w-7xl mx-auto w-full -ml-4">
      <main className="flex flex-col gap-4">
        <main className="flex flex-row items-center justify-between">
          <div className="flex flex-col items-start gap-1">
            <span className="text-sm font-medium font-sans">
              Brand new music from artists you love.
            </span>
            <h2 className="text-3xl font-bold font-serif">
              New release for you
            </h2>
          </div>
          <div>
            <Link to="" className="">
              <span className="text-GrayText font-bold text-sm font-sans">
                View More →
              </span>
            </Link>
          </div>
        </main>
        {/* Song Home */}
        <div>
          <SongHome />
        </div>
      </main>
    </section>
  );
};

export default NewRelease;
