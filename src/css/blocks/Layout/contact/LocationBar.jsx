

import styled from 'styled-components';

import withTheme from '@src/css/Theme';

const LocationBar = styled.ul`
    position: fixed;
    bottom: 0;
    width: 100%;
    padding: 25px;
    text-align: center;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    background-color: #5FA269;
    align-items: flex-end;
`;

export default withTheme(LocationBar);
