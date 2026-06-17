import React from "react";

const MainVideoTitle = ({ title, overview }) => {
  return (
    <div className="absolute top-0 left-0 w-full h-screen bg-gradient-to-r from-black via-black/70 to-transparent text-white flex items-center">
      <div className="px-16 max-w-2xl">
        <h1 className="text-6xl font-bold mb-4">
          {title}
        </h1>

        <p className="text-lg leading-7 mb-8">
          {overview}
        </p>

        <div className="flex gap-4">
          <button className="bg-white text-black px-8 py-3 rounded-md font-bold hover:bg-gray-200 transition">
            ▶ Play
          </button>

          <button className="bg-gray-500/70 text-white px-8 py-3 rounded-md font-bold hover:bg-gray-500 transition">
            More Info
          </button>
        </div>
      </div>
    </div>
  );
};

export default MainVideoTitle;