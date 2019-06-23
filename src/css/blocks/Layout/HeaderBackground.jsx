import styled from 'styled-components';

import withTheme from '@src/css/Theme';


const HeaderBackground = styled.div`
  width: 100%;
  height: 90px;
  position: absolute;
  top: 0;
  left: 0;
  background: ${props => props.theme.background}
  opacity: 0.7;
`;

export default withTheme(HeaderBackground);
