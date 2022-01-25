import React from "react";
import ReactDOM from "react-dom";
import {BrowserRouter as Router} from "react-router-dom";
import {createStore, applyMiddleware} from "redux";
import {composeWithDevTools} from "redux-devtools-extension";
import createSagaMiddleware from "redux-saga";
import {Provider} from "react-redux";
import {reducers} from "./reducers";
import {sagas} from "./sagas";
import App from "./components/App/App";
import reportWebVitals from './reportWebVitals';
import "./index.scss";

const saga = createSagaMiddleware();
const publicURL = process.env.REACT_APP_PUBLIC_URL;

export const store = createStore(reducers, composeWithDevTools(
  applyMiddleware(saga)
));

saga.run(sagas);

ReactDOM.render(
  <Provider store={store}>
    <Router basename={publicURL}>
      <App />
    </Router>
  </Provider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
