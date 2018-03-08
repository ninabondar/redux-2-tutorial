import React from "react";
import VisibleTodoList from "./VisibleTodoList";
import AddTodo from "./AddTodo"
import Footer from "./Footer"

export const App = ({match}) => (
    <div>
        <AddTodo />
        <VisibleTodoList
            filter={match.params.filter || 'all'}
        />
        <Footer />
    </div>
);

export default App;