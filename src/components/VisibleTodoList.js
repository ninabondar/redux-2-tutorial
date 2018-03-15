import {connect} from "react-redux";
import TodoList from "./TodoList"
import * as actions from "../actions/index";
import { withRouter } from "react-router";
import { getVisibleTodos, getIsFetching } from "../reducers";
import React from "react";


class VisibleTodoList extends React.Component {
    componentDidMount() {
        this.fetchData();
    }

    componentDidUpdate(prevProps) {
        if (this.props.filter !== prevProps.filter) {
            this.fetchData();
        }
    }

    fetchData() {
        const {filter,requestTodos, fetchTodos } = this.props;
        requestTodos(filter);
        fetchTodos(filter);
    }

    render() {
        const { toggleTodo, todos, isFetching } = this.props;
        if(isFetching && !todos.length) {
            return <p>Loading...</p>;
        }
        return (
            <TodoList
                todos={todos}
                onTodoClick={toggleTodo}
            />
        );
    }
}

const mapStateToTodoListProps = (state,{ match }) => {
    const filter = match.params.filter || "all";
    return {
        todos: getVisibleTodos(state,filter),
        isFetching: getIsFetching(state, filter),
        filter,
    }
};

VisibleTodoList = withRouter(connect(
    mapStateToTodoListProps,
    actions
)(VisibleTodoList));


export default VisibleTodoList;