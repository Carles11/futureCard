// @flow

import React from 'react';
import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';

import withTheme from '@src/css/Theme';

const buttonDefault = css`
  position: relative;
  display: inline-block;
  background: transparent;
  color: ${props => props.theme.mainColor};
  margin: 0;
  padding: 0.9rem 3rem;
  font-size: 0.8rem;
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
    color: ${props.theme.mainColor};
    border: 2px solid ${props.theme.mainColor};

    &:hover {
      color: white;
      border: 2px solid ${props.theme.mainColor};
      background: ${props.theme.mainColor};
    }
  `}

  ${props => props.align
    && css`
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
  }) => <Link children={children} {...rest} />,
)`
  ${props => props.role === 'button'
    && css`
      ${buttonDefault}

      ${props.invert
        && css`
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

  ${props => props.role === 'link'
    && css`
      color: ${props.theme.mainColor};
      text-decoration: none;
      font-size: 1rem;
      padding-bottom: 0.5rem;

      &:hover {
        color: ${props.theme.mainColor};
        text-decoration: none;
      }
    `}

  ${props => props.state === 'disabled'
    && css`
      opacity: 0.5;
      cursor: not-allowed;
      &:hover {
        background: ${props.theme.backgroundSecundary};
      }
    `}
    
`;

const Icon = styled.i`
  margin-right: 0.5rem;
`;

A.Icon = Icon;

export default withTheme(A);
