import { Comment } from "@/app/components/Comment/Comment";
import SidebarPost from "@/app/components/HomePost/SidebarPost/SidebarPost";
import Image from "next/image";
import React from "react";

const SinglePost = () => {
    const status = "authenticated";
    return (
        <>
            <div className="flex-col lg:flex-row flex gap-10 justify-between items-center">
                <div className="flex-1">
                    <h1 className="text-2xl lg:text-5xl font-bold mb-10">
                        Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit. Eveniet, quia!
                    </h1>
                    <div className="flex gap-5 items-center">
                        <div className="relative w-[40px] h-[40px] rounded-full overflow-hidden">
                            <Image
                                src={"/p1.jpeg"}
                                alt="user"
                                className="object-cover"
                                fill={true}
                            />
                        </div>
                        <div>
                            <h3>Jhon Doe</h3>
                            <h4 className="text-gray-500">10.12.1985</h4>
                        </div>
                    </div>
                </div>
                <div className="relative h-[300px] lg:h-[400px] w-full lg:flex-1">
                    <Image
                        src="/p1.jpeg"
                        fill={true}
                        alt="hero single post"
                        className="object-cover"
                    />
                </div>
            </div>
            <div className="mt-10">
                <div className="flex flex-col lg:flex-row items-start gap-10">
                    <div className="flex-[0.7] text-xl flex flex-col gap-5">
                        <article className="flex flex-col gap-5">
                            <p>
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Reprehenderit, repudiandae et
                                temporibus ut eos, commodi obcaecati error
                                molestias doloribus a suscipit esse iure fugiat
                                beatae cumque deserunt, quae ullam. Tenetur.
                            </p>
                            <p>
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Reprehenderit, repudiandae et
                                temporibus ut eos, commodi obcaecati error
                                molestias doloribus a suscipit esse iure fugiat
                                beatae cumque deserunt, quae ullam. Tenetur.
                            </p>
                        </article>
                        {status == "authenticated" && <Comment />}
                    </div>
                    <div className="flex-[0.3]">
                        <SidebarPost />
                    </div>
                </div>
            </div>
        </>
    );
};

export default SinglePost;
