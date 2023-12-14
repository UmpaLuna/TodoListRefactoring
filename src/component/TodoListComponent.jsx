import React from "react";
import * as St from "../styled-component/StTodoList";
import CurrentTodos from "./todolist/CurrentTodos";
import CompleteTodos from "./todolist/CompleteTodos";
function TodoListComponent() {
  return (
    <St.Container>
      <St.Section>
        <St.Title>Working🎈</St.Title>
        <St.Div>
          {/* map을 돌리는 리스트 파트를 따로 컴포넌트로 만들고
          St.Card라는 UI도 따로 컴포넌트로 만들어보기 */}
          {/* CurrentTodo 컴포넌트로 만듬 */}
          <CurrentTodos />
        </St.Div>
      </St.Section>
      <St.Section>
        <St.Title>Done 👍</St.Title>
        <St.Div>
          {/* CompleteTodo 컴포넌트로 만듬 */}
          <CompleteTodos />
        </St.Div>
      </St.Section>
    </St.Container>
  );
}

export default TodoListComponent;
