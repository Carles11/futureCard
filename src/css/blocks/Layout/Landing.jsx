import styled from 'styled-components';

import withTheme from '@src/css/Theme';
import IMG from '@src/assets/image/FutureCard_Landing_96ppi.jpg';


const Landing = styled.section`
    position: relative;
    font-family: 'Raleway', sans-serif;
    font-size: calc(16px + (18 - 14) * ((100vw - 300px) / (1600 - 100)));
    font-weight: 100;
    color: #ffffff;
    background-image: url(${IMG});
    margin: 0;
    padding: 0;
    line-height: 1.25;
    height: 100vh;
`;

export default withTheme(Landing);
