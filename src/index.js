import React from 'react';
import ReactDOM from 'react-dom/client';
import {Provider} from "react-redux";
import {applyMiddleware, compose, createStore} from "redux";


import App from "./components/App";
import reducers from "./store/reducers";
import thunk from "redux-thunk";

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(reducers, composeEnhancer(applyMiddleware(thunk)))

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Provider store={store}>
    <App/>
</Provider>,);

