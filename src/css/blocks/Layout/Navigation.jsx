import styled, { css } from 'styled-components';

const Navigation = styled.nav`
  position: absolute;
  right: 0;
  display: flex;
  align-items: center;
  width: auto;
  z-index: 1100;

  @media only screen and (max-width: 1024px) {
    display: none;
    flex-direction: column;
    justify-content: center;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;

    ${props => props.visible
      && css`
        display: flex;
      `}
  }
  @media only screen and (max-width: 1024px) and (orientation: landscape) {
    padding: 6rem 0;
    overflow-y: scroll;
  }
`;

export default Navigation;
