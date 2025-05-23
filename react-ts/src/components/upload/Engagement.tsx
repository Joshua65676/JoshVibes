import React, { useState } from "react";

const Engagement: React.FC = () => {
  const [selectedOptions, setSelectedOptions] = useState<string>("");

  const options = [
    "Skip Rate",
    "Total Plays",
    "Completion Rate",
    "Retention Rate",
  ];

  const handleSelect = (option: string) => {
    setSelectedOptions((prev) =>
      prev.includes(option)
        ? prev.filter((item) => item !== option)
        : [...prev, option]
    );
  };

  return (
    <>
      <main className="flex flex-col items-center gap-3 ">
        <label className="text-White font-semibold">Engagement Metrics</label>
        {/* Engagement Options */}
        <div className="flex flex-row gap-4">
          {options.map((option, index) => (
            <label
              key={index}
              className="flex items-center gap-2 cursor-pointer"
            >
              <input
                type="checkbox"
                value={option}
                checked={selectedOptions.includes(option)}
                onChange={() => handleSelect(option)}
                className="hidden"
              />
              <div
                className={`w-5 h-5 flex items-center justify-center border rounded transition-all ${
                  selectedOptions.includes(option)
                    ? "bg-green-600 text-black"
                    : " "
                }`}
              >
                {selectedOptions.includes(option) && "✔"}
              </div>
              <span>{option}</span>
            </label>
          ))}
        </div>
      </main>
    </>
  );
};

export default Engagement;
