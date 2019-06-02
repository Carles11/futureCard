import React from 'react';

import Layout from '@src/css/blocks/Layout';

import logo from '@src/assets/image/logo_white.png';

const Header = () => (
  <Layout.Header>
    <Layout.Header.Logo>
      <img src={logo} alt="Futurecard logo" />
    </Layout.Header.Logo>
  </Layout.Header>
);

export default Header;
