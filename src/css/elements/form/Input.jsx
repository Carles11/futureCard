import styled from 'styled-components';
import withTheme from '@src/css/Theme';

const Input = styled.input`
border: none;
border-bottom: 1px solid ${props => props.theme.mainColor};
width: auto;
margin: 10px 17px 17px 17px;
color: ${props => props.theme.fontColor}
input:invalid {
  border: 2px solid red;
}

@media only screen and (min-width: 649px){
  margin: 10px;
}
`;

export default withTheme(Input);
