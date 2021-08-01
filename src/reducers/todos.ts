import { iTodo, Action, ActionTypes } from '../actions/index';

export const todosReducer = (state: iTodo[] = [], action: Action) => {
	switch (action.type) {
		case ActionTypes.fetchTodos:
			return action.payload;
		case ActionTypes.deleteTodo:
			return state.filter((todo) => todo.id !== action.payload);
		default:
			return state;
	}
};
