import styled from 'styled-components';

import Header from './Header';
import Logo from './Logo';
import Navigation from './Navigation';
import Link from './Link';
import Item from './Item';
import Overlay from './Overlay';
import HeaderBackground from './HeaderBackground';

const Layout = styled.div``;

Layout.Header = Header;
Layout.Header.Overlay = Overlay;
Layout.Header.Logo = Logo;
Layout.Header.Navigation = Navigation;
Layout.Header.Navigation.Link = Link;
Layout.Header.Navigation.Item = Item;
Layout.Header.HeaderBackground = HeaderBackground;

export default Layout;
