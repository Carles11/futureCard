import styled from 'styled-components';

import withTheme from '@src/css/Theme';

import Item from './Item';
import Subitem from './Subitem';

const Submenu = styled.div`
  position: fixed;
  top: 90px;
  left: 0;
  width: 100%;
  display: flex;
  justify-content: flex-end;
  background: #f3f3f3;
  opacity: 1;
  padding: 0 0 1rem;
  text-transform: capitalize;
  overflow: hidden;

  @media only screen and (max-width: 1024px) {
    display: none;
  }
`;

Submenu.Item = Item;
Submenu.Subitem = Subitem;

export default withTheme(Submenu);
