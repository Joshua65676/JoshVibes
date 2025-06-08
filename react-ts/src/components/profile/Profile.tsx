import React, { useEffect, useState } from "react";
import ProfilePics from "./ProfilePics";
import { MdEdit } from "react-icons/md";

const Profiles: React.FC = () => {
  const userId = localStorage.getItem("user_id") || "";
  const [user, setUser] = useState<{ name: string; email: string; profile_picture?: string }>({
    name: "",
    email: "",
    profile_picture: "",
  });
  const [editing, setEditing] = useState<"name" | "email" | null>(null);
  const [input, setInput] = useState("");

  // Fetch user info
  useEffect(() => {
    fetch(`http://localhost/joshvibes/PHP_Backend/get_user.php?id=${userId}`)
      .then((res) => res.json())
      .then((data) => setUser({ name: data.name, email: data.email }));
  }, [userId]);

  // Handle save
  const handleSave = async () => {
    const field = editing;
    if (!field) return;
    const res = await fetch(
      "http://localhost/joshvibes/PHP_Backend/update_user.php",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id: userId, [field]: input }),
      }
    );
    const data = await res.json();
    if (data.success) {
      setUser((prev) => ({ ...prev, [field]: input }));
      setEditing(null);
    } else {
      alert(data.message || "Failed to update.");
    }
  };

  return (
    <div className="bg-gray-900 p-6 rounded-xl shadow-lg w-full max-w-md mx-auto">
      <ProfilePics />
      <div className="mt-6 space-y-4">
        {/* Name */}
        <div className="flex items-center gap-2">
          <span className="text-white font-semibold w-20">Name:</span>
          {editing === "name" ? (
            <>
              <input
                className="p-1 rounded bg-gray-800 text-white"
                value={input}
                title="name"
                onChange={(e) => setInput(e.target.value)}
              />
              <button className="text-blue-400 ml-2" onClick={handleSave}>
                Save
              </button>
              <button
                className="text-gray-400 ml-1"
                onClick={() => setEditing(null)}
              >
                Cancel
              </button>
            </>
          ) : (
            <>
              <span className="text-gray-200">{user.name}</span>
              <MdEdit
                className="ml-2 text-blue-400 cursor-pointer"
                onClick={() => {
                  setEditing("name");
                  setInput(user.name);
                }}
                title="Edit Name"
              />
            </>
          )}
        </div>
        {/* Email */}
        <div className="flex items-center gap-2">
          <span className="text-white font-semibold w-20">Email:</span>
          {editing === "email" ? (
            <>
              <input
                className="p-1 rounded bg-gray-800 text-white"
                value={input}
                title="email"
                onChange={(e) => setInput(e.target.value)}
              />
              <button className="text-blue-400 ml-2" onClick={handleSave}>
                Save
              </button>
              <button
                className="text-gray-400 ml-1"
                onClick={() => setEditing(null)}
              >
                Cancel
              </button>
            </>
          ) : (
            <>
              <span className="text-gray-200">{user.email}</span>
              <MdEdit
                className="ml-2 text-blue-400 cursor-pointer"
                onClick={() => {
                  setEditing("email");
                  setInput(user.email);
                }}
                title="Edit Email"
              />
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Profiles;
