// @flow

import styled, { css } from 'styled-components';

import Item from './Item';
import Figure from './Figure';
import Link from './Link';
import Wrapper from './Wrapper';

const Box = styled.div`
  position: relative;
  display: flex;
  width: 100%;
  margin: 2rem 0;

  ${props => props.wrap
    && css`
      flex-wrap: wrap;
    `}

  @media only screen and (max-width: 1024px) {
    width: 100%;
    flex-direction: column;
  }
`;

const WrapperBg = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 325px;
  z-index: 1;
  opacity: 0.3;
  background: #0d1326;

  ${props => props.isEven
    && css`
      background: white;
    `}
`;

Box.Item = Item;
Box.Figure = Figure;
Box.Link = Link;
Box.Wrapper = Wrapper;
Box.Wrapper.Bg = WrapperBg;

export default Box;
