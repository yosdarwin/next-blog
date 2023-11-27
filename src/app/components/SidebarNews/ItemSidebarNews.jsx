import Image from "next/image";
import Link from "next/link";
import React from "react";

const ItemSidebarNews = ({ isImage }) => {
    return (
        <Link href={"/blog/id"}>
            <div className="flex gap-8 items-center">
                {isImage && (
                    <div className="relative w-[100px] h-[100px] rounded-[50%] shrink-0 overflow-hidden">
                        <Image
                            src="/p1.jpeg"
                            alt="thumb"
                            fill={true}
                            className="object-cover"
                        />
                    </div>
                )}
                <div className="flex flex-col gap-4 items-start justify-center">
                    <div className="rounded-full text-sm px-4 py-1 cat-sidebar culture">
                        Culture
                    </div>
                    <h3>
                        Lorem ipsum, dolor sit amet consectetur adipisicing
                        elit. Nostrum, aliquam?
                    </h3>
                    <h5 className="text-xs">
                        Yosdarwin -{" "}
                        <span className="text-gray-500">10-10-2023</span>
                    </h5>
                </div>
            </div>
        </Link>
    );
};

export default ItemSidebarNews;
