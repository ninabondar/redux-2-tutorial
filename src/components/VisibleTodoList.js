import {connect} from "react-redux";
import TodoList from "./TodoList";
import {toggleTodo} from "../actions/index";
import { withRouter } from "react-router";
import { getVisibleTodos } from "../reducers";
import { fetchTodos } from "../api";
import React from "react";


class VisibleTodoList extends React.Component {
    componentDidMount() {
        fetchTodos(this.props.filter).then(todos =>
            console.log(this.props.filter, todos)
        );
    }

    render() {
        return <TodoList {...this.props} />
    }
}

const mapStateToTodoListProps = (state,{ match }) => {
    const filter = match.params.filter || "all";
    return {
        todos: getVisibleTodos(state,filter),
        filter: filter
    }
};

VisibleTodoList = withRouter(connect(
    mapStateToTodoListProps,
    {onTodoClick: toggleTodo}
)(VisibleTodoList));


export default VisibleTodoList;