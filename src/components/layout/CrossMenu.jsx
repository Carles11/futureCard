import React from 'react';

import { CrossMenuCss } from '@src/css/elements';


const CrossMenu = props => (
  <CrossMenuCss>
      <span onClick={props.handleClose} />
    </CrossMenuCss>
);

export default CrossMenu;
