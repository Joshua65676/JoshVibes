import React from "react";
interface AudienceProps {
  value: string;
  onChange: (value: string) => void;
}

const audienceOptions = ["Public", "Private", "Friends", "Subscribers"];
const Audience: React.FC<AudienceProps> = ({ value, onChange }) => {

  return (
    <div className="flex flex-col items-center gap-3 w-[20rem]">
      <label className="text-White font-semibold">Target Audience</label>
      <select
        value={value}
        title="Target Audience"
        onChange={(e) => onChange(e.target.value)}
        className="border p-2 rounded-xl w-full"
      >
        <option value="">Choose an audience</option>
        {audienceOptions.map((category, index) => (
          <option key={index} value={index + 1} className="text-White bg-gray-600 font-semibold text-[14px]">
            {category}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Audience;
