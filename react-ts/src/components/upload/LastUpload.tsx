import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { CreateButton } from "../../assets";
import UploadDots from "./UploadDots";

interface Upload {
  profile_pics: string;
  title: string;
}

const LastUpload: React.FC = () => {
  const [uploads, setUploads] = useState<Upload[]>([]);

  useEffect(() => {
    fetch("http://localhost/joshvibes/PHP_Backend/get_uploads.php")
      .then((res) => res.json())
      .then((data) => setUploads(data))
      .catch((err) => console.error("Failed to fetch uploads:", err));
  }, []);

  return (
    <section className="container max-w-7xl mx-auto w-full -ml-7">
      <main>
        <div className="flex flex-row justify-between">
          <h1 className="text-White font-semibold">Last Upload</h1>
          <div className="-mr-4">
            <Link to="/create">
              <button>
                <img
                  src={CreateButton}
                  alt="Create Button"
                  className="w-10 h-10 -mt-4"
                />
              </button>
            </Link>
          </div>
        </div>
        <main>
          <div className="flex flex-col gap-4 mt-4">
            {uploads.map((upload, idx) => (
              <div
                key={idx}
                className="bg-gray-800 rounded-lg p-2 flex flex-row justify-between"
              >
                <div className="flex flex-row gap-5 p-2">
                  <img
                    src={`http://localhost/joshvibes/PHP_Backend/${upload.profile_pics}`}
                    alt={upload.title}
                    className="w-20 h-20 object-cover rounded"
                  />
                  <span className="text-white text-center mt-5 font-semibold text-lg justify-center flex">
                    {upload.title}.MP3
                  </span>
                </div>
                <div className="flex items-center justify-center">
                  <UploadDots />
                </div>
              </div>
            ))}
          </div>
        </main>
      </main>
    </section>
  );
};

export default LastUpload;
