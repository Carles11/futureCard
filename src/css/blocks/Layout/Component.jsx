import styled from 'styled-components';
import withTheme from '@src/css/Theme';

const Component = styled.section`
    position: relative;
    font-family: 'Montserrat', sans-serif;
    font-size: calc(16px + (18 - 14) * ((100vw - 300px) / (1600 - 100)));
    font-weight: 100;
    color: #ffffff;
    background: #262938;
    margin: 0;
    padding: 0 40px 0;
    line-height: 1.25;
    height: 100vh;
`;

export default withTheme(Component);
