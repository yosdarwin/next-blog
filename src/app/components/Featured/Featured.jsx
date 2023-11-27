import Image from "next/image";
import Link from "next/link";
import React from "react";

const Featured = () => {
    return (
        <>
            <h1 className="text-2xl md:text-4xl lg:text-8xl leading-40 text-center mb-8">
                <b>Hey, I am Yosdarwin</b> Discover my stories and Creative
                Ideas.
            </h1>
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
                <div className="relative h-[200px] md:h-[400px] xl:h-[500px]">
                    <Image
                        src={"/p1.jpeg"}
                        alt="hero image"
                        fill={true}
                        className="object-cover"
                    />
                </div>
                <div className="flex flex-col gap-8 justify-center items-start">
                    <h2 className="title-section">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Praesentium, sint?
                    </h2>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Quam aliquid praesentium laborum nihil deleniti,
                        nesciunt saepe perferendis minus tempora soluta
                        distinctio molestiae ut blanditiis modi?
                    </p>
                    <Link
                        href={"/"}
                        className="bg-slate-300 px-4 py-2 rounded-md max-w-max text-black"
                    >
                        Read More
                    </Link>
                </div>
            </div>
        </>
    );
};

export default Featured;
