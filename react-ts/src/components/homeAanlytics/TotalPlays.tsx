import React from "react";
import { PlaySong } from "../../assets";
const TotalPlays: React.FC = () => {
  return (
    <section  className="bg-GrayBg h-[7rem] rounded-2xl">
      <main className='p-5 pl-8 flex flex-row gap-1'>
        <div className="flex flex-row gap-4">
          <div>
            <img src={PlaySong} alt="Plays icon" className=""/>
          </div>
          <span className="text-White font-semibold text-[18px]">Total Plays</span>
        </div>
      </main>
    </section>
  );
};

export default TotalPlays;
