import styled from 'styled-components';

import withTheme from '@src/css/Theme';

const TextArea = styled.input`
color: #262938;
    width: 80%; 
    height: 200px;
  padding: 12px; 
  margin: 11px;
  border: 1px solid #ccc; 
  border-radius: 4px; 
  box-sizing: border-box;
`;

export default withTheme(TextArea);
