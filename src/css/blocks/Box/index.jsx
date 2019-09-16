// @flow

import styled, { css } from 'styled-components';

import Item from './Item';
import Figure from './Figure';
import Link from './Link';


const Box = styled.div`
  position: relative;
  display: flex;
  width: 100%;
  margin: 2rem 0;

  ${props => props.wrap && css`
    flex-wrap: wrap;
  `}

  @media only screen and (max-width: 1024px) {
    flex-direction: column;
  }
`;

Box.Item = Item;
Box.Figure = Figure;
Box.Link = Link;

export default Box;
