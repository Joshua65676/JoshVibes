import React, { useState, useEffect, useRef } from "react";
import { usePlayer } from "../songs/PlayerContext";
import {
  FaPlay,
  FaPause,
  FaStepBackward,
  FaStepForward,
  FaRandom,
  FaRepeat,
} from "../../assets/index";

const SongControl: React.FC = () => {
  const {
    songs,
    currentIndex,
    setCurrentIndex,
    shuffle,
    setShuffle,
    repeat,
    setRepeat,
  } = usePlayer();
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);
  const currentSong = currentIndex !== null ? songs[currentIndex] : null;

  const togglePlay = () => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const playNext = () => {
    if (!songs.length) return;
    const nextIndex = shuffle
      ? Math.floor(Math.random() * songs.length)
      : (currentIndex! + 1) % songs.length;
    setCurrentIndex(nextIndex);
    setTimeout(() => audioRef.current?.play(), 100);
  };

  const playPrev = () => {
    if (!songs.length) return;
    const prevIndex = (currentIndex! - 1 + songs.length) % songs.length;
    setCurrentIndex(prevIndex);
    setTimeout(() => audioRef.current?.play(), 100);
  };

  useEffect(() => {
    if (audioRef.current && songs[currentIndex]) {
      audioRef.current.src = `http://localhost/joshvibes/PHP_Backend/${songs[currentIndex].audio}`;
      audioRef.current
        .play()
        .catch((err) => console.error("Playback failed:", err));
      setIsPlaying(true);
    }
  }, [currentIndex, songs]);

  return (
    <footer className="fixed flex flex-row bottom-0 left-0 right-0 bg-BlackBg border-t border-slate-500 text-white px-6 py-0 shadow-lg z-50">
      {currentSong && (
        <div className="flex flex-row gap-2">
          <img
            src={`http://localhost/joshvibes/PHP_Backend/${currentSong.profile_pics}`}
            alt={currentSong.title}
            className="w-19 h-19 mt-2 object-cover rounded"
          />
          <div className="flex flex-col text-start justify-center">
            <h2 className="text-lg font-bold text-LightWhite">{currentSong.title}</h2>
            <span className="text-sm text-GrayText font-semibold">{currentSong.artist_name}</span>
          </div>
        </div>
      )}
      <div className=" flex flex-row items-center justify-center max-w-3xl mx-auto">
        <button
          type="button"
          onClick={() => setRepeat(!repeat)}
          className="group flex flex-col items-center transform gap-2"
        >
          <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-200">
            Repeat
          </span>
          <FaRepeat
            className={`text-lg ${
              repeat ? "text-green-400" : "text-White"
            } transition`}
          />
        </button>

        <button
          type="button"
          onClick={playPrev}
          className="group flex flex-col items-center transform gap-2"
        >
          <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-200">
            previous
          </span>
          <FaStepBackward className="text-xl hover:text-blue-400 transition" />
        </button>

        <div onClick={togglePlay} className="mx-4 ">
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
          onClick={playNext}
          className="group flex flex-col items-center transform gap-2"
        >
          <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-200">
            Next
          </span>
          <FaStepForward className="text-xl hover:text-blue-400 transition" />
        </button>

        <button
          type="button"
          onClick={() => setShuffle(!shuffle)}
          className="group flex flex-col items-center transform gap-2"
        >
          <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-200">
            Enable Shuffle
          </span>
          <FaRandom
            className={`text-lg ${
              shuffle ? "text-pink-400" : "text-White"
            } transition`}
          />
        </button>
      </div>

      <div>
        {/* Placeholder for future volume control or additional features */}
      </div>

      {currentSong && (
        <audio
          ref={audioRef}
          src={`http://localhost/joshvibes/PHP_Backend/${currentSong.audio}`}
          onEnded={() => (repeat ? audioRef.current?.play() : playNext())}
          onPlay={() => setIsPlaying(true)}
          onPause={() => setIsPlaying(false)}
        />
      )}
    </footer>
  );
};

export default SongControl;
