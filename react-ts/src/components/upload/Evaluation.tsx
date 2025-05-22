import { useState } from "react";
import { IoChevronDown } from "../../assets";

const Evaluation: React.FC = () => {
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [isOpen, setIsOpen] = useState(false);

  const options = ["Option 1", "Option 2", "Option 3", "Option 4"];

  const handleSelect = (option: string) => {
    setSelectedOption(option);
    setIsOpen(false); // Close dropdown after selection
  };

  return (
    <div className="flex flex-col items-center gap-4 w-64">
      {/* Select Input */}
      <div className="relative w-full">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="w-full flex items-center justify-between border p-2 rounded-md bg-white"
        >
          <span>{selectedOption || "Select here"}</span>
          <IoChevronDown className="text-gray-600" />
        </button>

        {/* Dropdown List */}
        {isOpen && (
          <ul className="absolute left-0 top-full mt-1 w-full bg-white border rounded-md shadow-lg">
            {options.map((option, index) => (
              <li
                key={index}
                className="p-2 hover:bg-gray-200 cursor-pointer"
                onClick={() => handleSelect(option)}
              >
                {option}
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* Selected Value Display */}
      {selectedOption && <div className="text-gray-600">{selectedOption}</div>}
    </div>
  );
};

export default Evaluation;
