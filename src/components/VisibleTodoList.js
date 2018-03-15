import {connect} from "react-redux";
import TodoList from "./TodoList"
import * as actions from "../actions/index";
import { withRouter } from "react-router";
import { getVisibleTodos } from "../reducers";
// import { fetchTodos } from "../api";
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
        const {filter, fetchTodos } = this.props;
        fetchTodos(filter);
    }

    render() {
        const { toggleTodo, ...rest } = this.props;
        return (
            <TodoList
                {...rest}
                onTodoClick={toggleTodo}
            />
        );
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
    actions
)(VisibleTodoList));


export default VisibleTodoList;