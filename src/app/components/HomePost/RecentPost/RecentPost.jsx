import Image from "next/image";
import Link from "next/link";
import React from "react";

const RecentPost = () => {
    return (
        <div className="flex-1 lg:flex-[0.7]">
            <h2 className="title-section mb-10">Recent Post</h2>

            <div className="item-post flex-col md:flex-row flex gap-8 items-center">
                <div className="relative w-full md:flex-1 h-[250px]">
                    <Image
                        src={"/p1.jpeg"}
                        alt="thumb post"
                        fill={true}
                        className="object-cover"
                    />
                </div>
                <div className="flex-1 flex gap-4 flex-col justify-center items-start">
                    <h4 className="text-sm">
                        2023-06-11 &middot;{" "}
                        <span className="post-cat coding">Coding</span>
                    </h4>
                    <div className="text-3xl font-bold text-gray-500">
                        Lorem ipsum dolor sit amet.
                    </div>
                    <div>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Maiores repellendus laudantium...
                    </div>

                    <Link
                        href="/post/?slug"
                        className="relative after:absolute after:-bottom-1 after:right-0 after:left-0 after:h-1  after:bg-red-500"
                    >
                        Read more
                    </Link>
                </div>
            </div>
            <div className="item-post flex-col md:flex-row flex gap-8 items-center">
                <div className="relative w-full md:flex-1 h-[250px]">
                    <Image
                        src={"/p1.jpeg"}
                        alt="thumb post"
                        fill={true}
                        className="object-cover"
                    />
                </div>
                <div className="flex-1 flex gap-4 flex-col justify-center items-start">
                    <h4 className="text-sm">
                        2023-06-11 &middot;{" "}
                        <span className="post-cat coding">Coding</span>
                    </h4>
                    <div className="text-3xl font-bold text-gray-500">
                        Lorem ipsum dolor sit amet.
                    </div>
                    <div>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Maiores repellendus laudantium...
                    </div>

                    <Link
                        href="/post/?slug"
                        className="relative after:absolute after:-bottom-1 after:right-0 after:left-0 after:h-1  after:bg-red-500"
                    >
                        Read more
                    </Link>
                </div>
            </div>
            <div className="item-post flex-col md:flex-row flex gap-8 items-center">
                <div className="relative w-full md:flex-1 h-[250px]">
                    <Image
                        src={"/p1.jpeg"}
                        alt="thumb post"
                        fill={true}
                        className="object-cover"
                    />
                </div>
                <div className="flex-1 flex gap-4 flex-col justify-center items-start">
                    <h4 className="text-sm">
                        2023-06-11 &middot;{" "}
                        <span className="post-cat coding">Coding</span>
                    </h4>
                    <div className="text-3xl font-bold text-gray-500">
                        Lorem ipsum dolor sit amet.
                    </div>
                    <div>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Maiores repellendus laudantium...
                    </div>

                    <Link
                        href="/post/?slug"
                        className="relative after:absolute after:-bottom-1 after:right-0 after:left-0 after:h-1  after:bg-red-500"
                    >
                        Read more
                    </Link>
                </div>
            </div>
            <div className="item-post flex-col md:flex-row flex gap-8 items-center">
                <div className="relative w-full md:flex-1 h-[250px]">
                    <Image
                        src={"/p1.jpeg"}
                        alt="thumb post"
                        fill={true}
                        className="object-cover"
                    />
                </div>
                <div className="flex-1 flex gap-4 flex-col justify-center items-start">
                    <h4 className="text-sm">
                        2023-06-11 &middot;{" "}
                        <span className="post-cat coding">Coding</span>
                    </h4>
                    <div className="text-3xl font-bold text-gray-500">
                        Lorem ipsum dolor sit amet.
                    </div>
                    <div>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Maiores repellendus laudantium...
                    </div>

                    <Link
                        href="/post/?slug"
                        className="relative after:absolute after:-bottom-1 after:right-0 after:left-0 after:h-1  after:bg-red-500"
                    >
                        Read more
                    </Link>
                </div>
            </div>
            <div className="item-post flex-col md:flex-row flex gap-8 items-center">
                <div className="relative w-full md:flex-1 h-[250px]">
                    <Image
                        src={"/p1.jpeg"}
                        alt="thumb post"
                        fill={true}
                        className="object-cover"
                    />
                </div>
                <div className="flex-1 flex gap-4 flex-col justify-center items-start">
                    <h4 className="text-sm">
                        2023-06-11 &middot;{" "}
                        <span className="post-cat coding">Coding</span>
                    </h4>
                    <div className="text-3xl font-bold text-gray-500">
                        Lorem ipsum dolor sit amet.
                    </div>
                    <div>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Maiores repellendus laudantium...
                    </div>

                    <Link
                        href="/post/?slug"
                        className="relative after:absolute after:-bottom-1 after:right-0 after:left-0 after:h-1  after:bg-red-500"
                    >
                        Read more
                    </Link>
                </div>
            </div>
            <div className="mt-10 flex justify-between items-center">
                <Link
                    href={""}
                    className="bg-red-500 text-white rounded-md px-4 py-2"
                >
                    Previous
                </Link>
                <Link
                    href={""}
                    className="bg-red-500 text-white rounded-md px-4 py-2"
                >
                    Next
                </Link>
            </div>
        </div>
    );
};

export default RecentPost;
