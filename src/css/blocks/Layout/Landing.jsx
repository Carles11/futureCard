import styled from 'styled-components';

import withTheme from '@src/css/Theme';


const Landing = styled.section`
    position: relative;
    font-family: 'Montserrat', sans-serif;
    font-size: calc(16px + (18 - 14) * ((100vw - 300px) / (1600 - 100)));
    font-weight: 100;
    color: #ffffff;
    max-width: 40%;
    margin: 0;
    margin-top: 0;
    padding: 0 10% 0;
    line-height: 1.25;
    padding-top: 250px;

`;


export default withTheme(Landing);
