import styled from 'styled-components';

import withTheme from '@src/css/Theme';

const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: auto;
  display: -webkit-flex; /* Safari */
  display: flex;
  z-index: 500;
  
  @media only screen and (min-width: 649px){
    width: 70%;
  }
`;

export default withTheme(Form);
