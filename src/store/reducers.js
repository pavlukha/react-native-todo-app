import {combineReducers, createStore} from 'redux';
import {boardReducer} from './board/boardReducer';

const rootReducer = combineReducers({
  boards: boardReducer,
});

export const store = createStore(rootReducer);
