import React from "react";
import Todos from "./todos/Todos";
import * as St from "../styled-component/StLayout";
import TodoForm from "./todos/TodoForm";
function TodoList() {
  return (
    <St.Layout>
      <TodoForm />
      <Todos />
    </St.Layout>
  );
}

export default TodoList;
