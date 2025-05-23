import Audience from "./upload/Audience";
import AudioUpload from "./upload/AudioUpload";
import Engagement from "./upload/Engagement";
import Evaluation from "./upload/Evaluation";
import ProfilePics from "./upload/ProfilePics";
import TitleDescription from "./upload/TitleDescription";

const Create: React.FC = () => {

  return (
    <section className="container max-w-7xl mx-auto w-full">
      <main className="flex flex-col">
        <div className="flex flex-row justify-between">
          <h1 className="text-White font-semibold">Add Song</h1>
        </div>
        <main className="flex flex-col gap-10 justify-center items-center">
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
            <Evaluation  />
            <Audience />
          </div>
            <Engagement />
        </main>
      </main>
    </section>
  );
};

export default Create;
