import React from "react";
import { lang } from "../utils/languageConstants";
import { useSelector } from "react-redux";

const GptSearchBar = () => {
    const langKey = useSelector((store)=>store.config.language)
  return (
    <div className="absolute top-32 w-full flex justify-center z-10">
      <form className="w-1/2 bg-black/80 p-4 rounded-lg flex gap-4">
        <input
          type="text"
          placeholder={lang[langKey].gptSearchPlaceholder}
          className="flex-grow p-3 rounded-lg outline-none"
        />

        <button
          type="submit"
          className="bg-red-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-red-700"
        >
          {lang[langKey].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;