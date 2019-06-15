import styled, { css } from 'styled-components';

const Navigation = styled.nav`
  position: absolute;
  right: 2rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  width: auto;
  white-space: nowrap;

  @media only screen and (max-width: 649px){
  ${props => props.direction && css`
   flex-direction: column;
  `}
  }
  `;


export default Navigation;
