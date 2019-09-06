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
    display: block;
    opacity: 0;
  }
  100% {
    display: block;
    opacity: 1;
    top: 2rem
  }
`;

const Submenu = styled.div`
  position: absolute;
  top: 31px;
  left: 0;
  width: 175px;
  display: flex;
  flex-direction: column;
  background: white;
  box-shadow: 0px 0px 5px 0px rgba(224, 224, 224, 0.75);
  border-top: 3px solid ${props => props.theme.mainColor};

  ${props => props
    && css`
      animation: ${AnimateVisibility} 0.25s ease-in-out 0s;
    `}

  @media only screen and (max-width: 1024px) {
    display: none;
  }
`;

Submenu.Item = Item;

export default withTheme(Submenu);
