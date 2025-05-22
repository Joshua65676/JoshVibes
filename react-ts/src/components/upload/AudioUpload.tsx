import { useState } from "react";

const AudioUpload: React.FC = () => {
  const [audioFileName, setAudioFileName] = useState<string | null>(null);

  const handleAudioUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file && file.type.startsWith("audio/")) {
      setAudioFileName(file.name);
    } else {
      alert("Please upload a valid audio file.");
    }
  };

  return (
    <div className="">
      <label className="text-White font-semibold">Upload Audio File</label>
      <div className="flex items-center gap-4">
        <input
          type="file"
          accept="audio/*"
          placeholder="Upload Audio File"
          onChange={handleAudioUpload}
          className="border p-2 rounded-md"
        />
        {audioFileName && (
          <span className="text-gray-600">{audioFileName}</span>
        )}
      </div>
    </div>
  );
};

export default AudioUpload;
