"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const Header = ({
  isDark,
  setIsDark,
  fontSelected,
  setFontSelected,
  fontArray,
}) => {
  const [font, setFont] = useState(false);
  const [fontTitle, setFontTitle] = useState("Sans Serif");
  return (
    <header className="flex justify-between items-center">
      <Link href={"/"}>
        <Image
          src={"/img/icons/book.svg"}
          priority
          width={28}
          height={32}
          alt="Logo"
        />
      </Link>
      <div className="flex gap-[1.625rem] items-center">
        <div className="flex gap-4 items-center">
          <div className="relative">
            <span
              onMouseEnter={() => setFont(true)}
              className="text-sm font-bold cursor-pointer"
            >
              {fontTitle}
            </span>
            {font && (
              <div
                onMouseLeave={() => setFont(false)}
                className="absolute w-[150px] -translate-x-1/4 p-2 flex-col flex gap-1 bg-white dark:bg-black dark:drop-shadow-md mt-5 z-10 drop-shadow-sm rounded-md border border-zinc-100 dark:border-gray-500"
              >
                {fontArray.map((font, i) => (
                  <p
                    key={i}
                    onClick={() => {
                      setFont(false);
                      setFontSelected(font.fontType);
                      setFontTitle(font.name);
                    }}
                    className="cursor-pointer hover:bg-gray-50 dark:hover:bg-slate-700 py-1 px-3 text-sm"
                  >
                    {font.name}
                  </p>
                ))}
              </div>
            )}
          </div>
          <Image
            src={"/img/icons/arrow.svg"}
            width={12}
            height={6}
            priority
            className="w-auto h-auto"
            alt="Arrow Icon"
          />
          <span className="ml-6 border-l-[1px] h-8 border-gray2" />
        </div>

        <div
          onClick={() => {
            setIsDark((prev) => !prev);
          }}
          className={`relative cursor-pointer w-10 h-5 rounded-full before:w-[14px] before:h-[14px] before:top-[3px] before:rounded-full before:bg-white before:drop-shadow-md before:absolute transition-all duration-500 ease-in-out before:transition-all before:duration-500 before:ease-in-out ${
            isDark
              ? "before:translate-x-[23px] bg-purpleProject"
              : "before:left-[3px] bg-gray3"
          }`}
        ></div>
        <svg
          onClick={() => setIsDark((prev) => !prev)}
          width="22"
          height="22"
          viewBox="0 0 22 22"
          className={`transition-all duration-500 ease-in-out cursor-pointer ${
            isDark
              ? "fill-purpleProject stroke-purpleProject"
              : "fill-transparent stroke-gray3"
          }`}
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M1 10.449C0.998458 12.8283 1.80169 15.1383 3.27914 17.0033C4.75659 18.8683 6.82139 20.1788 9.13799 20.7218C11.4545 21.2647 13.8866 21.0082 16.039 19.994C18.1912 18.9797 19.9373 17.2673 20.9931 15.1352C11.5442 15.1352 6.85799 10.4479 6.85799 1C5.09842 1.87311 3.61767 3.22033 2.58266 4.88981C1.54765 6.5593 0.999502 8.48469 1 10.449Z"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    </header>
  );
};

export default Header;
