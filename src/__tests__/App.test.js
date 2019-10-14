import React from 'react';
import ReactDOM from 'react-dom';
import { MemoryRouter } from 'react-router-dom';

import { AppWrapper as App } from '../App';

function withRouter(Component) {
  return (
    <MemoryRouter>
      <Component />
    </MemoryRouter>
  );
}

xtest('should render <App />', () => {
  const div = document.createElement('div');
  const DIC = { APP_DESCRIPTION: 'test' };
  ReactDOM.render(withRouter(<App DIC={DIC} />), div);
});
