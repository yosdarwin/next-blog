import Link from "next/link";
import React from "react";
import TitleSidebar from "../TitleSidebar/TitleSidebar";

const DiscoverByTopic = () => {
    return (
        <div className="mb-20">
            <TitleSidebar subtitle={"Discover by topic"} title={"Categories"} />
            <div className="flex gap-2 justify-start flex-wrap sidebar-cat">
                <Link href="/blog/cat=coding" className="cat-sidebar coding">
                    Coding
                </Link>
                <Link href="/blog/cat=fashion" className="cat-sidebar fashion">
                    Fashion
                </Link>
                <Link href="/blog/cat=culture" className="cat-sidebar culture">
                    Culture
                </Link>
                <Link href="/blog/cat=food" className="cat-sidebar food">
                    Food
                </Link>
                <Link href="/blog/cat=travel" className="cat-sidebar travel">
                    Travel
                </Link>
            </div>
        </div>
    );
};

export default DiscoverByTopic;
