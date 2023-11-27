import React from "react";
import SidebarNews from "../../SidebarNews/MostPopular";
import EditorPick from "../../SidebarNews/EditorPick";
import DiscoverByTopic from "../../SidebarNews/DIscoverByTopic";

const SidebarPost = () => {
    return (
        <div className="flex-1 lg:flex-[0.3] ">
            <div className="item-sidebar mb-10">
                <SidebarNews />
                <DiscoverByTopic />
                <EditorPick />
            </div>
        </div>
    );
};

export default SidebarPost;
