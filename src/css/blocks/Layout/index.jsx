import styled from 'styled-components';

import Header from './Header';
import Logo from './Logo';
import Navigation from './Navigation';
import Link from './Link';
import Item from './Item';
import Overlay from './Overlay';
import HeaderBackground from './HeaderBackground';
import Content from './Content';
import Footer from './Footer';
import LinkFooter from './LinkFooter';
import ItemFooter from './ItemFooter';

const Layout = styled.div``;

Layout.Header = Header;
Layout.Header.Overlay = Overlay;
Layout.Header.Logo = Logo;
Layout.Header.Navigation = Navigation;
Layout.Header.Navigation.Link = Link;
Layout.Header.Navigation.Item = Item;
Layout.Header.HeaderBackground = HeaderBackground;
Layout.Content = Content;
Layout.Footer = Footer;
Layout.Footer.Link = LinkFooter;
Layout.Footer.Item = ItemFooter;

export default Layout;
