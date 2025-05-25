import { useState } from "react";
import { IoChevronDown } from "../../assets";

const Evaluation: React.FC = () => {
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [isOpen, setIsOpen] = useState(false);

  const options = ["Option 1", "Option 2", "Option 3", "Option 4", "null"];

  const handleSelect = (option: string) => {
    setSelectedOption(option);
    setIsOpen(false); // Close dropdown after selection
  };

  return (
    <section className="flex flex-col items-center gap-3 w-[20rem]">
      <label className="text-White font-semibold">How many evaluations?</label>
      {/* Select Input */}
      <main className="flex flex-col w-full">
        <div className="relative w-full border rounded-xl">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="w-full flex items-center justify-between border p-2 rounded-md"
          >
            <span>{selectedOption || "Select here"}</span>
            <IoChevronDown className="text-gray-600" />
          </button>

          {/* Dropdown List */}
          {isOpen && (
            <ul className="absolute left-0 top-full mt-1 w-full bg-black border rounded-md shadow-lg">
              {options.map((option, index) => (
                <li
                  key={index}
                  className="p-2 hover:bg-gray-600 cursor-pointer"
                  onClick={() => handleSelect(option)}
                >
                  {option}
                </li>
              ))}
            </ul>
          )}
        </div>
        {/* Selected Value Display */}
        {selectedOption && (
          <div className="text-gray-600 text-start relative top-1 left-3 font-bold text-[16px] -mb-3">{selectedOption}</div>
        )}
      </main>
    </section>
  );
};

export default Evaluation;
