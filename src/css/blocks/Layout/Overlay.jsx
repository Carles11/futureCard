import styled, { css } from 'styled-components';

import withTheme from '@src/css/Theme';

const Overlay = styled.div`
  display: none;
  position: fixed;
  top: 0;
  width: 100%;
  height: 100vh;
  background: ${props => props.theme.fontColor};
  z-index: 1;
  opacity: 0.99;

  @media only screen and (max-width: 649px) {
    ${props => props.visible
    && css`
        display: block;
      `}
  }
`;

export default withTheme(Overlay);
