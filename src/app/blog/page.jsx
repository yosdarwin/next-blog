"use client";
import React from "react";
import { useSearchParams } from "next/navigation";
import HomePost from "../components/HomePost/HomePost";

const Blog = () => {
    const params = useSearchParams();
    const cat = params?.get("cat");
    return (
        <>
            <div
                className={`py-5 mb-10 w-full cat-sidebar text-center text-2xl font-semibold capitalize ${cat}`}
            >
                {cat}
            </div>
            <HomePost />
        </>
    );
};

export default Blog;
