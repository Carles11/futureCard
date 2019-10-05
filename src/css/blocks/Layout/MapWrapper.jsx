import styled from "styled-components";

const MapWrapper = styled.div`
  width: ${props => props.width};
  height: ${props => props.height};

  @media only screen and(max-width: 1024px) {
    min-width: 1024px;
  }
  @media only screen and(max-width: 813px) {
    min-width: 813px;
  }
  @media only screen and(max-width: 1200px) {
    min-width: 1200px;
  }
`;

export default MapWrapper;
