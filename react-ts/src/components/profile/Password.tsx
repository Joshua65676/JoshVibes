import React, { useState } from "react";
import { FaEye, FaEyeSlash } from "../../assets/index";
import { Button } from "../ui/Button";

const Password: React.FC = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  return (
    <section className="flex flex-col gap-5">
      <main className="flex flex-col gap-3">
        {/* Password */}
        <div className="flex flex-col gap-2">
          <label className="block text-left text-sm font-medium text-LightWhite">
            Password
          </label>
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              placeholder="Enter your password"
              required
              className="w-full px-4 py-2 border rounded-md focus:ring focus:ring-blue-300"
            />
            <button
              type="button"
              className="absolute right-0 top-1 text-gray-500"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <FaEye /> : <FaEyeSlash />}
            </button>
          </div>
        </div>
        {/* New Password */}
        <div className="flex flex-col gap-2">
          <label className="block text-left text-sm font-medium text-LightWhite">
            New Password
          </label>
          <div className="relative">
            <input
              type={showNewPassword ? "text" : "new password"}
              name="new password"
              placeholder="Enter New password"
              required
              className="w-full px-4 py-2 border rounded-md focus:ring focus:ring-blue-300"
            />
            <button
              type="button"
              className="absolute right-0 top-1 text-gray-500"
              onClick={() => setShowNewPassword(!showNewPassword)}
            >
              {showNewPassword ? <FaEye /> : <FaEyeSlash />}
            </button>
          </div>
        </div>
        {/* Re-enter Password */}
        <div className="flex flex-col gap-2">
          <label className="block text-left text-sm font-medium text-LightWhite">
            Confirm Password
          </label>
          <div className="relative">
            <input
              type={showConfirmPassword ? "text" : "confirm password"}
              name="confirm password"
              placeholder="Re-enter password"
              required
              className="w-full px-4 py-2 border rounded-md focus:ring focus:ring-blue-300"
            />
            <button
              type="button"
              className="absolute right-0 top-1 text-gray-500"
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
            >
              {showConfirmPassword ? <FaEye /> : <FaEyeSlash />}
            </button>
          </div>
        </div>
      </main>
      <Button className="w-full bg-Bule hover:bg-blue-500" type="submit">
        <span className="text-lg font-semibold text-LightWhite">
          Update Password
        </span>
      </Button>
    </section>
  );
};

export default Password;
