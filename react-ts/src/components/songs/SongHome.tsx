import React, { useEffect } from "react";
import axios from "axios";
import { FaPlay } from "react-icons/fa";
import { usePlayer } from "./PlayerContext";
import type { Song } from "./PlayerContext"
import { Button } from "../ui/Button";

const SongHome: React.FC = () => {
  const {songs, setSongs, setCurrentIndex } = usePlayer();

  useEffect(() => {
    axios
      .get("http://localhost/joshvibes/PHP_Backend/get_allsong.php")
      .then((res) => {
        setSongs(res.data);
      })
      .catch((err) => console.error("Error fetching songs", err));
  }, [setSongs]);

  const handlePlay = (id: number) => {
    const index =  songs.findIndex(song => song.id === id);
    if (index !== -1) {
      setCurrentIndex(index);
    }
  };

  return (
    <section className="overflow-x-auto mb-15">
      <main className="flex gap-8 flex-row">
        {songs.slice(0, 5).map((song: Song) => (
          <div
            key={song.id}
            className="hover:bg-GrayBg relative group w-52 p-2 rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
          >
            <div className="relative flex flex-col gap-3 w-48 min-w-[12rem] rounded-md ">
              <div>
                <img
                  src={`http://localhost/joshvibes/PHP_Backend/${song.profile_pics}`}
                  alt={song.title}
                  className="w-full h-48 object-cover rounded-lg"
                />
              </div>
              {/* Title and Artist Name */}
              <div className="text-start flex flex-col">
                <h3 className="text-[20px] font-semibold truncate text-LightWhite">
                  {song.title}
                </h3>
                <h2 className="text-[14px] font-medium text-gray-500">
                  {song.artist_name}
                </h2>
              </div>
            </div>
            <div className="absolute ml-24 mt-14 inset-0 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity duration-300 ">
              <Button
                className="bg-Bule p-3 w-14 h-12 rounded-full hover:bg-blue-600"
                onClick={() => handlePlay(song.id)}
              >
                <FaPlay className="text-LightWhite text-xl" />
              </Button>
            </div>
          </div>
        ))}
      </main>
    </section>
  );
};

export default SongHome;
