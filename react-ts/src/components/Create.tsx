import { Button } from "./ui/Button";
import Audience from "./upload/Audience";
import AudioUpload from "./upload/AudioUpload";
import Engagement from "./upload/Engagement";
import ProfilePics from "./upload/ProfilePics";
import TitleDescription from "./upload/TitleDescription";
import CategorySelect from "./browse/CategorySelect";
import { useNavigate } from "react-router-dom";
import { FaArrowLeft, createPic } from "../assets";
import { useState } from "react";
import axios from "axios";

const Create: React.FC = () => {
  const [title, setTitle] = useState("");
  const [profilePic, setProfilePic] = useState<File | null>(null);
  const [audio, setAudio] = useState<File | null>(null);
  const [category, setCategory] = useState("");
  const [audience, setAudience] = useState("");
  const [engagement, setEngagement] = useState<string[]>([]);
  const [description, setDescription] = useState("");
  const userId = localStorage.getItem("user_id") || "";
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    setLoading(true);
    e.preventDefault();
    const formData = new FormData();
    formData.append("title", title);
    formData.append("description", description);
    if (profilePic) formData.append("profile_pics", profilePic);
    if (audio) formData.append("audio", audio);
    formData.append("category_id", category);
    formData.append("user_id", userId);
    formData.append("audience", audience);
    formData.append("engagement", JSON.stringify(engagement));

    try {
      const response = await axios.post(
        "http://localhost/joshvibes/PHP_Backend/add_songs.php",
        formData,
        {
          headers: { "Content-Type": "multipart/form-data" },
        }
      );

      if (response.data && response.data.success) {
        alert(response.data.message || "Song uploaded successfully!");
        navigate("/artistHome");
      } else {
        alert(response.data.message || "Upload failed. Please try again.");
      }
    } catch (error) {
      console.error("Error uploading song:", error);
      alert("Upload failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="container max-w-7xl mx-auto w-full">
      <button
        type="button"
        onClick={() => navigate(-1)}
        className="flex items-start justify-start relative right-25 -top-3"
      >
        <FaArrowLeft className="w-5 h-5" />
        <span className="text-White text-[16px] font-semibold pl-1 -top-1 relative -mb-3">
          Back
        </span>
      </button>
      <main className="flex flex-row justify-between">
        <div className="flex flex-col gap-7 p-2">
          <div>
            <h1 className="text-White font-semibold text-start">Add Song</h1>
          </div>
          <div>
            <img
              src={createPic}
              alt="Create"
              className="w-[30rem] h-[33rem] rounded-xl"
            />
          </div>
        </div>
        {/* Main Form Area */}
        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-7 justify-center items-center"
        >
          {/* Profile Picture and Audio Upload */}
          <div className="flex flex-row justify-between gap-4">
            <ProfilePics onChanges={setProfilePic} />
            <AudioUpload onChange={setAudio} />
          </div>
          {/* Song Title and Description */}
          <div className="flex flex-row justify-between gap-4">
            <TitleDescription
              title={title}
              description={description}
              onTitleChange={setTitle}
              onDescriptionChange={setDescription}
            />
          </div>
          {/* Category and Audience */}
          <div className="flex flex-row justify-between gap-4">
            <Audience value={audience} onChange={setAudience} />
            <CategorySelect value={category} onChange={setCategory} />
          </div>
          <Engagement value={engagement} onChange={setEngagement} />
          <div>
            <Button
              type="submit"
              className="w-[24rem] mt-5 bg-Bule hover:bg-blue-500 text-White font-bold text-xl"
            >
              {loading ? "Uploadig...." : "Upload"}
            </Button>
          </div>
        </form>
      </main>
    </section>
  );
};

export default Create;
