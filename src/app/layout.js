import { ThemeContext, ThemeContextProvider } from "@/Context/ThemeContext";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
    title: "Blog lamadev",
    description: "Building Blog using next.js mongodb and Auth.js ",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className={`${inter.className}`}>
                <ThemeContextProvider>{children}</ThemeContextProvider>
            </body>
        </html>
    );
}
