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
    const [value, setValue] = useState("");
    //background는 팝업의 백그라운드 역할
    return (
    <div> 
        <div className="background" onClick={onInsertToggle}></div> 
    <form>
        <input value={value} placeholder="할 일을 입력하세요."></input>
        <button type="submit">
            <MdAddCircle/>
        </button>
    </form>
    </div>
    )
};

export default TodoInsert;