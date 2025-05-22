import React from "react";

const TitleDescription: React.FC = () => {
  return (
    <div>
      <div className="flex flex-row justify-between gap-4">
        {/* Song Title */}
        <div>
          <label className="text-White font-semibold">Song Title</label>
          <input
            type="text"
            placeholder="Enter Song Title"
            className="border p-2 rounded-md w-full"
          />
        </div>
        {/* Description */}
        <div className="mt-4">
          <label className="text-White font-semibold">Description</label>
          <textarea
            placeholder="Enter Description"
            className="border p-2 rounded-md w-full h-24"
          ></textarea>
        </div>
      </div>
    </div>
  );
};

export default TitleDescription;
