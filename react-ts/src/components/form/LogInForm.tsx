import React, { useState } from "react";
import { Button } from "../ui/Button";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };


  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setMessage("");
    try {
      const response = await fetch(
        "http://localhost/joshvibes/PHP_Backend/login.php",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        }
      );
      const data = await response.json();
      setIsLoading(false);
      setMessage(data.message);

      if (data.success) {
        setMessage("Login successful!");
        setTimeout(() => {
          if (data.userType === "listener") {
            navigate("/listenerHome");
          } else if (data.userType === "artist") {
            navigate("/artistHome");
          }
        }, 1000);
      }
    } catch (error) {
      setIsLoading(false);
      setMessage("An error occurred. Please try again.");
      console.error("Error:", error);
    }
  };

  return (
    <div className="max-w-sm mx-auto p-2">
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Email Field */}
        <div className="flex flex-col gap-2">
          <label className="block text-sm font-medium text-LightWhite text-left">
            Gmail
          </label>
          <input
            type="email"
            name="email"
            placeholder="Enter your Gmail"
            className="w-full px-4 py-2 border rounded-md focus:ring focus:ring-blue-300"
            onChange={handleChange}
            required
          />
        </div>

        {/* Password Field */}
        <div className="flex flex-col gap-2">
          <label className="block text-sm text-left font-medium text-LightWhite">
            Password
          </label>
          <input
            type="password"
            name="password"
            placeholder="Enter your password"
            className="w-full px-4 py-2 border rounded-md focus:ring focus:ring-blue-300"
            onChange={handleChange}
            required
          />
        </div>

        {/* Login Button */}
        <Button
          type="submit"
          className="w-full bg-Bule text-white py-2 rounded-md hover:bg-blue-500 transition"
          disabled={isLoading}
        >
          {isLoading ? "Logging in..." : "Login"}
        </Button>
        {message && (
          <div className="text-center text-sm mt-2 text-red-500">{message}</div>
        )}
      </form>
    </div>
  );
};

export default LoginForm;
