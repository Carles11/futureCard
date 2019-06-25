import styled, { css } from 'styled-components';

const Header = styled.header`
 padding: 1rem;
 ${props => props.background && css`
 padding: 5%;
 box-sizing: border-box;
  width: 50%
  position: absolute;
  z-index: 1;
  top: 50%;
  transform: translateY(-50%);
  @media only screen and (max-width: 649px) {
    width: 100%;
    padding: 1rem;
  }
 `}
 ${props => props.backgroundTop && css`
 padding: 5%;
 box-sizing: border-box;
  width: 50%
  position: absolute;
  z-index: 1;
  top: 20%;
  transform: translateY(-50%);
  @media only screen and (max-width: 649px) {
    width: 100%;
    padding: 1rem;
  }
 `}
`;

export default Header;
