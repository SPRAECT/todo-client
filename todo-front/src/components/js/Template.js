import React, { Children } from "react";

const Template = ({children}) => {
    return (<div>
        <div>TO DO LIST</div>
        <nav>{children}</nav>
    </div>);
};

export default Template;