import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import registerServiceWorker from './registerServiceWorker';
import store from './store';

import App from './App';
import './css/App.css';

const elem = document.querySelector('.root');

const wrapApp = (AppComponent, appStore) => (
  <Provider store={appStore}>
    <AppComponent />
  </Provider>
);

ReactDOM.render(wrapApp(App, store), elem);

registerServiceWorker();
