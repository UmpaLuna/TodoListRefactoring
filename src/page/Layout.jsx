import React from "react";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";
import * as St from "../styled-component/StLayout";
function Layout() {
  return (
    <St.Layout>
      <TodoForm />
      <TodoList />
    </St.Layout>
  );
}

export default Layout;
