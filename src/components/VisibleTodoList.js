import {connect} from "react-redux";
import TodoList from "./TodoList"
import {toggleTodo} from "../actions/index";
import { withRouter } from "react-router";

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
    { match }
) => ({
    todos: getVisibleTodos(
        state.todos,
        match.params.filter || "all"
    )
});

const VisibleTodoList = withRouter(connect(
    mapStateToTodoListProps,
    { onTodoClick: toggleTodo }
)(TodoList));


export default VisibleTodoList;