import React, { useState } from "react";
import { Button } from "./ui/Button";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Logging in with Email: ${email}`);
  };

  return (
    <div className="max-w-sm mx-auto p-2">
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Email Field */}
        <div className="flex flex-col gap-2">
          <label className="block text-sm font-medium text-LightWhite text-left">Gmail</label>
          <input
            type="email"
            name="email"
            placeholder="Enter your Gmail"
            className="w-full px-4 py-2 border rounded-md focus:ring focus:ring-blue-300"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        {/* Password Field */}
        <div className="flex flex-col gap-2">
          <label className="block text-sm text-left font-medium text-LightWhite">Password</label>
          <input
            type="password"
            name="password"
            placeholder="Enter your password"
            className="w-full px-4 py-2 border rounded-md focus:ring focus:ring-blue-300"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        {/* Login Button */}
        <Button
          type="submit"
          className="w-full bg-Bule text-white py-2 rounded-md hover:bg-blue-500 transition"
        >
          Login
        </Button>
      </form>
    </div>
  );
};

export default LoginForm;