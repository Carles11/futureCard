import styled, { css, keyframes } from 'styled-components';

import withTheme from '@src/css/Theme';

import Item from './Item';

const AnimateVisibility = keyframes`
  0% {
    display: none;
    opacity: 0;
    top: 1rem;
  }
  1% {
    display: flex;
    opacity: 0;
  }
  100% {
    display: flex;
    opacity: 1;
    top: 3.7rem
  }
`;

const Breadcrumb = styled.ul`
  @media only screen and (max-width: 1024px) {
    position: absolute;
    list-style: none;
    flex-direction: column;
    background: white;
    opacity: 0;
    padding: 0;
    margin: 0;
    transition: top 0.3s ease-in-out;
    top: 0;

    ${props => props.visible
      && css`
        animation: ${AnimateVisibility} 0.25s ease-in-out 0s;
        top: 3.7rem;
        opacity: 0.99;
        width: 100%;
      `}

    ${props => props.centered
      && css`
        justify-content: center;
      `}
  }
`;

Breadcrumb.Item = Item;

export default withTheme(Breadcrumb);
