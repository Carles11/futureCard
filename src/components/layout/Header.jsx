import React, { useState } from 'react';
import Layout from '@src/css/blocks/Layout';

import logo from '@src/assets/image/logo_white.png';
import NavigationDesktop from '@src/components/layout/NavigationDesktop';
import NavigationMobile from '@src/components/layout/NavigationMobile';
import BurgerMenu from '@src/components/layout/BurgerMenu';

const Header = () => {
  const [showDropDown, setShowDropDown] = useState(false);

  const handleClick = () => {
    setShowDropDown(true);
  };
  const handleClose = () => {
    setShowDropDown(false);
  };

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
  return (
    <Layout.Header>
      <Layout.Header.Logo>
        <Layout.Header.Logo.Image src={logo} alt="Futurecard logo" />
      </Layout.Header.Logo>
      <div>
        <Layout.Header.Navigation>
          {showDropDown ? <NavigationDesktop navi={NAVIGATION} /> : <BurgerMenu handleClick={handleClick} />}
        </Layout.Header.Navigation>
        <Layout.Header.Navigation.Vertical>
          {showDropDown ? <NavigationMobile handleClose={handleClose} navi={NAVIGATION} /> : <BurgerMenu handleClick={handleClick} />}
        </Layout.Header.Navigation.Vertical>
      </div>
    </Layout.Header>
  );
};

export default Header;
