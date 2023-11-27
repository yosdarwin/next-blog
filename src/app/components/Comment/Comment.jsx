import Image from "next/image";
import React from "react";

export const Comment = () => {
    return (
        <div>
            <h3 className="font-bold title-section mt-10">Comment</h3>
            <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-5 mt-5">
                <textarea
                    name="comment"
                    id="commnet"
                    placeholder="Write comment here"
                    className="flex-grow resize-none border-none outline-none p-4 text-black rounded-md w-full"
                ></textarea>
                <button className="bg-green-800 text-white rounded-md px-5 py-3">
                    Send
                </button>
            </div>

            <div className="comment-list mt-10 flex flex-col gap-10">
                <div className="item-comment">
                    <div className="flex gap-5 items-center">
                        <div className="relative overflow-hidden w-[40px] h-[40px] rounded-full">
                            <Image
                                src="/p1.jpeg"
                                alt="user"
                                fill={true}
                                className="object-cover "
                            />
                        </div>
                        <div>
                            <h4 className="text-sm font-semibold">Jhon Doe</h4>
                            <h5 className="text-gray-500 text-sm">
                                02.12.1985
                            </h5>
                        </div>
                    </div>
                    <article className="mt-5">
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Vel adipisci commodi incidunt in a omnis
                            asperiores ad voluptatibus velit nisi?
                        </p>
                    </article>
                </div>
                <div className="item-comment">
                    <div className="flex gap-5 items-center">
                        <div className="relative overflow-hidden w-[40px] h-[40px] rounded-full">
                            <Image
                                src="/p1.jpeg"
                                alt="user"
                                fill={true}
                                className="object-cover "
                            />
                        </div>
                        <div>
                            <h4 className="text-sm font-semibold">Jhon Doe</h4>
                            <h5 className="text-gray-500 text-sm">
                                02.12.1985
                            </h5>
                        </div>
                    </div>
                    <article className="mt-5">
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Vel adipisci commodi incidunt in a omnis
                            asperiores ad voluptatibus velit nisi?
                        </p>
                    </article>
                </div>
            </div>
        </div>
    );
};
