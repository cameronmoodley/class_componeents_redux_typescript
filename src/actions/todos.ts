import axios from 'axios';
import { Dispatch } from 'redux';
import { ActionTypes } from './types';

const url = 'https://jsonplaceholder.typicode.com/todos/';

export interface iTodo {
	id: number;
	title: string;
	completed: boolean;
}

export interface iFetchTodosAction {
	type: ActionTypes.fetchTodos;
	payload: iTodo[];
}

export interface iDeleteTodoAction {
	type: ActionTypes.deleteTodo;
	payload: number;
}

export const fetchTodos = () => {
	return async (dispatch: Dispatch) => {
		const res = await axios.get<iTodo[]>(url);

		dispatch<iFetchTodosAction>({
			type: ActionTypes.fetchTodos,
			payload: res.data,
		});
	};
};

export const deleteTodo = (id: number): iDeleteTodoAction => {
	return {
		type: ActionTypes.deleteTodo,
		payload: id,
	};
};
