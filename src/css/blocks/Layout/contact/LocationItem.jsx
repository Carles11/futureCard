import styled from 'styled-components';

import withTheme from '@src/css/Theme';

const LocationItem = styled.li`
        display: table-cell;
        padding: 15px;
        background: #228B22;
        border-right: solid thin lighten(#228B22, 10%);
        &:last-of-type {
          border-right: 0;
        }
        &:hover {
          background: darken(#228B22, 10%);
        }

`;

export default withTheme(LocationItem);
