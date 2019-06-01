import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import store from './store';

import App from './App.jsx';
import './css/App.css';

const elem = document.querySelector('.root');

const wrapApp = (AppComponent, appStore) => (
  <Provider store={appStore}>
    <AppComponent />
  </Provider>
);

ReactDOM.render(wrapApp(App, store), elem);

registerServiceWorker();
