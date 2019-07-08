import styled, { css } from 'styled-components';

const Navigation = styled.nav`
  position: absolute;
  right: 2rem;
  display: flex;
  align-items: center;
  width: auto;
  z-index: 10;

  @media only screen and (max-width: 649px) {
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
`;

export default Navigation;
