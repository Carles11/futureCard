// @flow

import styled, { css } from 'styled-components';

const Item = styled.div`
  position: relative;
  flex: 1;
  margin: 0 0.75rem;
  padding: 0.75rem;

  &:first-of-type {
    margin-left: 0;
  }

  &:last-of-type {
    margin-right: 0;
  }

  ${props => props.with_size
    && css`
      flex: auto;
      width: ${props.with_size};
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

  ${props => props.withScale
    && css`
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

export default Item;
