import React from 'react';
import styled, { css } from 'styled-components';
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
  position: relative;
  font-size: 0.85rem;
  color: ${props => props.theme.fontColor};
  text-transform: uppercase;
  text-decoration: none;
  margin: 0;
  border-top: 2px solid transparent;
  padding: 2.25rem 1.5rem;
  transition: background 0.3s ease-in-out, color 0.3s ease-in-out;

  ${props => props.active
    && css`
      border-top: 2px solid ${props.theme.mainColor};
      background: #f3f3f3;
      color: ${props.theme.mainColor};
      &:hover {
        border-top: 2px solid ${props.theme.mainColor} !important;
        background: #f3f3f3 !important;
        color: ${props.theme.mainColor} !important;
      }
    `}

  &:hover {
    border-top: 2px solid ${props => props.theme.background};
    background: #f3f3f3 !important;
    color: ${props => props.theme.background};
  }

  ${props => props.with_dark
    && css`
      color: white;
    `}

  @media only screen and (max-width: 1024px) {
    width: 60%;
    display: block;
    text-align: center;
    color: white;
    border: none;
    border-bottom: 1px solid #080b16;
    box-sizing: border-box;
    padding: 1.5rem;
    transition: color 0.3s ease-in-out;

    &:last-child {
      border: none;
    }

    &:hover {
      border: none;
      box-sizing: border-box;
      border-bottom: 1px solid #080b16;
      color: ${props => props.theme.mainColor};
      &:last-child {
        border: none;
      }
    }

    ${props => props.active
      && css`
        border: none;
        box-sizing: border-box;
        border-bottom: 1px solid #080b16;
        color: ${props.theme.mainColor};
        &:last-child {
          border: none;
        }
      `}
  }
`;

const Wrapper = styled.div`
  position: relative;
  @media only screen and (max-width: 1024px) {
    width: 60%;
    border: none;
  }
`;

Link.Wrapper = Wrapper;

export default withTheme(Link);
