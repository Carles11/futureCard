import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

import withTheme from "@src/css/Theme";

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
  }) => <NavLink children={children} {...rest} />
)`
  width: auto;
  max-width: 300px;
  font-size: 0.85rem;
  font-weight: bold;
  color: ${props => props.theme.background};
  text-transform: uppercase;
  text-decoration: none;
  padding: 1.5rem 0 0.5rem;
  margin: 0 0 0.5rem 3rem;
  border-bottom: 2px solid ${props => props.theme.background};
  transition: color 0.3s ease-in-out, border-color 0.3s ease-in-out;

  &:hover {
    color: ${props => props.theme.mainColor};
    border-color: ${props => props.theme.mainColor};
  }
`;

export default withTheme(Item);
