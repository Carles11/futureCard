import styled, { css, keyframes } from 'styled-components';

import withTheme from '@src/css/Theme';

const AnimateMove = keyframes`
  0% {
    right: 15px;
  }
  100% {
    right: 20px;
  }
`;

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

  ${props => props.icon
    && css`
      position: absolute;
      top: 55%;
      transform: translateY(-50%);
      right: 15px;
      animation: ${AnimateMove} 0.75s ease-in-out infinite;
      font-size: 1.1rem;
    `}
`;

export default withTheme(Span);
