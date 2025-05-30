import { useState } from "react";

interface AudioUploadProps {
  onChange: (file: File | null) => void;
}

const AudioUpload: React.FC<AudioUploadProps> = ({ onChange }) => {
  const [audioFileName, setAudioFileName] = useState<string | null>(null);

  const handleAudioUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file && file.type.startsWith("audio/")) {
      setAudioFileName(file.name);
      onChange(file);
    } else {
      alert("Please upload a valid audio file.");
      onChange(null);
    }
  };

  return (
    <div className="flex flex-col gap-3">
      <span className="text-White font-semibold">Upload Audio File</span>
      <div className="flex flex-row items-center gap-4 border justify-center rounded-xl w-[20rem]">
        <label className="cursor-pointer items-center text-white p-4 rounded-xl justify-center">
          <span className="text-sm text-Bule">Choose File</span>
          <hr className="border-2 mt-1 text-Bule w-20 -ml-0.5 rounded-b-xl"/>
          <input
            type="file"
            accept="audio/*"
            onChange={handleAudioUpload}
            className="hidden"
          />
        </label>
        <span>|</span>
        <span className="text-gray-500 text-[14px] font-semibold">
          {audioFileName ? audioFileName : "No file chosen"}
        </span>
      </div>
    </div>
  );
};

export default AudioUpload;
