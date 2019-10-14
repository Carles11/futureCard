import styled from 'styled-components';

import Item from './Item';

const BackgroundBreadcrumb = styled.div`
  display: flex;
  justify-content: center;
  position: absolute;
  bottom: 0;
  width: 100%;
`;

BackgroundBreadcrumb.Item = Item;

export default BackgroundBreadcrumb;
