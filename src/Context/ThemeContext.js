"use client";
import Footer from "@/app/components/Footer/Footer";
import Navbar from "@/app/components/Navbar/Navbar";
import { createContext, useState } from "react";

export const ThemeContext = createContext({
    theme: "light",
    toggleTheme: () => {},
});

export const ThemeContextProvider = ({ children }) => {
    const [theme, setTheme] = useState("light");
    const toggleTheme = () => {
        setTheme((prev) => (prev == "light" ? "dark" : "light"));
    };
    return (
        <ThemeContext.Provider value={{ theme, setTheme, toggleTheme }}>
            <div className={`theme-color ${theme}`}>
                <div className="container mx-auto px-4 px-md-0">
                    <Navbar />
                    <div className="pt-6">{children}</div>
                </div>
                <Footer />
            </div>
        </ThemeContext.Provider>
    );
};
