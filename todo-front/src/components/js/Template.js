import React from "react";
import "../css/Template.css";

const Template = ({children, todoLength}) => {
    return (<div>
        <div className = "title"> TO DO LIST ({todoLength})</div>
        <div>{children}</div>
    </div>);
};

export default Template;