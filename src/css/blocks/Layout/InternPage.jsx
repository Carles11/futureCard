import styled from 'styled-components';
import withTheme from '@src/css/Theme';

const InternPage = styled.section`
    position: relative;
    font-family: 'Montserrat', sans-serif;
    font-size: calc(16px + (18 - 14) * ((100vw - 300px) / (1600 - 100)));
    font-weight: 100;
    color: #ffffff;
    background: #262938;
    padding-top: 100px;
    padding-left: 40px;
    margin: 0;
    line-height: 1.25;
    height: 100vh;
`;

export default withTheme(InternPage);