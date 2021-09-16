import React from "react";
import ReactDOM from "react-dom";
import {BrowserRouter, HashRouter} from "react-router-dom";

import "./styles.css";

import {Provider} from "react-redux";
import App from "./App";
import store from "./redux/store";

ReactDOM.render(
  <HashRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </HashRouter>,
  document.getElementById("root")
);
