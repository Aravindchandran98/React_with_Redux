import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import { Provider } from "react-redux";
import reducer from "./store/reducer";
import { createStore } from "redux";

var store = createStore(reducer);

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
          <App/>
        </Provider>
    </React.StrictMode>,
    document.getElementById("root"));

//serviceWorker register
// serviceWorker.register();