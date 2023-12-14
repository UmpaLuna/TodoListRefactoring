import React from "react";
import useTodo from "../../hook/useTodo";
import * as St from "../../styled-component/StTodoList";
import TodoCard from "./TodoCard";
function CurrentTodos() {
  const { currentTodoList } = useTodo();
  return (
    <>
      {currentTodoList.map((todo) => (
        <TodoCard key={todo.id} todo={todo} />
      ))}
    </>
  );
}

export default CurrentTodos;
