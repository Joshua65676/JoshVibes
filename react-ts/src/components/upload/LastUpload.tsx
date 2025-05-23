import React from "react";
import { Link } from "react-router-dom";
import { CreateButton } from "../../assets";
const LastUpload: React.FC = () => {
  return (
    <section className="container max-w-7xl mx-auto w-full -ml-7">
      <main className="">
        <div className="flex flex-row justify-between">
          <h1 className="text-White font-semibold">Last Upload</h1>
          <div className="-mr-4">
            <Link to="/create">
              <button>
                <img src={CreateButton} alt="Create Button" className="w-10 h-10 -mt-4"/>
              </button>
            </Link>
          </div>
        </div>
      </main>
    </section>
  );
};

export default LastUpload;
