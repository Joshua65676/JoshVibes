import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

interface Song {
  song_id: number;
  title: string;
  audio: string;
}

const CategorySongsPage = () => {
  const { id } = useParams();
  const [songs, setSongs] = useState<Song[]>([]);

  useEffect(() => {
    axios.get(`http://localhost/joshvibes/PHP_Backend/get_songs_by_category.php?id=${id}`)
      .then(res => setSongs(res.data))
      .catch(err => console.error("Error loading songs", err));
  }, [id]);

  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-bold">Songs in Category</h1>
      {songs.length === 0 && <p>No songs in this category.</p>}
      <ul className="grid grid-cols-2 gap-4">
        {songs.map(song => (
          <li key={song.song_id} className="border p-2 rounded-md">
            <p>{song.title}</p>
            <audio controls src={`http://localhost/joshvibes/PHP_Backend/${song.audio}`} className="w-full mt-2" />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CategorySongsPage;