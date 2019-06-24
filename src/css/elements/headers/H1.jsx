import styled, { css } from 'styled-components';

import withTheme from '@src/css/Theme';


const H1 = styled.h1`
  color: ${props => props.theme.textColor};

  ${props => props.invertColor && css`
    color: #ffffff;
  `}
  ${props => props.sansSerif && css`
    font-family: "Raleway", sans-serif;
  `}
  ${props => props.upperCase && css`
    text-transform: upperCase;
  `}
`;

export default withTheme(H1);