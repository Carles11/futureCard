import React from "react";
import styled, { css } from "styled-components";
import { Link } from "react-router-dom";

import withTheme from "@src/css/Theme";

const buttonDefault = css`
  position: relative;
  display: inline-block;
  background: transparent;
  color: ${props => props.theme.mainColor};
  margin: 0;
  padding: 0.9rem 2.25rem 0.8rem;
  font-size: 0.9rem;
  font-weight: 300;
  letter-spacing: 0.05em;
  text-align: center;
  text-transform: uppercase;
  text-shadow: none;
  text-decoration: none;
  border-radius: 12rem;
  border: 2px solid ${props => props.theme.mainColor};
  box-shadow: none;
  outline: none;
  cursor: pointer;
  overflow: hidden;
  transition: color 0.3s ease-in-out, background-color 0.3s ease-in-out,
    border-color 0.3s ease-in-out;

  ${props => css`
     background: transparent
      color: ${props.theme.mainColor};
      border: 2px solid ${props.theme.mainColor};

    &:hover {
    background: ${props.theme.mainColor};
    color: white;
    border: 2px solid ${props.theme.mainColor};
     
    }
  `}

  ${props =>
    props.align &&
    css`
      text-align: ${props.align};
    `}
`;

const A = styled(
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
  }) => <Link children={children} {...rest} />
)`

  ${props =>
    props.role === "button" &&
    css`
      ${buttonDefault}

      ${props.invert &&
        css`
          color: ${props.theme.mainColor};
          border: 2px solid ${props.theme.primary};
          background: ${props.theme.primary};

          &:hover {
            color: ${props.theme.primary};
            background: transparent;
            border: 2px solid ${props.theme.primary} !important;
          }
        `}
    `}

  ${props =>
    props.role === "link" &&
    css`
      color: ${props.theme.mainColor};
      font-size: 1rem;
      padding-bottom: 0.5rem;

      &:hover {
        color: ${props.theme.mainColor};
        text-decoration: none;
      }
    `}

  ${props =>
    props.role === "icon" &&
    `
      color: white;
      font-size: 1rem;
      text-decoration: none;
      cursor: pointer;

      &:hover {
        color: ${props.theme.mainColor};
        text-decoration: none;
      }
  `}

  ${props =>
    props.state === "disabled" &&
    css`
      opacity: 0.5;
      cursor: not-allowed;
      &:hover {
        background: ${props.theme.backgroundSecundary};
      }
    `}
    
  ${props =>
    props.withicon &&
    css`
      font-size: 1.3rem;
      padding: 1rem;
      display: block;
      line-height: 0;

      &:hover {
        color: white;
        background: ${props.theme.mainColor};
        border: 2px solid ${props.theme.mainColor} !important;
      }
    `}

    ${props =>
      props.withmargin &&
      css`
        margin: ${props.withmargin} !important;
      `}

    ${props =>
      props.withpadding &&
      css`
        box-sizing: border-box;
        margin: ${props.withpadding} !important;
      `}

    ${props =>
      props.tiny &&
      css`
        font-size: 0.8rem;
        display: block;
      `}
      
`;

const Icon = styled.i`
  margin-right: 0.5rem;
`;

A.Icon = Icon;

export default withTheme(A);
