import styled from 'styled-components';

const Navigation = styled.nav`
  position: absolute;
  right: 2rem;
  display: flex;
  align-items: center;
  width: auto;
  white-space: nowrap;

  @media only screen and (max-width: 600px) {
    display: none;
  }
`;

export default Navigation;
