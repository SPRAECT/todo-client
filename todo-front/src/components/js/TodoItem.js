import React from "react";

const TodoItem = ({todo}) => {
    const {content} = todo;
    return <div> {content} </div>;
}

export default TodoItem;