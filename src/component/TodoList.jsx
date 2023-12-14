import React from "react";
import Todos from "./todolist/Todos";
import * as St from "../styled-component/StLayout";
import TodoForm from "./todolist/TodoForm";
function TodoList() {
  return (
    <St.Layout>
      <TodoForm />
      <Todos />
    </St.Layout>
  );
}

export default TodoList;
