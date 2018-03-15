import {connect} from "react-redux";
import TodoList from "./TodoList"
import {toggleTodo} from "../actions/index";
import { withRouter } from "react-router";
import { getVisibleTodos } from "../reducers";

const mapStateToTodoListProps = (
    state,
    { match }
) =>
    ({
    todos: getVisibleTodos(
        state,
        match.params.filter || "all"
    )
});

const VisibleTodoList = withRouter(connect(
    mapStateToTodoListProps,
    { onTodoClick: toggleTodo }
)(TodoList));


export default VisibleTodoList;