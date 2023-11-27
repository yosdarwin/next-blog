import React from "react";
import TitleSidebar from "../TitleSidebar/TitleSidebar";
import ItemSidebarNews from "./ItemSidebarNews";

const EditorPick = () => {
    return (
        <>
            <TitleSidebar
                subtitle={"Chosen by editor"}
                title={"Editor's Pick"}
            />
            <div className="flex flex-col gap-8">
                <ItemSidebarNews isImage={true} />
                <ItemSidebarNews isImage={true} />
                <ItemSidebarNews isImage={true} />
            </div>
        </>
    );
};

export default EditorPick;
