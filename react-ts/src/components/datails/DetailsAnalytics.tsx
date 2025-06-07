import React from "react";
import TotalRevRecev from "./TotalRevRecev";
import TotalListens from "./TotalListens";
import ListeningDura from "./ListeningDura";
import SkipRate from "./SkipRate";

const components = [SkipRate, ListeningDura, TotalRevRecev, TotalListens];
const DetailsAnalytics: React.FC = () => {
  return (
    <>
      <main className="container max-w-7xl mx-auto w-full pt-20">
        <div className="grid grid-cols-2 gap-4">
          {components.map((Component, index) => (
            <Component key={index} />
          ))}
        </div>
      </main>
    </>
  );
};

export default DetailsAnalytics;
