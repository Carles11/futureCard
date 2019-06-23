import styled from 'styled-components';

import withTheme from '@src/css/Theme';

const ContactForm = styled.section`
margin-left: 0;
display: flex;
flex-direction: column;
item
position: absolute;
background-color: #454f4f;
width: 95%;
opacity: 0.9;
  border-radius: 4px; 
  box-sizing: border-box;

  @media only screen and (min-width: 605px){
      width: 50%;

  }
   @media only screen and (min-width: 1200px){
      width: 40%;

  }
`;
export default withTheme(ContactForm);
