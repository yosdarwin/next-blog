"use client";
import Image from "next/image";
import React, { useState } from "react";

import ReactQuill from "react-quill";
import "react-quill/dist/quill.bubble.css";
const write = () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className="flex flex-col min-h-screen">
            <button className="px-4 py-2 lg:px-6 lg:py-3 rounded-md text-white italic bg-green-700 ml-auto text-sm lg:text-base">
                Publish
            </button>
            <input
                type="text"
                placeholder="Title"
                className="w-full
        rounded-md px-0 py-6 outline-none border-none bg-transparent title-write "
            />

            <div className="mt-5 flex items-center gap-5">
                <div
                    className="w-8 h-8 p-1 flex justify-center items-center border outer-icon-write rounded-full cursor-pointer"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    <Image
                        src={"/plus.png"}
                        alt="plus"
                        width={30}
                        height={30}
                        className="block"
                    />
                </div>
                {isOpen && (
                    <div className="flex gap-2 items-center">
                        <div className="w-8 h-8 p-2 flex justify-center items-center border outer-icon-write rounded-full cursor-pointer">
                            <Image
                                src={"/external.png"}
                                alt="plus"
                                width={30}
                                height={30}
                                className="block"
                            />
                        </div>
                        <div className="w-8 h-8 p-2 flex justify-center items-center border outer-icon-write rounded-full cursor-pointer">
                            <Image
                                src={"/image.png"}
                                alt="plus"
                                width={30}
                                height={30}
                                className="block"
                            />
                        </div>
                        <div className="w-8 h-8 p-2 flex justify-center items-center border outer-icon-write rounded-full cursor-pointer">
                            <Image
                                src={"/video.png"}
                                alt="plus"
                                width={30}
                                height={30}
                                className="block"
                            />
                        </div>
                    </div>
                )}
            </div>
            <ReactQuill
                theme="bubble"
                className="mt-5"
                placeholder="Tell your story"
            />
        </div>
    );
};

export default write;
