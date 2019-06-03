import styled from 'styled-components';

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
`;

export default withTheme(Header);
