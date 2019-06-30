// @flow

import styled, { css } from 'styled-components';

const Grid = styled.div`
  display: flex;
  margin: 0 0.5rem;
  box-sizing: border-box;

  &:first-of-type {
    margin-left: 0;
  }

  &:last-of-type {
    margin-right: 0;
  }

  ${props => props.loader
    && css`
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100vh;
    `}

  ${props => props.vertical
    && css`
      justify-content: ${props.vertical};
    `}

  ${props => props.column
    && css`
      flex-direction: column;
      width: 100%;
    `};

  ${props => props.maxWidth
    && css`
      width: 100%;
    `};

  ${props => props.padding
    && css`
      padding: ${props.padding};
    `}

  ${props => props.margin
    && css`
      margin: ${props.margin} !important;
    `}

  ${props => props.middle
    && css`
      align-items: center;
    `}
  
  ${props => props.right
    && css`
      align-items: flex-end;
    `}
  
  ${props => props.flex
    && css`
      flex: ${props.flex};
    `}

  ${props => props.heightProp
    && css`
      height: ${props.heightProp};
    `}
`;

export default Grid;
