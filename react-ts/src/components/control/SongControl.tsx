import React, { useState } from "react";
import {
  FaPlay,
  FaPause,
  FaStepBackward,
  FaStepForward,
  FaRandom,
  FaRepeat,
} from "../../assets/index";

const SongControl: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  return (
    <footer className=" fixed bottom-0 left-0 right-0 bg-BlackBg border-t border-slate-500 text-white px-6 py-2 shadow-lg z-50">
      <div className=" flex flex-row items-center justify-center max-w-3xl mx-auto">
        <button
          type="button"
          className="group flex flex-col items-center transform gap-2"
        >
          <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-200">
            Repeat
          </span>
          <FaRepeat className="text-lg hover:text-green-400 transition" />
        </button>

        <button
          type="button"
          className="group flex flex-col items-center transform gap-2"
        >
          <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-200">
            previous
          </span>
          <FaStepBackward className="text-xl hover:text-blue-400 transition" />
        </button>

        <div onClick={() => setIsPlaying(!isPlaying)} className="mx-4 ">
          {isPlaying ? (
            <button
              type="button"
              className="group flex flex-col items-center transform gap-2"
            >
              <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                Pause
              </span>
              <div className="rounded-full bg-White text-BlackBg h-9 w-9 p-[8px]">
                <FaPause className="text-xl hover:text-GrayBg transition" />
              </div>
            </button>
          ) : (
            <button
              type="button"
              className="group flex flex-col items-center transform gap-2"
            >
              <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                Play
              </span>
              <div className="rounded-full bg-White text-BlackBg h-9 w-9 p-[9px] pl-2.5">
                <FaPlay className="text-xl hover:text-GrayBg transition" />
              </div>
            </button>
          )}
        </div>

        <button
          type="button"
          className="group flex flex-col items-center transform gap-2"
        >
          <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-200">
            Next
          </span>
          <FaStepForward className="text-xl hover:text-blue-400 transition" />
        </button>

        <button
          type="button"
          className="group flex flex-col items-center transform gap-2"
        >
          <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-200">
            Enable Shuffle
          </span>
          <FaRandom className="text-lg hover:text-pink-400 transition" />
        </button>
      </div>
    </footer>
  );
};

export default SongControl;
