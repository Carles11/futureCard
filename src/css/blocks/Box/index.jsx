// @flow

import styled from 'styled-components';

import Item from './Item';

const Box = styled.div`
  display: flex;
  width: 100%;
  margin: 2rem 0;

  @media only screen and (max-width: 649px) {
    flex-direction: column;
  }
`;

Box.Item = Item;

export default Box;
