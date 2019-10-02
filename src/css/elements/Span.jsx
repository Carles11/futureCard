import styled, { css } from 'styled-components';

import withTheme from '@src/css/Theme';

const Span = styled.span`
  ${props => props.invertColor
    && css`
      color: ${props.theme.mainColor};
    `}
`;

export default withTheme(Span);
