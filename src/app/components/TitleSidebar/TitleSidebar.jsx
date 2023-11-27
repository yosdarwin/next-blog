import React from "react";

const TitleSidebar = ({ subtitle, title }) => {
    return (
        <div className="mb-10">
            <h5 className="text-md text-gray-500">{subtitle}</h5>
            <h2 className="text-4xl font-bold">{title}</h2>
        </div>
    );
};

export default TitleSidebar;
