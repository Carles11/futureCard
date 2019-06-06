import React from 'react';

import Layout from '@src/css/blocks/Layout';
import CrossMenu from '@src/components/layout/CrossMenu';

const NavigationMobile = props => (
  <div>
      <div>
          <CrossMenu handleClose={props.handleClose} />
        </div>
      {props.navi.map(item => (
          <Layout.Header.Navigation.Item key={item.key} to={item.link}>
              {item.label}
            </Layout.Header.Navigation.Item>
        ))}
    </div>
);

export default NavigationMobile;
