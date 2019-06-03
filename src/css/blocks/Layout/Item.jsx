import React from 'react';
import styled from 'styled-components';
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
  color: ${props => props.theme.fontColor};
  text-transform: uppercase;
  text-decoration: none;
  margin: 0 0.25rem;
  padding: 0 0.25rem 0.5rem;
  border-bottom: 3px solid transparent;
  transition: border-color 0.3s ease-in-out;

  &.active,
  &:hover {
    border-bottom: 3px solid ${props => props.theme.mainColor};
  }
`;

export default withTheme(Item);
