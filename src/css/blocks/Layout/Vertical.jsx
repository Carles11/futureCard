import styled from 'styled-components';

const Vertical = styled.nav`
  position: absolute;
  right: 2rem;
  display: flex;
  flex-direction: column;
  align-items: right;
  padding-left: 0;
  width: auto;
    @media only screen and (min-width: 601px) {
    display: none;
  }
`;

export default Vertical;
