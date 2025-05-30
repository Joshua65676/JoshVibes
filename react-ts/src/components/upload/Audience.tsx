import { useState } from "react";
import { IoChevronDown } from "../../assets";

interface AudienceProps {
  value: string;
  onChange: (value: string) => void;
}

const Audience: React.FC<AudienceProps> = ({ value, onChange }) => {
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [isOpen, setIsOpen] = useState(false);

  const audienceOptions = ["Public", "Private", "Friends", "Subscribers"];

  const handleSelect = (option: string) => {
    setSelectedOption(option);
    setIsOpen(false);
    onChange(option);
  };
  return (
    <section className="flex flex-col items-center gap-3 w-[20rem]">
      <label className="text-White font-semibold">Target Audience</label>
      {/* Select Input */}
      <main className="flex flex-col w-full">
        <div className="relative w-full border rounded-xl">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="w-full flex items-center justify-between border p-2 rounded-md"
          >
            <span>{value || "Select here"}</span>
            <IoChevronDown className="text-gray-600" />
          </button>

          {/* Dropdown List */}
          {isOpen && (
            <ul className="absolute left-0 top-full mt-1 w-full bg-black border rounded-md shadow-lg">
              {audienceOptions.map((option) => (
                <li
                  key={option}
                  className={`p-2 cursor-pointer ${
                    value === option ? "hover:bg-gray-600" : ""
                  }`}
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
          <div className="text-gray-600 text-start relative top-1 left-3 font-bold text-[16px] -mb-3">
            {selectedOption}
          </div>
        )}
      </main>
    </section>
  );
};

export default Audience;
