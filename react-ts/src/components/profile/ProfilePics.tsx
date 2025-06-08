import React, { useState, useRef, useEffect } from "react";
import { IoCloudUploadOutline } from "react-icons/io5";
import { MdEdit } from "react-icons/md";

const ProfilePics: React.FC = () => {
  const userId = localStorage.getItem("user_id") || "";
  const [image, setImage] = useState<string | null>(null);
  const [uploading, setUploading] = useState(false);
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    const userId = localStorage.getItem("user_id") || "";
    fetch(`http://localhost/joshvibes/PHP_Backend/get_user.php?id=${userId}`)
      .then((res) => res.json())
      .then((data) => {
        if (data.profile_picture) {
          setImage(
            `http://localhost/joshvibes/PHP_Backend/${data.profile_picture}`
          );
        }
      });
  }, []);

  // Trigger file input when edit icon is clicked
  const handleEditClick = () => {
    fileInputRef.current?.click();
  };

  const handleImageUpload = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file = event.target.files?.[0];
    if (file && (file.type === "image/png" || file.type === "image/jpeg")) {
      setImage(URL.createObjectURL(file));
      setUploading(true);

      const formData = new FormData();
      formData.append("profile_pic", file);
      formData.append("user_id", userId);

      try {
        const response = await fetch(
          "http://localhost/joshvibes/PHP_Backend/upload_profile_pic.php",
          {
            method: "POST",
            body: formData,
          }
        );
        const data = await response.json();
        if (data.success && data.filePath) {
          alert("Profile picture updated!");
          setImage(`http://localhost/joshvibes/PHP_Backend/${data.filePath}`);
        } else {
          alert(data.message || "Failed to upload image.");
        }
      } catch {
        alert("Error uploading image.");
      } finally {
        setUploading(false);
      }
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
            <span className="text-sm">
              {uploading ? "Uploading..." : "Upload"}
            </span>
            <input
              type="file"
              accept="image/png, image/jpeg"
              onChange={handleImageUpload}
              ref={fileInputRef}
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
            <>
              {image && (
                <div
                  title="Edit profile picture"
                  onClick={handleEditClick}
                  className="bg-Bule w-10 h-10 rounded-full relative p-2 -top-45 left-21"
                >
                  <MdEdit className="w-6 h-6 text-White cursor-pointer" />
                </div>
              )}
            </>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePics;
