import { Button } from "./ui/Button";
import Audience from "./upload/Audience";
import AudioUpload from "./upload/AudioUpload";
import Engagement from "./upload/Engagement";
import Evaluation from "./upload/Evaluation";
import ProfilePics from "./upload/ProfilePics";
import TitleDescription from "./upload/TitleDescription";
import { useNavigate } from "react-router-dom";
import { FaArrowLeft, createPic } from "../assets";

const Create: React.FC = () => {
  const navigate = useNavigate();

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
        <main className="flex flex-col gap-7 justify-center items-center">
          {/* Profile Picture and Audio Upload */}
          <div className="flex flex-row justify-between gap-4">
            <ProfilePics />
            <AudioUpload />
          </div>
          {/* Song Title and Description */}
          <div className="flex flex-row justify-between gap-4">
            <TitleDescription />
          </div>
          {/* Evaluation and Audience */}
          <div className="flex flex-row justify-between gap-4">
            <Evaluation />
            <Audience />
          </div>
          <Engagement />
          <div>
            <Button className="w-[24rem] mt-5 bg-Bule hover:bg-blue-500">
              <span className="text-White font-bold text-xl">Created</span>
            </Button>
          </div>
        </main>
      </main>
    </section>
  );
};

export default Create;
