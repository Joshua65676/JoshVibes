import { FaLongArrowAltRight, FaEye, FaEyeSlash } from "../assets";
import { useState } from "react";
import { Button } from "./ui/Button";

const ArtistForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState({
    password: "",
    confirmPassword: "",
  });

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
      <form className="flex flex-col gap-4">
        {/* Full Name */}
        <div className="flex flex-col gap-2">
          <label className="block text-left text-sm font-medium text-LightWhite">
            Full Name
          </label>
          <input
            type="text"
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
              Must contain at least 8 characters
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
          className="w-[20] bg-[#1403f1] hover:bg-blue-500"
        >
          <div className="flex flex-row justify-around gap-8">
            <span className="text-[#FFFFFF] text-[16px] font-semibold p-2">
              Sign Up as an Artist
            </span>
            <div className="bg-[#FFFFFF] rounded-full p-2">
              <FaLongArrowAltRight className="text-[#1403F1]" />
            </div>
          </div>
        </Button>
      </form>
    </div>
  );
};

export default ArtistForm;
