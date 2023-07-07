"use client";

import { useEffect, useState } from "react";
import Header from "./Header";
import { Inter, Lora, Inconsolata } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });
const lora = Lora({ subsets: ["latin"] });
const monospace = Inconsolata({ subsets: ["latin"] });

const fontArray = [
  { name: "Sans Serif", fontType: inter },
  { name: "Serif", fontType: lora },
  { name: "Monospace", fontType: monospace },
];

const Theme = ({ children }) => {
  const [isDark, setIsDark] = useState(false);
  const [fontSelected, setFontSelected] = useState(inter);

  return (
    <div className={` ${isDark ? "dark" : ""} ${fontSelected.className}`}>
      <div className="dark:bg-back1 dark:text-white bg-white h-screen">
        <div className="max-w-[46rem] mx-auto p-6">
          <Header
            isDark={isDark}
            setIsDark={setIsDark}
            fontSelected={fontSelected}
            setFontSelected={setFontSelected}
            fontArray={fontArray}
          />
          {children}
        </div>
      </div>
    </div>
  );
};

export default Theme;
