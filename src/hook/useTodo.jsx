import { useDispatch, useSelector } from "react-redux";
import { deleteTodo, isDoneTodo } from "../store/modules/todoList";

function useTodo() {
  const todoList = useSelector((state) => state.todoList);
  const dispatch = useDispatch();
  const onClickIsDoneHandler = (id) => () => dispatch(isDoneTodo(id));
  const onClickDeleteHandler = (id) => () => dispatch(deleteTodo(id));
  // jotai 디라이브드 같아보임 괜춘함- 류제천 튜터님말씀
  const currentTodoList = todoList?.filter((todo) => !todo.isDone);
  const doneList = todoList?.filter((todo) => todo.isDone);

  return {
    currentTodoList,
    doneList,
    onClickDeleteHandler,
    onClickIsDoneHandler,
  };
}

export default useTodo;
