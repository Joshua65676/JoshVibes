import { FaLongArrowAltRight, FaEye, FaEyeSlash } from "../../assets/index";
import { useState } from "react";
import { Button } from "../ui/Button";
import { useNavigate } from "react-router-dom";

const ArtistForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [message, setMessage] = useState("");
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [errors, setErrors] = useState({
    password: "",
    confirmPassword: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const response = await fetch(
        "http://localhost/joshvibes/PHP_Backend/signup.php",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ ...formData, userType: "artist" }),
        }
      );

      const data = await response.text();
      setMessage(data);
      setIsLoading(false);
      if (data.includes("Signup successful")) {
        setTimeout(() => {
          navigate("/artistHome");
        }, 2000);
      }
    } catch (error) {
      setMessage("An error occurred. Please try again.");
      setIsLoading(false);
      console.error("Error:", error);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });

    // Validation logic
    if (e.target.name === "password") {
      if (e.target.value.length < 5) {
        setErrors((prev) => ({
          ...prev,
          password: "Password must be at least 5 characters long.",
        }));
      } else {
        setErrors((prev) => ({ ...prev, password: "" }));
      }
    }

    if (e.target.name === "confirmPassword") {
      if (e.target.value !== formData.password) {
        setErrors((prev) => ({
          ...prev,
          confirmPassword: "Passwords do not match.",
        }));
      } else {
        setErrors((prev) => ({ ...prev, confirmPassword: "" }));
      }
    }
  };

  return (
    <div className="">
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        {/* Full Name */}
        <div className="flex flex-col gap-2">
          <label className="block text-left text-sm font-medium text-LightWhite">
            Full Name
          </label>
          <input
            type="text"
            name="name"
            placeholder="Enter full name"
            className="w-full px-4 py-2 border rounded-md focus:ring focus:ring-blue-300"
            required
            onChange={handleChange}
          />
        </div>

        {/* Email */}
        <div className="flex flex-col gap-2">
          <label className="block text-left text-sm font-medium text-LightWhite">
            Email
          </label>
          <input
            type="email"
            name="email"
            placeholder="Enter email"
            className="w-full px-4 py-2 border rounded-md focus:ring focus:ring-blue-300"
            required
            onChange={handleChange}
          />
        </div>

        {/* Password */}
        <div className="flex flex-col gap-2">
          <label className="block text-left text-sm font-medium text-LightWhite">
            Password
          </label>
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              placeholder="Enter password"
              className="w-full px-4 py-2 border rounded-md focus:ring focus:ring-blue-300"
              required
              onChange={handleChange}
            />
            <button
              type="button"
              className="absolute right-3 top-1 text-gray-500"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <FaEye /> : <FaEyeSlash />}
            </button>
            <span className="text-left block text-sm font-medium text-GrayText">
              Must contain at least 5 characters
            </span>
            {errors.password && (
              <p className="text-red-500 text-sm mt-1">{errors.password}</p>
            )}
          </div>
        </div>

        {/* Confirm Password */}
        <div className="flex flex-col gap-2">
          <label className="block text-left text-sm font-medium text-LightWhite">
            Confirm Password
          </label>
          <div className="relative">
            <input
              type={showConfirmPassword ? "text" : "password"}
              placeholder="Confirm password"
              name="confirmPassword"
              className="w-full px-4 py-2 border rounded-md focus:ring focus:ring-blue-300"
              required
              onChange={handleChange}
            />
            <button
              type="button"
              className="absolute right-3 top-1 text-gray-500"
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
            >
              {showConfirmPassword ? <FaEye /> : <FaEyeSlash />}
            </button>
            {errors.confirmPassword && (
              <p className="text-red-500 text-sm mt-1">
                {errors.confirmPassword}
              </p>
            )}
          </div>
        </div>

        {/* Submit Button */}
        <Button
          type="submit"
          disabled={isLoading}
          className="w-[20] bg-[#1403f1] hover:bg-blue-500"
        >
          {isLoading ? (
            <p className="text-blue-500 text-center">Signing up...</p>
          ) : (
            <div className="flex flex-row justify-around gap-8">
              <span className="text-[#FFFFFF] text-[16px] font-semibold p-2">
                Sign Up as an Artist
              </span>
              <div className="bg-[#FFFFFF] rounded-full p-2">
                <FaLongArrowAltRight className="text-[#1403F1]" />
              </div>
            </div>
          )}
        </Button>
        {message && (
          <p
            className={`text-center ${
              message.includes("successful") ? "text-green-500" : "text-red-500"
            }`}
          >
            {message}
          </p>
        )}
      </form>
    </div>
  );
};

export default ArtistForm;
