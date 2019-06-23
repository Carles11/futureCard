import styled from 'styled-components';

import withTheme from '@src/css/Theme';

const Input = styled.input`
color: #ffffff;
background-color: #394141;
    width: 80%; 
  padding: 12px; 
  margin: 11px;
  border: 0px solid #ccc; 
  border-radius: 4px; 
  box-sizing: border-box;
`;

export default withTheme(Input);
