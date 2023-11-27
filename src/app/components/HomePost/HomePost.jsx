import React from "react";
import RecentPost from "./RecentPost/RecentPost";
import SidebarPost from "./SidebarPost/SidebarPost";

const HomePost = () => {
    return (
        <div className="flex flex-col lg:flex-row justify-between items-start gap-8 pb-10">
            <RecentPost />
            <SidebarPost />
        </div>
    );
};

export default HomePost;
