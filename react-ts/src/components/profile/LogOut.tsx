import React from "react";

const LogOut: React.FC = () => {
  const handleLogout = () => {
    // Remove user_id from localStorage
    localStorage.removeItem("user_id");
    // Optionally, clear other user data
    // Redirect to login page
    window.location.href = "/login"; // Change to your login route
  };

  return (
    <div>
      <button
        onClick={handleLogout}
        className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 transition"
      >
        Log Out
      </button>
    </div>
  );
};

export default LogOut;
