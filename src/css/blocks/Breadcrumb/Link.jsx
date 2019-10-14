import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

import withTheme from '@src/css/Theme';

const LinkComponent = styled(
  ({
    children,
    dispatch,
    forwardedComponent,
    forwardedRef,
    history,
    location,
    match,
    invert,
    staticContext,
    theme,
    ...rest
  }) => <NavLink children={children} {...rest} />,
)`
  display: block;
  color: ${props => props.theme.fontColor};
  text-decoration: none;
  font-size: 0.8rem;
  background: #f3f3f3;
  border-bottom: 1px solid #dddddd;
  padding: 1rem 2.5rem;

  &.active,
  &:hover {
    color: ${props => props.theme.mainColor};
    text-decoration: none;
    background: white;
  }
`;

export default withTheme(LinkComponent);
