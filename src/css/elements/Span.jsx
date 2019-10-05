import styled, { css } from 'styled-components';

import withTheme from '@src/css/Theme';

const Span = styled.span`
  ${props => props.invertColor
    && css`
      color: ${props.theme.mainColor};
    `}

  ${props => props.tag
    && css`
      border-radius: 3px;
      border: 1px solid ${props.theme.mainColor};
      color: ${props.theme.mainColor};
      padding: 0.15rem 0.5rem;
      font-size: 0.85rem !important;
      font-weight: 100;
      line-height: 1.1rem;
    `}
`;

export default withTheme(Span);
