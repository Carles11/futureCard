import styled from 'styled-components';

import withTheme from '@src/css/Theme';

const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 500px;
  height: 500px;
  display: -webkit-flex; /* Safari */
  display: flex;
  z-index: 500;
`;

export default withTheme(Form);
