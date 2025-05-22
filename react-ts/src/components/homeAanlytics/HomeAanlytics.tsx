import React from "react";
import Retentions from "./Retention";
import TotalPlays from "./TotalPlays";
import SongUploaded from "./SongUploaded";
import SkipRates from "./SkipRate";

const components = [TotalPlays, SongUploaded, SkipRates, Retentions];
const HomeAanlytics: React.FC = () => {
  return (
    <main className="container max-w-7xl mx-auto w-full pt-20 -ml-7">
      <div className="grid grid-cols-2 gap-4">
        {components.map((Component, index) => (
          <Component key={index} />
        ))}
      </div>
    </main>
  );
};

export default HomeAanlytics;
