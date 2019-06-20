import styled from 'styled-components';

import withTheme from '@src/css/Theme';

const ContactForm = styled.section`
padding-left: 0;
display: flex;
flex-direction: column;
position: absolute;
background-color: white;
width: 40%;
opacity: 0.6;
`;
export default withTheme(ContactForm);
