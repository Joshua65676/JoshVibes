import React from "react";
interface TitleDescriptionProps {
  title: string;
  description: string;
  onTitleChange: (value: string) => void;
  onDescriptionChange: (value: string) => void;
}

const TitleDescription: React.FC<TitleDescriptionProps> = ({
  title,
  description,
  onTitleChange,
  onDescriptionChange,
}) => {
  return (
    <div>
      <div className="flex flex-row justify-between gap-4">
        {/* Song Title */}
        <div className="w-[20rem] flex flex-col gap-3">
          <label className="text-White font-semibold">Song Title</label>
          <input
            type="text"
            placeholder="Enter Song Title"
            value={title}
            onChange={(e) => onTitleChange(e.target.value)}
            required
            className="border p-2 rounded-md w-full"
          />
        </div>
        {/* Description */}
        <div className="w-[20rem] flex flex-col gap-3">
          <label className="text-White font-semibold">Description</label>
          <textarea
            placeholder="Enter Description"
            value={description}
            onChange={(e) => onDescriptionChange(e.target.value)}
            required
            className="border p-2 rounded-md w-full h-20"
          ></textarea>
        </div>
      </div>
    </div>
  );
};

export default TitleDescription;
