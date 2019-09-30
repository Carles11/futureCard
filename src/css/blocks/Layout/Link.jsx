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
  margin: 0 0.25rem;
  padding: 0.5rem 0.5rem 0.5rem;
  border-bottom: 3px solid transparent;
  transition: border-color 0.3s ease-in-out;

  ${props =>
    props.active &&
    css`
      border-bottom: 3px solid ${props.theme.mainColor};
    `}

  &:hover {
    border-bottom: 3px solid ${props => props.theme.background};
  }

  ${props =>
    props.with_dark &&
    css`
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

    ${props =>
      props.active &&
      css`
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
