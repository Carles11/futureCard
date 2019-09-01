// @flow

import styled from 'styled-components';

import Item from './Item';
import Figure from './Figure';

const Box = styled.div`
  position: relative;
  display: flex;
  width: 100%;
  margin: 2rem 0;

  @media only screen and (max-width: 1024px) {
    flex-direction: column;
  }
`;

Box.Item = Item;
Box.Figure = Figure;

export default Box;
