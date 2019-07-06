import styled, { css } from 'styled-components';

import withTheme from '@src/css/Theme';

const Header = styled.header`
  display: flex;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 90px;
  z-index: 100;
  color: ${props => props.theme.fontColor};
  ${props => props.positionChange && css`
<<<<<<< HEAD
  position: absolute;
  z-index: 1000 ;
=======
  position: fixed;
  z-index: 1000 important!;
>>>>>>> f4b94eda9692d285a84260ecc90f7fc2251e0c1c
  `}
`;

export default withTheme(Header);
