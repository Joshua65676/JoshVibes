import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import { FaPlay } from "react-icons/fa";
import { Button } from "../ui/Button";

interface Song {
  id: number;
  title: string;
  audio: string;
  artist_name: string;
  profile_pics: string;
}

const SongHome: React.FC = () => {
  const [songs, setSongs] = useState<Song[]>([]);
  // Store refs for each audio element by song id
  const audioRefs = useRef<{ [key: number]: HTMLAudioElement | null }>({});

  useEffect(() => {
    axios
      .get("http://localhost/joshvibes/PHP_Backend/get_allsong.php")
      .then((res) => {
        setSongs(res.data);
      })
      .catch((err) => console.error("Error fetching songs", err));
  }, []);

  const handlePlay = (id: number) => {
    // Pause all other audios
    Object.values(audioRefs.current).forEach((audio) => {
      if (audio && !audio.paused) audio.pause();
    });
    // Play the selected audio
    const audio = audioRefs.current[id];
    if (audio) {
      audio.currentTime = 0;
      audio.play();
    }
  };

  return (
    <section className="overflow-x-auto">
      <main className="flex gap-8 flex-row">
        {songs.slice(0, 5).map((song) => (
          <main
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
              <audio
                ref={(el) => (audioRefs.current[song.id] = el)}
                src={`http://localhost/joshvibes/PHP_Backend/${song.audio}`}
                className="w-full"
              />
            </div>
          </main>
        ))}
      </main>
    </section>
  );
};

export default SongHome;
