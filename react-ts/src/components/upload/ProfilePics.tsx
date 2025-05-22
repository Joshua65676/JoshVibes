import { useState } from "react";

const ProfilePics: React.FC = () => {
  const [image, setImage] = useState<string | null>(null);

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file && (file.type === "image/png" || file.type === "image/jpeg")) {
      setImage(URL.createObjectURL(file));
    } else {
      alert("Only PNG and JPEG images are allowed.");
    }
  };

  return (
    <div className="">
      <label className="text-White font-semibold">Upload Profile Picture</label>
      <div className="flex items-center gap-4">
        <input
          type="file"
          placeholder="Upload Profile Picture"
          accept="image/png, image/jpeg"
          onChange={handleImageUpload}
          className="border p-2 rounded-md"
        />
        {image && (
          <img
            src={image}
            alt="Profile"
            className="w-24 h-24 rounded-full object-cover"
          />
        )}
      </div>
    </div>
  );
};

export default ProfilePics;
