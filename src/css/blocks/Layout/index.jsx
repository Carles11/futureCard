import styled from 'styled-components';

import Header from './Header';
import Landing from './Landing';
import LandingBG from './LandingBG';
import InternPage from './InternPage';
import Component from './Component';

import Logo from './Logo';
import Navigation from './Navigation';
import Item from './Item';
import Vertical from './Vertical';


const Layout = styled.div``;

Layout.Header = Header;
Layout.Header.Logo = Logo;
Layout.Header.Navigation = Navigation;
Layout.Header.Navigation.Item = Item;
Layout.Header.Navigation.Vertical = Vertical;
Layout.Landing = Landing;
Layout.LandingBG = LandingBG;
Layout.InternPage = InternPage;
Layout.Component = Component;


export default Layout;
