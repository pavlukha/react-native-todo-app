import {
  ADD_BOARD,
  DELETE_BOARD,
  ADD_TODO,
  DELETE_TODO,
  TOGGLE_TODO,
} from '../../constants/constants';

export const addBoard = (title) => ({
  type: ADD_BOARD,
  title,
});

export const deleteBoard = (id) => ({
  type: DELETE_BOARD,
  id,
});

export const addTodo = (title, id) => ({
  type: ADD_TODO,
  title,
  id,
});

export const toggleTodo = (boardId, todoId) => ({
  type: TOGGLE_TODO,
  boardId,
  todoId,
});

export const deleteTodo = (boardId, todoId) => ({
  type: DELETE_TODO,
  boardId,
  todoId,
});
