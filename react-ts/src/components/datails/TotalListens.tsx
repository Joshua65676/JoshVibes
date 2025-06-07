import React from "react";

const TotalListens: React.FC = () => {
  return (
    <section className="bg-GrayBg h-[7rem] rounded-2xl">
      <main className="p-5 pl-8 flex flex-row gap-1">
        <div className="flex flex-row gap-4">
          <span className="text-White font-semibold text-[18px]">
            Total Listens
          </span>
        </div>
      </main>
    </section>
  );
};

export default TotalListens;
