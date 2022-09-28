import React, {useEffect, useState} from "react";
import { MdAddCircle } from "react-icons/md";
import { TiTrash, TiPencil } from "react-icons/ti";

const TodoInsert = ({
    onInsertToggle,
    onInsertTodo,
    selectedTodo,
    onRemove,
    onUpdate
}) => {
    return (
    <div> 
        <div className="background" onClick={onInsertToggle}></div> 
    <form>
        <input></input>
        <button type="submit"><MdAddCircle/></button>
    </form>
    </div>
    )
};

export default TodoInsert;