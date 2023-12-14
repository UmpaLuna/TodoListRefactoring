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
          target.isDone = !target.isDone;
          return target;
        }
        return target;
      });
      // 물어보자
      state = newTodoList;
    },

    deleteTodo: (state, { payload }) => {
      const filteredTodoList = state.filter((todo) => todo.id !== payload);
      return filteredTodoList;
    },
  },
});

export const { addTodo, isDoneTodo, deleteTodo } = todoList.actions;

export default todoList.reducer;
