import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import ThemeToggle from "../ThemeToggle/ThemeToggle";
import { RxHamburgerMenu } from "react-icons/rx";

const Navbar = () => {
    const [show, setShow] = useState(false);
    const toggleShow = () => {
        setShow((prev) => !prev);
    };
    const status = "unauthenticated";
    return (
        <div className="flex justify-between items-center h-[100px]">
            <div className="hidden lg:flex justify-start items-center gap-1 flex-1">
                <Link href="#">
                    <Image
                        src="/facebook.png"
                        alt="socmed icon"
                        width={20}
                        height={20}
                    />
                </Link>
                <Link href="#">
                    <Image
                        src="/tiktok.png"
                        alt="socmed icon"
                        width={20}
                        height={20}
                    />
                </Link>
                <Link href="#">
                    <Image
                        src="/youtube.png"
                        alt="socmed icon"
                        width={20}
                        height={20}
                    />
                </Link>
                <Link href="#">
                    <Image
                        src="/instagram.png"
                        alt="socmed icon"
                        width={20}
                        height={20}
                    />
                </Link>
            </div>
            <div className="flex justify-start lg:justify-center items-center">
                <Link href={"/"}>
                    <h1 className="font-bold text-xl lg:text-3xl xl:text-4xl">
                        WEBDevindo
                    </h1>
                </Link>
            </div>
            <div className="top-menu flex justify-end items-center gap-4 flex-1">
                <ThemeToggle />
                <RxHamburgerMenu
                    size={30}
                    className="cursor-pointer lg:hidden"
                    onClick={toggleShow}
                />
                <Link href="/">Home</Link>
                <Link href="#">Contact</Link>
                <Link href="#">About</Link>
                {status == "unauthenticated" ? (
                    <Link href="/login">Login</Link>
                ) : (
                    <>
                        <Link href="/write">Write</Link>
                        <Link href="#">Logout</Link>
                    </>
                )}
            </div>

            <div
                className={`burger-menu theme-color flex-col lg:hidden theme-color fixed top-[100px] left-0 right-0 bottom-0 justify-center items-center gap-5 lg:gap-8${
                    show ? " show" : ""
                }`}
            >
                <Link href="/">Home</Link>
                <Link href="#">Contact</Link>
                <Link href="#">About</Link>
                {status == "unauthenticated" ? (
                    <Link href="/">Login</Link>
                ) : (
                    <Link href="#">Logout</Link>
                )}
            </div>
        </div>
    );
};

export default Navbar;
