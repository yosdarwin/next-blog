"use client";
import { ThemeContext } from "@/Context/ThemeContext";
import Image from "next/image";
import React, { useContext } from "react";

const ThemeToggle = () => {
    const { toggleTheme, theme } = useContext(ThemeContext);
    return (
        <div
            className="relative border-black rounded-[50px] px-[2px] py-[2px] cursor-pointer flex gap-2 border bg-slate-600"
            onClick={toggleTheme}
        >
            <Image src="/moon.png" width={17} height={17} alt="moon" />
            <div
                className={`h-[17px] w-[17px] rounded-full bg-[#ccc] absolute top-[2px] ${
                    theme == "light" ? "left-[2px]" : "right-[2px]"
                } transition-all duration-1500`}
            ></div>
            <Image src="/sun.png" width={17} height={17} alt="sun" />
        </div>
    );
};

export default ThemeToggle;
