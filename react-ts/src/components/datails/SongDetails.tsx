import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const SongDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [song, setSong] = useState<any>(null);

  useEffect(() => {
    if (id) {
      fetch(`http://localhost/joshvibes/PHP_Backend/get_song.php?id=${id}`)
        .then((res) => res.json())
        .then((data) => setSong(data))
        .catch((err) => console.error("Failed to fetch song details:", err));
    }
  }, [id]);
  if (!song) return <div>Loading...</div>;

  return (
    <section>
      <main>
        <div>
          <h2>{song.title}</h2>
          <img
            src={`http://localhost/joshvibes/PHP_Backend/${song.profile_pics}`}
            alt={song.title}
          />
          <p>{song.description}</p>
          {/* Add more song details as needed */}
        </div>
      </main>
    </section>
  );
};

export default SongDetails;
