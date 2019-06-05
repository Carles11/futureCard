import styled from 'styled-components';
import withTheme from '@src/css/Theme';

const Component = styled.section`
    position: relative;
    font-family: 'Montserrat', sans-serif;
    font-size: calc(16px + (18 - 14) * ((100vw - 300px) / (1600 - 100)));
    font-weight: 100;
    color: #fe4d10;
    background: #ffffff;
    margin-top: 0;
    padding-top: 80px;
    padding-left: 40px;
    line-height: 1.25;
    height: 100vh;
`;

export default withTheme(Component);
