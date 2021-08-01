import React from 'react';
import { connect } from 'react-redux';
import { iTodo, fetchTodos, deleteTodo } from '../actions';
import { StoreState } from '../reducers';

interface iAppProps {
	todos: iTodo[];
	fetchTodos: Function;
	deleteTodo: typeof deleteTodo;
}

interface AppState {
	fetching: boolean;
}

class _App extends React.Component<iAppProps, AppState> {
	state = { fetching: false };

	onbuttonClick = (): void => {
		this.props.fetchTodos();
		this.setState({ fetching: true });
	};

	componentDidUpdate(prevProps: iAppProps): void {
		if (!prevProps.todos.length && this.props.todos.length) {
			this.setState({ fetching: false });
		}
	}

	renderList(): JSX.Element[] {
		return this.props.todos.map(({ title, id }: iTodo, index) => {
			return (
				<div onClick={() => this.onTodoClick(id)} key={index}>
					{title}
				</div>
			);
		});
	}

	onTodoClick = (id: number): void => {
		this.props.deleteTodo(id);
	};

	render(): JSX.Element {
		return (
			<div>
				<button onClick={this.onbuttonClick}>Fetch</button>

				{this.state.fetching ? <div>Loading...</div> : this.renderList()}
			</div>
		);
	}
}

const mapStateToProps = ({ todos }: StoreState): { todos: iTodo[] } => {
	return {
		todos: todos,
	};
};

export const App = connect(mapStateToProps, { fetchTodos, deleteTodo })(_App);
