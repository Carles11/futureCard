import styled from 'styled-components';

import Header from './Header';
import Landing from './Landing';

import Logo from './Logo';
import Navigation from './Navigation';
import Item from './Item';

const Layout = styled.div``;

Layout.Header = Header;
Layout.Header.Logo = Logo;
Layout.Header.Navigation = Navigation;
Layout.Header.Navigation.Item = Item;
Layout.Landing = Landing;


export default Layout;
