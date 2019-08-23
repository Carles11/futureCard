import styled from 'styled-components';
import withTheme from '@src/css/Theme';

const Input = styled.input`
border: none;
border-bottom: 2px solid ${props => props.theme.mainColor};
width: auto;
margin: 17px;
color: ${props => props.theme.mainColor}
`;

export default withTheme(Input);
