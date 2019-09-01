import styled from 'styled-components';

import Content from './Content';
import Footer from './Footer';
import Header from './Header';
import HeaderBackground from './HeaderBackground';
import Item from './Item';
import ItemFooter from './ItemFooter';
import Link from './Link';
import LinkFooter from './LinkFooter';
import Logo from './Logo';
import MapWrapper from './MapWrapper';
import Navigation from './Navigation';
import Overlay from './Overlay';
import Container from './Container';

const Layout = styled.div``;

Layout.Header = Header;
Layout.Header.Overlay = Overlay;
Layout.Header.Logo = Logo;
Layout.Header.Navigation = Navigation;
Layout.Header.Navigation.Link = Link;
Layout.Header.Navigation.Item = Item;
Layout.Header.Navigation.Container = Container;
Layout.Header.HeaderBackground = HeaderBackground;
Layout.Content = Content;
Layout.MapWrapper = MapWrapper;
Layout.Footer = Footer;
Layout.Footer.Link = LinkFooter;
Layout.Footer.Item = ItemFooter;

export default Layout;
