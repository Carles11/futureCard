import React from 'react';

import Layout from '@src/css/blocks/Layout';

const NavigationDesktop = props => (
  <div>
    {props.navi.map(item => (
      <Layout.Header.Navigation.Item key={item.key} to={item.link}>
        {item.label}
      </Layout.Header.Navigation.Item>
    ))}
  </div>
);

export default NavigationDesktop;
