// @flow

import styled, { css } from 'styled-components';

import withTheme from '@src/css/Theme';

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

  ${props => props.wrapping
    && css`
      flex-wrap: wrap;
    `}

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
    `};

    ${props => props.queryColumn
      && css`
        @media only screen and (max-width: 649px) {
          flex-direction: column;
          width: 100%;
        }fontColorDarker
      `};

  ${props => props.maxWidth
    && css`
      width: 100%;
    `};

  ${props => props.withPadding
    && css`
      padding: ${props.withPadding};
    `}

  ${props => props.withMargin
    && css`
      margin: ${props.withMargin} !important;
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
  
  ${props => props.darker
    && css`
      background: ${props.theme.fontColorDarker};
    `}
`;

export default withTheme(Grid);