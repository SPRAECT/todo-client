import React from "react";
import TodoItem from "./TodoItem";
import "../css/TodoList.css";

const TodoList = ({todos}) => {
    return <div>{todos.map(todo => (
    <TodoItem todo={todo} key={todo.id}/>))}</div>
};

export default TodoList;