import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

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
  }) => <Link children={children} {...rest} />,
)`
  display: block;
  color: ${props => props.theme.fontColor};
  text-decoration: none;
  font-size: 0.8rem;
  background: #f1f1f1;
  border-bottom: 1px solid #dddddd;
  padding: 1rem 2.5rem;
  
  &:hover {
    color: ${props => props.theme.mainColor};
    text-decoration: none;
    background: white;
  }
`;

export default withTheme(LinkComponent);
