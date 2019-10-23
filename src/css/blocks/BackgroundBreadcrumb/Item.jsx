import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

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
    invert,
    staticContext,
    theme,
    ...rest
  }) => <Link children={children} {...rest} />,
)`
  background: transparent;
  color: white;
  padding: 1rem;
  text-decoration: none;
  border-right: 1px solid white;
  text-transform: uppercase;
  transform: 

  &:last-of-type {
    border: none;
  }
`;

export default withTheme(Item);
