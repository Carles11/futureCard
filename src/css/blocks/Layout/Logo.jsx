import styled from 'styled-components';

const Logo = styled.figure`
  position: absolute;
  top: 0;
  padding: 0 1rem;
  margin: 0;
  width: 90px;
  flex: 5;
  z-index: 10;
`;

const Image = styled.img`
  position: relative;
  margin: 0;
  margin-bottom: 100px;
  padding: 0;
  width: 100%;
`;

Logo.Image = Image;

export default Logo;
