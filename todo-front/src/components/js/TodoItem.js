import React from "react";
import {MdCheckCircle, MdCheckBoxOutlineBlank} from "react-icons/md";

const TodoItem = ({todo}) => {
    const {id, user_id, content, completed} = todo;
    return <div className="TodoItem">
        <div className={`list ${completed ? 'completed' : " "}`}></div>
        {completed ? <MdCheckCircle/> : <MdCheckBoxOutlineBlank/>}
    </div>;
}

export default TodoItem;