import styled, { css } from 'styled-components';

import withTheme from '@src/css/Theme';

const HeaderBackground = styled.div`
  width: 100%;
  height: 90px;
  position: absolute;
  top: 0;
  left: 0;
  background: white;
  opacity: 0;
  border-bottom: 1px solid #dddddd;
  transition: opacity 0.3s;

  ${props => props.visible
    && css`
      opacity: 0.95;
    `}
`;

export default withTheme(HeaderBackground);
