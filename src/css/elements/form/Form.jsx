import styled, { css } from 'styled-components';

import withTheme from '@src/css/Theme';

const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: auto;
  display: -webkit-flex; /* Safari */
  display: flex;
  z-index: 500;

  ${props => props.center
    && css`
      align-self: center;
      width: 70%;
    `}
  @media only screen and (max-width: 1024px){
    width: 90%;

  }
`;

export default withTheme(Form);
