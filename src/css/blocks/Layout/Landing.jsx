import styled from 'styled-components';

import withTheme from '@src/css/Theme';


const Landing = styled.section`

    position: relative;
    font-family: 'Montserrat', sans-serif;
    font-size: 11px;
    font-weight: 100;
    color: #ffffff;
    max-width: 60%;
    margin: 0;
    margin-top: 0;
    line-height: 1;
    padding: 0 10% 0;
    padding-top: 150px;
    
    @media only screen and (min-width: 800px) {
        max-width: 40%;
        margin: 0;
        margin-top: 0;
        padding-top: 200px;
        line-height: 1.25;

`;


export default withTheme(Landing);
