import styled from 'styled-components';

import withTheme from '@src/css/Theme';

const Input = styled.input`
color: #262938;
    width: 80%; 
  padding: 12px; 
  margin: 11px;
  border: 1px solid #ccc; 
  border-radius: 4px; 
  box-sizing: border-box;
`;

export default withTheme(Input);
