import {
  ADD_BOARD,
  DELETE_BOARD,
  TOGGLE_BOARD,
  ADD_TODO,
  DELETE_TODO,
  TOGGLE_TODO,
} from '../../constants/constants';

export const addBoard = (title) => ({
  type: ADD_BOARD,
  title,
});

export const toggleBoard = (boardId, todoId) => ({
  type: TOGGLE_BOARD,
  boardId,
  todoId,
});

export const deleteBoard = (id) => ({
  type: DELETE_BOARD,
  id,
});

export const addTodo = (title) => ({
  type: ADD_TODO,
  title,
  id,
});

export const toggleTodo = (boardId, todoId) => ({
  type: TOGGLE_TODO,
  boardId,
  todoId,
});

export const deleteTodo = (id) => ({
  type: DELETE_TODO,
  boardId,
  todoId,
});
