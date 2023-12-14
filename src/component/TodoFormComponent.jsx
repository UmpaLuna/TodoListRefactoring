import { useDispatch } from "react-redux";
import * as St from "../styled-component/StTodoForm";
import { useRef } from "react";
import { addTodo } from "../store/modules/todoList";
function TodoFormComponent() {
  const dispatch = useDispatch();
  const inputRef = useRef({});
  const onClickAddTodoHandler = () => {
    const newTodo = {
      id: Date.now(),
      title: inputRef.title.value,
      content: inputRef.content.value,
      isDone: false,
    };
    dispatch(addTodo(newTodo));
  };
  return (
    <St.Form onSubmit={(e) => e.preventDefault()}>
      <St.Div>
        <St.Label htmlFor="todo">할 일 :</St.Label>{" "}
        <St.Input id="todo" ref={(props) => (inputRef["title"] = props)} />
        <St.Label htmlFor="content">내용 : </St.Label>{" "}
        <St.Input id="content" ref={(props) => (inputRef["content"] = props)} />
      </St.Div>

      <St.Button onClick={onClickAddTodoHandler}>버튼</St.Button>
    </St.Form>
  );
}

export default TodoFormComponent;
