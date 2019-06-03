import React from 'react';

import Layout from '@src/css/blocks/Layout';

import logo from '@src/assets/image/logo_white.png';

const NAVIGATION = [
  {
    key: 0,
    label: 'Home',
    link: '/',
    fn: null,
  },
  {
    key: 1,
    label: 'Products',
    link: '/products',
    fn: null,
  },
  {
    key: 2,
    label: 'Services',
    link: '/services',
    fn: null,
  },
  {
    key: 3,
    label: 'News',
    link: '/news',
    fn: null,
  },
];

const Header = () => (
  <Layout.Header>
    <Layout.Header.Logo>
      <Layout.Header.Logo.Image src={logo} alt="Futurecard logo" />
    </Layout.Header.Logo>
    <Layout.Header.Navigation>
      {NAVIGATION.map(item => (
        <Layout.Header.Navigation.Item key={item.key} to={item.link}>
          {item.label}
        </Layout.Header.Navigation.Item>
      ))}
    </Layout.Header.Navigation>
  </Layout.Header>
);

export default Header;
