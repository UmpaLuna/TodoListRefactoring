import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../store/modules/todoList";

function useInput() {
  const dispatch = useDispatch();
  const [form, setForm] = useState({
    todo: "",
    content: "",
  });

  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const onClickAddTodoHandler = () => {
    const newTodo = {
      id: Date.now(),
      title: form.todo,
      content: form.content,
      isDone: false,
    };
    dispatch(addTodo(newTodo));
  };

  return { onClickAddTodoHandler, onChangeHandler };
}

export default useInput;
