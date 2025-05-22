import React from "react";
import { Retention } from "../../assets";
const Retentions: React.FC = () => {
  return (
    <section className="bg-GrayBg h-[7rem] rounded-2xl">
      <main className="p-5 pl-8 flex flex-row gap-1">
        <div className="flex flex-row gap-4">
          <div>
            <img src={Retention} alt="Song icon" />
          </div>
          <span className="text-White font-semibold text-[18px]">Retention</span>
        </div>
      </main>
    </section>
  );
};

export default Retentions;
