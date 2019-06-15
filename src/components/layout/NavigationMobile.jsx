import React from 'react';
import PropTypes from 'prop-types';

import Layout from '@src/css/blocks/Layout';
import CrossMenu from '@src/components/layout/CrossMenu';

const NavigationMobile = ({ handleClose }) => (
  <div>
    <div>
      <CrossMenu handleClose={handleClose} />
    </div>
    {props.navi.map(item => (
      <Layout.Header.Navigation.Item key={item.key} to={item.link}>
        {item.label}
      </Layout.Header.Navigation.Item>
    ))}
  </div>
);

NavigationMobile.propTypes;

export default NavigationMobile;
