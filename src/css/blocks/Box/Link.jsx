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

  &:first-of-type {
    margin-left: 0;
  }

  &:last-of-type {
    margin-right: 0;
  }

  ${props =>
    props.centered &&
    css`
      margin: 50px;
    `}

  ${props =>
    props.with_background &&
    css`
      background: #fafafa;
      border: 1px solid #fafafa;
    `}

  ${props =>
    props.with_scale &&
    css`
      transform: scale(1);
      box-shadow: 0;
      transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;

      &:hover {
        box-shadow: 0px 0px 25px 0px rgba(224, 224, 224, 1);
        transform: scale(1.1);
        z-index: 1;
      }
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
