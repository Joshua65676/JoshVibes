import React, { useState } from "react";

interface EngagementProps {
  value: string[];
  onChange: (value: string[]) => void;
}

const Engagement: React.FC<EngagementProps> = ({ value, onChange }) => {
  const [selectedOptions, setSelectedOptions] = useState<string[]>(value || []);

  const options = [
    "Skip Rate",
    "Total Plays",
    "Completion Rate",
    "Retention Rate",
  ];

  const handleSelect = (option: string) => {
    let updatedOptions;
    if (selectedOptions.includes(option)) {
      updatedOptions = selectedOptions.filter((item) => item !== option);
    } else {
      updatedOptions = [...selectedOptions, option];
    }
    setSelectedOptions(updatedOptions);
    onChange(updatedOptions); // <-- call onChange with the new array
  };

  return (
    <>
      <main className="flex flex-col items-center gap-3 ">
        <label className="text-White font-semibold">Engagement Metrics</label>
        {/* Engagement Options */}
        <div className="flex flex-row gap-4">
          {options.map((option) => (
            <label
              key={option}
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
