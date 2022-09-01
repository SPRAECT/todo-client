import React from "react";

const TodoList = ({todos}) => {
    return <div>{todos.map(todo => (
    <div>{todo.content}</div>))}</div>
};

export default TodoList;