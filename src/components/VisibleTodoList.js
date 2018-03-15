import {connect} from "react-redux";
import TodoList from "./TodoList"
import {toggleTodo} from "../actions/index";

const getVisibleTodos = (
    todos,
    filter
) => {
    switch (filter) {
        case 'all':
            return todos;
        case 'completed':
            return todos.filter(
                t => t.completed
            );
        case 'active':
            return todos.filter(
                t => !t.completed
            );
    }
};

const mapStateToTodoListProps = (
    state,
    ownProps
) => ({
    todos: getVisibleTodos(
        state.todos,
        ownProps.filter
    )
});

const mapDispatchToTodoListProps = (
    dispatch
) => ({
    onTodoClick: (id) => {
        dispatch(toggleTodo(id))
    }
});

const VisibleTodoList = connect(
    mapStateToTodoListProps,
    mapDispatchToTodoListProps
)(TodoList);


export default VisibleTodoList;