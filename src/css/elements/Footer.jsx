import styled from 'styled-components';

import withTheme from '@src/css/Theme';

const Footer = styled.footer`
  width: 100%;
  height: auto;
  background: ${props => props.theme.fontColor};
  padding: 2rem 5%;
  box-sizing: border-box;

  @media only screen and (max-width: 649px) {
    width: 100%;
    padding: 2.5rem;
  }
`;

export default withTheme(Footer);
