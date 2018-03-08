import React from "react"
import ReactDOM from "react-dom"
import {createStore} from "redux";
import todoApp from "./reducers";
import {Provider} from "react-redux"
import {App} from "./components/App"
import throttle from "lodash/throttle";
import {loadState, saveState} from "./localStorage";


const persistedState = loadState();
const store = createStore(
    todoApp,
    persistedState
);

store.subscribe(throttle(() => {
    saveState({
        todos: store.getState().todos
    });
}, 1000));

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById("root")
);