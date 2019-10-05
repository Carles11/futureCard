import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";

import registerServiceWorker from "./registerServiceWorker";
import store from "./store";

import App from "./App";
import "./css/App.css";
import "./assets/favicon/favicon.ico";

const elem = document.querySelector(".root");

const wrapApp = (AppComponent, appStore) => (
  <Router>
    <Provider store={appStore}>
      <AppComponent />
    </Provider>
  </Router>
);

ReactDOM.render(wrapApp(App, store), elem);

registerServiceWorker();
