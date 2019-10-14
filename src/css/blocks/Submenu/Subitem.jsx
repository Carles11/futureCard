import React from 'react';
import styled, { css } from 'styled-components';
import { NavLink } from 'react-router-dom';

import withTheme from '@src/css/Theme';

const Item = styled(
  ({
    children,
    dispatch,
    forwardedComponent,
    forwardedRef,
    history,
    location,
    match,
    staticContext,
    theme,
    ...rest
  }) => <NavLink children={children} {...rest} />,
)`
  width: auto;
  font-size: 0.8rem;
  color: ${props => props.theme.fontColor};
  text-transform: uppercase;
  text-decoration: none;
  padding: 0.5rem 0;
  margin: 0 0 0 3rem;

  &:hover {
    text-decoration: underline;
  }

  ${props => props.active
    && css`
      color: ${props.theme.mainColor};
    `}
`;

export default withTheme(Item);
