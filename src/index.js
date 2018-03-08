import React from "react"
import ReactDOM from "react-dom"
import {createStore} from "redux";
import todoApp from "./reducers";
import {Provider} from "react-redux"
import {App} from "./components/App"


const persistedState = {
    todos: [{
        id: '0',
        text: 'Welcome',
        completed: false
    }],
    visibilityFilter: undefined
};

const store = createStore(
    todoApp,
    persistedState
);
console.log(store.getState());

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById("root")
);