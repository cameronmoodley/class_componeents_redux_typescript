import { iFetchTodosAction, iDeleteTodoAction } from '.';

export enum ActionTypes {
	fetchTodos,
	deleteTodo,
}

export type Action = iFetchTodosAction | iDeleteTodoAction;
