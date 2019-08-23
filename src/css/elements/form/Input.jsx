import styled from 'styled-components';
import withTheme from '@src/css/Theme';

const Input = styled.input`
border: none;
border-bottom: 2px solid ${props => props.theme.mainColor};
width: auto;
margin: 10px 17px 17px 17px;
color: ${props => props.theme.mainColor}

@media only screen and (min-width: 649px){
  margin: 10px;
}
`;

export default withTheme(Input);
