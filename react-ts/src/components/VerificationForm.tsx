import React, { useState, useEffect } from "react";
import { Button } from "./ui/Button";

const VerificationForm = () => {
  const [code, setCode] = useState(Array(6).fill(""));
  const [errors, setErrors] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [timeLeft, setTimeLeft] = useState(30); // Countdown timer (in seconds)
  const [canResend, setCanResend] = useState(false);

  useEffect(() => {
    if (timeLeft > 0) {
      const timer = setInterval(() => setTimeLeft(timeLeft - 1), 1000);
      return () => clearInterval(timer);
    } else {
      setCanResend(true);
    }
  }, [timeLeft]);

  const handleChange = (index: number, value: string) => {
    if (!/^[0-9]$/.test(value) && value !== "") return;
    const newCode = [...code];
    newCode[index] = value;
    setCode(newCode);
    setErrors("");
    if (value !== "" && index < 5) {
      document.getElementById(`input-${index + 1}`)?.focus();
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (code.join("").length < 6) {
      setErrors("Please enter all 6 digits.");
      return;
    }
    // Simulated correct code (e.g., "123456")
    if (code.join("") === "123456") {
      setSuccessMessage("Verification successful! ✅");
      setErrors("");
    } else {
      setErrors("Invalid code. Please try again.");
      setSuccessMessage("");
    }
  };

  const handleResend = () => {
    setCode(Array(6).fill(""));
    setTimeLeft(30);
    setCanResend(false);
    setErrors("");
    setSuccessMessage("");
  };

  return (
    <div className="max-w-sm mx-auto p-6 text-center">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="flex justify-center gap-2">
          {code.map((digit, index) => (
            <input
              key={index}
              placeholder="0"
              id={`input-${index}`}
              type="text"
              maxLength={1}
              value={digit}
              onChange={(e) => handleChange(index, e.target.value)}
              className="w-12 h-12 text-center border rounded-md focus:ring focus:ring-blue-300 text-lg"
            />
          ))}
        </div>
        {/* Error Message */}
        {errors && <p className="text-red-500 text-sm mt-2">{errors}</p>}
        {/* Success Message */}
        {successMessage && (
          <p className="text-green-500 text-sm mt-2">{successMessage}</p>
        )}

        {/* Resend Code Timer */}
        <p className="text-gray-600 text-sm mt-2">
          {canResend ? (
            <button
              onClick={handleResend}
              className="text-blue-500 hover:underline"
            >
              Resend Code
            </button>
          ) : (
            `Resend code in ${timeLeft} seconds`
          )}
        </p>

        <Button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition"
        >
          Verify Code
        </Button>
      </form>
    </div>
  );
};

export default VerificationForm;
