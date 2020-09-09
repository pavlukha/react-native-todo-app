import {
  ADD_BOARD,
  TOGGLE_BOARD,
  DELETE_BOARD,
  ADD_TODO,
  TOGGLE_TODO,
  DELETE_TODO,
} from '../../constants/constants';
import {createPincode} from '../../utils/pinCode';

const initialState = {
  boardItem: [],
};

export const boardReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_BOARD:
      const newBoard = state.boardItem.concat({
        title: action.title,
        id: createPincode(5),
        todos: [],
      });
      return {
        ...state,
        boardItem: newBoard,
      };
    // case TOGGLE_BOARD:
    //   const toggledBoard = state.boards.map((board, i) => {
    //     if (board.id === action.boardId) {
    //       board.todos.map((todo) => {
    //         if (board.id === action.boardId) {
    //           board.isDone = !board.isDone;
    //           board.todos.map((todo) => (todo.isDone = !todo.isDone));
    //         }
    //         return board;
    //       });
    //     }
    //     return board;
    //   });
    //   return {
    //     ...state,
    //     boards: toggledBoard,
    //   };
    // case DELETE_BOARD:
    //   const deleteBoard = state.boards.filter((board, id) => {
    //     return board.id !== action.id;
    //   });
    //   return {
    //     ...state,
    //     boards: deleteBoard,
    //   };
    case ADD_TODO:
      console.log(action);
      const newTodo = state.boards.map((board) => {
        if (board.id === action.id) {
          board.todos.push({
            title: action.title,
            isDone: false,
            id: createPincode(5),
          });
        }
        return board;
      });
      console.log(newTodo);
      return {
        ...state,
        boards: newTodo,
      };
    // case TOGGLE_TODO:
    //   const toggledTodo = state.boards.map((board, i) => {
    //     if (board.id === action.boardId) {
    //       board.todos.map((todo) => {
    //         if (todo.id === action.todoId) {
    //           todo.isDone = !todo.isDone;
    //         }
    //         return todo;
    //       });
    //     }
    //     return board;
    //   });
    //   return {
    //     ...state,
    //     boards: toggledTodo,
    //   };
    // case DELETE_TODO:
    //   console.log(action);
    //   const deleteTodo = state.boards.map((boards) => {
    //     if (boards.id === action.boardId) {
    //       boards.todos = boards.todos.filter((todos, id) => {
    //         return todos.id !== action.todoId;
    //       });
    //     }
    //     return boards;
    //   });
    //   return {
    //     ...state,
    //     boards: deleteTodo,
    //   };
    default:
      return state;
  }
};
