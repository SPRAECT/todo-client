import React from "react";
import {MdCheckBox, MdCheckBoxOutlineBlank} from "react-icons/md";
import "../css/TodoItem.css";

const TodoItem = ({
    todo,
    onCompletedToggle
}) => {
    const {id, user_id, content, completed} = todo;
    return (
        <div className="TodoItem">
        <div className={`list ${completed ? 'completed' : " "}`}></div>
        {completed ? (
            <MdCheckBox
                onClick={() => {
                    onCompletedToggle(id);
                }}
            />
            ) : (
            <MdCheckBoxOutlineBlank
                onClick={() => {
                    onCompletedToggle(id);
                }}
            />
        )}

        <div>{content}</div>
    </div>
);
};

export default TodoItem;