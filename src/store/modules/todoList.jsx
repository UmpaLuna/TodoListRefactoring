import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const todoList = createSlice({
  name: "todoList",
  initialState,
  reducers: {
    addTodo: (state, { payload }) => {
      state.push(payload);
    },

    isDoneTodo: (state, { payload }) => {
      const newTodoList = state.map((target) => {
        if (target.id === payload) {
          // target.isDone = !target.isDone; immer.js에서 바꿔주지 않아서 에러걸린것!!
          return { ...target, isDone: !target.isDone };
        }
        return target;
      });
      return newTodoList;
    },

    deleteTodo: (state, { payload }) => {
      const filteredTodoList = state.filter((todo) => todo.id !== payload);
      return filteredTodoList;
    },
  },
});

export const { addTodo, isDoneTodo, deleteTodo } = todoList.actions;

export default todoList.reducer;
