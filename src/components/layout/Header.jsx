import React, { useState } from 'react';
import Layout from '@src/css/blocks/Layout';

import logo from '@src/assets/image/logo_white.png';
import NavigationDesktop from '@src/components/layout/NavigationDesktop';
import NavigationMobile from '@src/components/layout/NavigationMobile';
import BurgerMenu from '@src/components/layout/BurgerMenu';

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
  {
    key: 4,
    label: 'Contact',
    link: '/contact',
    fn: null,
  },
];

const Header = () => {
  const [visible, setVisible] = useState(false);

  const handleVisibility = () => {
    setVisible(!visible);
  };


  return (
    <Layout.Header>
      <Layout.Header.Logo>
        <Layout.Header.Logo.Image src={logo} alt="Futurecard logo" />
      </Layout.Header.Logo>
      <Layout.Header.Navigation direction={visible}>
        {visible ? <NavigationDesktop visibility={handleVisibility} navi={NAVIGATION} /> : <BurgerMenu visibility={handleVisibility} />}
      </Layout.Header.Navigation>
    </Layout.Header>
  );
};

export default Header;
