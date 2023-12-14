import React from "react";
import * as St from "../../styled-component/StTodoList";
import useTodo from "../../hook/useTodo";
function TodoCard({ todo }) {
  const { onClickDeleteHandler, onClickIsDoneHandler } = useTodo();
  return (
    <St.Card>
      <St.Title>{todo.title}</St.Title>
      <St.Content>{todo.content}</St.Content>
      <St.ButtonContainer>
        <St.IsDoneButton onClick={onClickIsDoneHandler(todo.id)}>
          {!todo.isDone ? "완료" : "취소"}
        </St.IsDoneButton>
        <St.DeleteButton onClick={onClickDeleteHandler(todo.id)}>
          삭제
        </St.DeleteButton>
      </St.ButtonContainer>
    </St.Card>
  );
}

export default TodoCard;
