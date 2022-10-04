import React from 'react';
import ReactDOM from 'react-dom/client';
import {applyMiddleware, compose, createStore} from "redux";
import './index.css';
import App from './App';
import {BrowserRouter} from "react-router-dom";
import {rootReducer} from "./redux/rootReducer";
import {Provider} from "react-redux";
import thunk from "redux-thunk";

const store = createStore(rootReducer, compose(applyMiddleware(thunk)))

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
        <React.StrictMode>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </React.StrictMode>
    </Provider>
);