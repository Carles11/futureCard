// @flow

import styled, { css } from 'styled-components';

import withTheme from '@src/css/Theme';

const Column = styled.th`
  font-size: 0.9rem;
  font-weight: 300;
  vertical-align: center;
  text-align: center;
  color: ${props => props.theme.fontColor};

  &:first-of-type {
    text-align: left;
    padding-left: 2rem;
  }

  ${props => props.widthProp
    && css`
      width: ${`${props.widthProp}%`};
    `};
`;

export default withTheme(Column);
