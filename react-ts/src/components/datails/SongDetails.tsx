import React, { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../Navbar";
import DetailsAnalytics from "./DetailsAnalytics";
import { FaPlay, FaPause } from "react-icons/fa";
import { Button } from "../ui/Button";

const SongDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [song, setSong] = useState<any>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    if (id) {
      fetch(`http://localhost/joshvibes/PHP_Backend/get_song.php?id=${id}`)
        .then((res) => res.json())
        .then((data) => setSong(data))
        .catch((err) => console.error("Failed to fetch song details:", err));
    }
  }, [id]);

  // Pause audio when component unmounts
  useEffect(() => {
    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
      }
    };
  }, []);

  if (!song) return <div>Loading...</div>;

  // Separate date and time
  const dateObj = new Date(song.created_at);
  const dateStr = dateObj.toLocaleDateString();
  const timeStr = dateObj.toLocaleTimeString();

  const handlePlayPause = () => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  // Sync play/pause state with audio events
  const handleAudioEnded = () => setIsPlaying(false);
  const handleAudioPause = () => setIsPlaying(false);
  const handleAudioPlay = () => setIsPlaying(true);

  return (
    <section className="container max-w-7xl mx-auto w-full p-8 mt-10">
      <Navbar />
      <div className="flex flex-row justify-between pt-10">
        {/* Song Datails */}
        <div className="flex flex-row gap-10">
          <div className="">
            <img
              src={`http://localhost/joshvibes/PHP_Backend/${song.profile_pics}`}
              alt={song.title}
              className="w-48 h-48 object-cover rounded-full border-4 border-blue-500"
            />
          </div>
          <div className="flex flex-col gap-3 justify-center text-start">
            <h2 className="text-3xl font-bold text-white mb-2">
              {song.title}..mp3
            </h2>
            <div className="flex flex-row items-center gap-2">
              <span className="text-sm text-gray-400">
                <span className="font-semibold text-blue-400">{dateStr}</span>
              </span>
              <hr className="border-4 border-red-800" />
              <span className="text-sm text-gray-400">
                <span className="font-semibold text-green-400">{timeStr}</span>
              </span>
            </div>
            <p className="text-gray-300 mb-4">{song.description}</p>
          </div>
        </div>
        {/* Song Play */}
        <div className="flex flex-col justify-center items-center">
          <Button
            onClick={handlePlayPause}
            className="bg-blue-500 text-white px-6 py-2 rounded-lg flex items-center gap-2 hover:bg-blue-600 transition duration-300"
          >
            {isPlaying ? (
              <FaPause className="text-xl" />
            ) : (
              <FaPlay className="text-xl" />
            )}
            {isPlaying ? "Pause" : "Play"}
          </Button>
          {/* Hidden audio element */}
          <audio
            ref={audioRef}
            src={`http://localhost/joshvibes/PHP_Backend/${song.audio}`}
            onEnded={handleAudioEnded}
            onPause={handleAudioPause}
            onPlay={handleAudioPlay}
          />
        </div>
      </div>
      {/* Song Analytics */}
      <div className="">
        <DetailsAnalytics />
      </div>
    </section>
  );
};

export default SongDetails;
