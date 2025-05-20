import React, { useState, useEffect, useRef } from "react";
import { Button } from "./ui/Button";
import { useLocation, useNavigate } from "react-router-dom";

const VerificationForm = () => {
  const [code, setCode] = useState(Array(6).fill(""));
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);
  const [message, setMessage] = useState("");
  const [timeLeft, setTimeLeft] = useState(30); // Countdown timer (in seconds)
  const [resending, setResending] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const { email, userType } = location.state;
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (timeLeft > 0) {
      const timer = setInterval(() => setTimeLeft(timeLeft - 1), 1000);
      return () => clearInterval(timer);
    }
  }, [timeLeft]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    const newCode = [...code];
    newCode[index] = e.target.value;
    setCode(newCode);
    // Move to next input if user enters a digit
    if (e.target.value && index < 5) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const response = await fetch(
      "http://localhost/joshvibes/PHP_Backend/verifyCode.php",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, code: code.join("") }),
      }
    );

    const data = await response.json();
    setLoading(false);

    if (data.success) {
      if (userType === "artist") {
        navigate("/ArtistsHome");
      } else {
        navigate("/ListenerHome");
      }
    } else {
      setMessage(data.message);
    }
  };

  const handleResendCode = async () => {
    setResending(true);
    const response = await fetch(
      "http://localhost/joshvibes/PHP_Backend/resendCode.php",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      }
    );

    const data = await response.json();
    setResending(false);
    setMessage(data.message);
    setTimeLeft(30); // Reset the timer
  };

  return (
    <div className="max-w-sm mx-auto p-6 text-center">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="flex justify-center gap-2">
          {code.map((digit, index) => (
            <input
              key={index}
              id={`input-${index}`}
              value={digit}
              placeholder="0"
              type="text"
              ref={el => (inputRefs.current[index] = el)}
              maxLength={1}
              onChange={(e) => handleChange(e, index)}
              className="w-12 h-12 text-center border rounded-md focus:ring focus:ring-blue-300 text-lg"
            />
          ))}
        </div>
        {/* Error Message */}
        {/* {errors && <p className="text-red-500 text-sm mt-2">{errors}</p>} */}
        {/* Success Message */}
        {message && <p className="text-green-500 text-sm mt-2">{message}</p>}

        {/* Resend Code Timer */}
        <p className="text-gray-600 text-sm mt-2">
          {timeLeft === 0 ? (
            <button
              type="button"
              onClick={handleResendCode}
              className="text-blue-500 hover:underline"
              disabled={resending}
            >
              {resending ? "Resending..." : "Resend Code"}
            </button>
          ) : (
            `Resend code in ${timeLeft} seconds`
          )}
        </p>

        <Button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition"
          disabled={loading}
        >
          {loading ? "Loading..." : "Verify Code"}
        </Button>
      </form>
    </div>
  );
};

export default VerificationForm;
