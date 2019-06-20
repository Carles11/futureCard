import styled from 'styled-components';
import withTheme from '@src/css/Theme';

const Button = styled.button`
color: #262938; 
  padding: 0.25rem 1rem; 
  border: solid 2px coral; 
  border-radius: 3px;
  margin: 0.5rem;
  font-size: 1rem;
  width: 20%;
`;

export default withTheme(Button);
