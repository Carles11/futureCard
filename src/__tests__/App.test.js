import React from 'react';
import ReactDOM from 'react-dom';
import { AppWrapper as App } from '../App';

xtest('should render <App />', () => {
  const div = document.createElement('div');
  const DIC = { APP_DESCRIPTION: 'test' };
  ReactDOM.render(<App DIC={DIC} />, div);
});
