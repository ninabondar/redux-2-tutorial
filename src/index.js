import React from "react"
import ReactDOM from "react-dom"
import todoApp from "./reducers/";
import {createStore} from "redux";
import {Provider} from "react-redux"
import {App} from "./components/App"

ReactDOM.render(
    <Provider store={createStore(todoApp)}>
        <App />
    </Provider>,
    document.getElementById("root")
);