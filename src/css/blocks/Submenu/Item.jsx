import React from "react";
import styled, { css } from "styled-components";
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
  width: 150px;
  font-size: 0.8rem;
  color: ${props => props.theme.fontColor};
  text-transform: uppercase;
  text-decoration: none;
  padding: 0.75rem 1rem;
  border-bottom: 1px solid #ededed;

  &:last-of-type {
    border: none;
  }

  ${props =>
    props.active &&
    css`
      background: ${props.theme.mainColor};
      color: white;
    `}

  &:hover {
    background: ${props => props.theme.mainColor};
    color: white;
  }
`;

export default withTheme(Item);
