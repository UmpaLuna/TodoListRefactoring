import React from "react";
import useTodo from "../../hook/useTodo";
import * as St from "../../styled-component/StTodoList";
function CompleteTodos() {
  const { doneList, onClickDeleteHandler, onClickIsDoneHandler } = useTodo();
  return (
    <React.Fragment>
      {doneList.map((todo) => (
        <St.Card key={todo.id}>
          <St.Title>{todo.title}</St.Title>
          <St.Content>{todo.content}</St.Content>
          <St.ButtonContainer>
            <St.IsDoneButton onClick={onClickIsDoneHandler(todo.id)}>
              {todo.isDone && "취소"}
            </St.IsDoneButton>
            <St.DeleteButton onClick={onClickDeleteHandler(todo.id)}>
              삭제
            </St.DeleteButton>
          </St.ButtonContainer>
        </St.Card>
      ))}
    </React.Fragment>
  );
}

export default CompleteTodos;
