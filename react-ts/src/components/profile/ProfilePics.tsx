import React, { useState } from "react";
import { IoCloudUploadOutline } from "react-icons/io5";
import { MdEdit } from "react-icons/md";

const ProfilePics: React.FC = () => {
  const [image, setImage] = useState<string | null>(null);

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file && (file.type === "image/png" || file.type === "image/jpeg")) {
      setImage(URL.createObjectURL(file));
    } else {
      alert("Only PNG and JPEG images are allowed.");
      setImage(null);
    }
  };

  return (
    <div className="flex flex-col gap-4">
      <div className="h-30 w-[20rem]">
        <div className="flex flex-col items-center gap-2 p-2">
          {/* Upload Button */}
          <label className="cursor-pointer flex flex-col items-center border text-white p-4 rounded-full w-30 h-30 justify-center">
            <IoCloudUploadOutline className="w-8 h-8" />
            <span className="text-sm">Upload</span>
            <input
              type="file"
              accept="image/png, image/jpeg"
              onChange={handleImageUpload}
              className="hidden"
            />
          </label>

          {/* Preview Image */}
          <div>
            {image && (
              <img
                src={image}
                alt="Profile"
                className="w-35 h-35 rounded-full object-cover relative -top-35 border-4 border-Bule"
              />
            )}
            <div className="bg-Bule w-10 h-10 rounded-full relative p-2 -top-45 left-21">
              <MdEdit className="w-6 h-6 text-White cursor-pointer" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePics;
