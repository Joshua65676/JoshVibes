import React from "react";
import Navbar from "./Navbar";
import HomeAanlytics from "./homeAanlytics/HomeAanlytics";
import LastUpload from "./upload/LastUpload";
import LatestFeedback from "./feedback/LatestFeedback";
const ArtistHome: React.FC = () => {
  return (
    <section className="container max-w-7xl mx-auto w-full">
      <main className="flex flex-col">
        <div>
          <Navbar />
        </div>
        <main className="flex flex-col gap-10">
          <HomeAanlytics />
          <LastUpload />
          <LatestFeedback />
        </main>
      </main>
    </section>
  );
};

export default ArtistHome;
