import { useState } from "react";
import { IoCloudUploadOutline } from "react-icons/io5";

interface ProfilePicsProps {
  onChanges: (file: File | null) => void;
}
const ProfilePics: React.FC<ProfilePicsProps> = ({ onChanges }) => {
  const [image, setImage] = useState<string | null>(null);

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file && (file.type === "image/png" || file.type === "image/jpeg")) {
      setImage(URL.createObjectURL(file));
      onChanges(file);
    } else {
      alert("Only PNG and JPEG images are allowed.");
      onChanges(null);
    }
  };

  return (
    <div className="flex flex-col gap-4">
      <span className="text-White font-semibold">Track Cover</span>
      <div className="border h-30 rounded-xl w-[20rem]">
        <div className="flex flex-col items-center gap-2 p-2">
          {/* Upload Button */}
          <label className="cursor-pointer flex flex-col items-center border text-white p-4 rounded-full w-18 h-18 justify-center">
            <IoCloudUploadOutline className="w-8 h-8" />
            <span className="text-sm">Upload</span>
            <input
              type="file"
              accept="image/png, image/jpeg"
              onChange={handleImageUpload}
              className="hidden"
            />
          </label>

          {/* Supported Formats */}
          <p className="text-gray-500 text-sm font-semibold">
            Support: JPEG, PNG
          </p>

          {/* Preview Image */}
          {image && (
            <img
              src={image}
              alt="Profile"
              className="w-20 h-20 rounded-full object-cover relative -top-28"
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default ProfilePics;
