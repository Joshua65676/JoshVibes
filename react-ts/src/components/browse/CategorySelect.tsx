import React from "react";

interface CategorySelectProps {
  value: string;
  onChange: (value: string) => void;
}

const categories = [
  "Afro",
  "Christen & Gospel",
  "R&B",
  "Pop",
  "Hip-Hop",
  "Jazz",
  "Rock",
  "Electronic",
];

const CategorySelect: React.FC<CategorySelectProps> = ({ value, onChange }) => {
  return (
    <div className="flex flex-col items-center gap-3 w-[20rem]">
      <label className="text-White font-semibold">Select Category</label>
      <select
        value={value}
        title="Select Category"
        onChange={(e) => onChange(e.target.value)}
        className="border p-2 rounded-xl w-full"
      >
        <option value="">Choose a category</option>
        {categories.map((category, index) => (
          <option key={index} value={index + 1} className="text-White bg-gray-600 font-semibold text-[14px]">
            {category}
          </option>
        ))}
      </select>
    </div>
  );
};

export default CategorySelect;
