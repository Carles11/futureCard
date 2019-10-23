import React from 'react';
import styled, { css } from 'styled-components';
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
  flex: 1;
  margin: 0 0.75rem;
  text-decoration: none;


  ${props => props.wrap
    && css`
      flex: auto;
      width: 525px !important;
      margin: 0 0 1.5rem;

      @media only screen and (max-width: 1024px) {
        width: 100% !important;
        margin: 0 !important;
      }
    `}

    ${props => props.wrap_space
      && css`
        flex: none;
        width: 425px !important;
        margin: 0 0.75rem 1.5rem !important;

        @media only screen and (max-width: 1024px) {
          width: 100% !important;
        }
      `}

  ${props => props.centered
    && css`
      margin: 50px;
    `}

  ${props => props.noMargin
    && css`
      margin: 0;
    `} 

  ${props => props.with_height
    && css`
      position: relative;
      flex: auto !important;
      width: 150%;
      padding: 0;
      height: ${props.with_height};
      background-position: 50% 50%;
      background-size: cover;
      background-repeat: no-repeat;
      transition: width 0.3s ease-in-out;

      @media only screen and (max-width: 1024px) {
        width: 100%;
        height: ${props.with_height};
      }
    `}
    
  ${props => props.nomargin
    && css`
      margin: 0;
    `}

  ${props => props.with_background
    && css`
      background: #f3f3f3;
      border: 1px solid #f3f3f3;
    `}

  

  ${props => props.with_scale
    && css`
      transform: scale(1);
      box-shadow: 0;
      transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out,
        border-color 0.3s ease-in-out;

      &:hover {
        box-shadow: 0px 0px 25px 0px rgba(224, 224, 224, 0.5);
        transform: scale(1.1);
        border-color: #eaeaea;
        z-index: 1;
      }
    `}
    
    ${props => props.with_background_white
      && css`
        background: white !important;
        border: 1px solid #eeeeee !important;
      `}

  @media only screen and (min-width: 1024px) and (max-width: 1080px) {
    margin: 0 0.5rem;
  }

  @media only screen and (max-width: 1024px) {
    margin: 0 0 1rem;

    &:first-of-type,
    &:last-of-type {
      margin: 0 0 1rem;
    }
  }
`;

export default withTheme(LinkComponent);
