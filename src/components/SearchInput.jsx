import Image from "next/image";
import React from "react";

const Search = () => {
  return (
    <form className="relative mt-6 h-12 flex items-center">
      <input
        type="text"
        placeholder="Search for any word..."
        className="bg-[#f4f4f4] dark:bg-zinc-400 dark:placeholder:text-black/60 dark:text-black h-full w-full pl-6 rounded-2xl focus:border-[1px] focus:border-purpleProject outline-none border-[1px] border-transparent placeholder:font-semibold placeholder:text-gray-400/60 font-bold"
      />
      <button
        type="submit"
        className="absolute top-1/2 -translate-y-1/2 right-2 h-10 w-10 flex items-center justify-center"
      >
        <Image
          src={"/img/icons/search.svg"}
          width={20}
          height={20}
          alt="Search icon"
        />
      </button>
    </form>
  );
};

export default Search;
