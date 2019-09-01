// @flow

import styled, { css } from 'styled-components';

const Item = styled.div`
  flex: 1;
  margin: 0 1rem;

  &:first-of-type {
    margin-left: 0;
  }

  &:last-of-type {
    margin-right: 0;
  }

  ${props => props.withBackground
    && css`
      background: #fafafa;
      border: 1px solid #fafafa;
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
    width: 100%;
    margin: 0 0 1rem;

    &:first-of-type,
    &:last-of-type {
      margin: 0 0 1rem;
    }
  }
`;

export default Item;
