import styled from "styled-components";

import withTheme from "@src/css/Theme";

import List from "./List";
import Item from "./Item";
import Header from "./Header";
import Link from "./Link";

const Breadcrumb = styled.nav`
  display: none;

  @media only screen and (max-width: 1024px) {
    display: block;
    position: -webkit-sticky;
    position: sticky;
    top: 90px;
    background: #fafafa;
    opacity: 0.9;
    z-index: 9;
  }
`;

Breadcrumb.List = List;
Breadcrumb.Item = Item;
Breadcrumb.Item.Link = Link;
Breadcrumb.Header = Header;

export default withTheme(Breadcrumb);
