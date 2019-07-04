import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

import withTheme from '@src/css/Theme';

const Link = styled(
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
  font-size: 0.9rem;
  color: white;
  text-transform: uppercase;
  text-decoration: none;
  margin: 0;
  padding: 0.5rem 0;
  transition: color 0.3s ease-in-out;

  &:hover {
    color: ${props => props.theme.mainColor};
  }
`;

export default withTheme(Link);