import React from "react";
import useTodo from "../../hook/useTodo";
import * as St from "../../styled-component/StTodoList";
import TodoCard from "./TodoCard";
function CompleteTodos() {
  const { doneList } = useTodo();
  return (
    <React.Fragment>
      {doneList.map((todo) => (
        <TodoCard key={todo.id} todo={todo} />
      ))}
    </React.Fragment>
  );
}

export default CompleteTodos;
