import React from "react";
import TitleSidebar from "../TitleSidebar/TitleSidebar";
import Image from "next/image";
import Link from "next/link";
import ItemSidebarNews from "./ItemSidebarNews";

const SidebarNews = () => {
    return (
        <div className="mb-20">
            <TitleSidebar subtitle={"What's hot"} title={"Most Popular"} />
            <div className="flex flex-col gap-8">
                <ItemSidebarNews isImage={false} />
                <ItemSidebarNews isImage={false} />
                <ItemSidebarNews isImage={false} />
            </div>
        </div>
    );
};

export default SidebarNews;
