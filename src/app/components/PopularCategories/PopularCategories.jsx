import Image from "next/image";
import Link from "next/link";
import React from "react";

const PopularCategories = () => {
    return (
        <div className="py-10">
            <h2 className="title-section mb-10">Popular categories</h2>
            <div className="flex justify-center xl:justify-between items-center flex-wrap gap-5">
                <Link
                    href="/blog/?cat=fashion"
                    className="item-category fashion"
                >
                    <div className="w-[30px] h-[30px] relative rounded-full overflow-hidden">
                        <Image
                            src={"/fashion.png"}
                            alt="icon category"
                            fill="true"
                            className="object-cover"
                        />
                    </div>
                    Fashion
                </Link>
                <Link href="/blog/?cat=food" className="item-category food">
                    <div className="w-[30px] h-[30px] relative rounded-full overflow-hidden">
                        <Image
                            src={"/food.png"}
                            alt="icon category"
                            fill="true"
                            className="object-cover"
                        />
                    </div>
                    Food
                </Link>
                <Link href="/blog/?cat=coding" className="item-category coding">
                    <div className="w-[30px] h-[30px] relative rounded-full overflow-hidden">
                        <Image
                            src={"/coding.png"}
                            alt="icon category"
                            fill="true"
                            className="object-cover"
                        />
                    </div>
                    Coding
                </Link>
                <Link href="/blog/?cat=fashion" className="item-category style">
                    <div className="w-[30px] h-[30px] relative rounded-full overflow-hidden">
                        <Image
                            src={"/style.png"}
                            alt="icon category"
                            fill="true"
                            className="object-cover"
                        />
                    </div>
                    Style
                </Link>
                <Link
                    href="/blog/?cat=fashion"
                    className="item-category travel"
                >
                    <div className="w-[30px] h-[30px] relative rounded-full overflow-hidden">
                        <Image
                            src={"/travel.png"}
                            alt="icon category"
                            fill="true"
                            className="object-cover"
                        />
                    </div>
                    Travel
                </Link>
                <Link
                    href="/blog/?cat=fashion"
                    className="item-category culture"
                >
                    <div className="w-[30px] h-[30px] relative rounded-full overflow-hidden">
                        <Image
                            src={"/culture.png"}
                            alt="icon category"
                            fill="true"
                            className="object-cover"
                        />
                    </div>
                    Culture
                </Link>
            </div>
        </div>
    );
};

export default PopularCategories;
