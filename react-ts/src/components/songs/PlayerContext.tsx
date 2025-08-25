import { createContext, useContext, useState } from "react";

export interface Song {
  id: number;
  title: string;
  artist_name: string;
  audio: string;
  profile_pics: string;
}

const PlayerContext = createContext<any>(null);

export const usePlayer = () => useContext(PlayerContext);

export const PlayerProvider = ({ children }: { children: React.ReactNode }) => {
  const [songs, setSongs] = useState<Song[]>([]);
  const [currentIndex, setCurrentIndex] = useState<number | null>(null);
  const [shuffle, setShuffle] = useState(false);
  const [repeat, setRepeat] = useState(false);

  return (
    <PlayerContext.Provider
      value={{
        songs,
        setSongs,
        currentIndex,
        setCurrentIndex,
        shuffle,
        setShuffle,
        repeat,
        setRepeat,
      }}
    >
      {children}
    </PlayerContext.Provider>
  );
};
