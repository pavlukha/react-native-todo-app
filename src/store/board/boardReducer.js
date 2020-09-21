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
  boardItem: [
    {
      id: 1,
      title: 'Дом',
      icon: 'home',
      todos: [],
    },
    {
      id: 2,
      title: 'Работа',
      icon: 'clipboard-list',
      todos: [],
    },
    {
      id: 3,
      title: 'Шоппинг',
      icon: 'shopping-cart',
      todos: [],
    },
    {
      id: 4,
      title: 'Спорт',
      icon: 'basketball-ball',
      todos: [],
    },
  ],
};

export const boardReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_BOARD:
      const newBoard = state.boardItem.concat({
        title: action.title,
        id: createPincode(5),
        icon: 'list-alt',
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
      const newTodo = state.boardItem.map((boardItem) => {
        if (boardItem.id === action.id) {
          boardItem.todos.push({
            title: action.title,
            isDone: false,
            id: createPincode(5),
          });
        }
        return boardItem;
      });
      return {
        ...state,
        boardItem: newTodo,
      };
    case TOGGLE_TODO:
      const toggledTodo = state.boardItem.map((boardItem, i) => {
        if (boardItem.id === action.boardId) {
          boardItem.todos.map((todo) => {
            if (todo.id === action.todoId) {
              todo.isDone = !todo.isDone;
            }
            return todo;
          });
        }
        return boardItem;
      });
      return {
        ...state,
        boardItem: toggledTodo,
      };
    case DELETE_TODO:
      const deleteTodo = state.boardItem.map((boardItem, i) => {
        console.log(action.boardId);
        if (boardItem.id === action.boardId) {
          console.log('wtf');
          boardItem.todos = boardItem.todos.filter((todo, id) => {
            return todo.id !== action.todoId;
          });
        }
        return boardItem;
      });
      return {
        ...state,
        boardItem: deleteTodo,
      };
    default:
      return state;
  }
};
