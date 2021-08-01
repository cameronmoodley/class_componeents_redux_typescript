import { combineReducers } from 'redux';
import { iTodo } from '../actions';
import { todosReducer } from './todos';

export interface StoreState {
	todos: iTodo[];
}

export const reducers = combineReducers<StoreState>({
	todos: todosReducer,
});
