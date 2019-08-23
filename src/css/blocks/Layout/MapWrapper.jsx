import styled from 'styled-components';

const MapWrapper = styled.div`
  width: ${props => props.width};
  height: ${props => props.height};
   
  @media only screen and(max-width: 649px){
    min-width: 649px;
    max-height: 40vh;
  }
  @media only screen and(max-width: 813px{
    min-width: 813px;
    
  })
  
`;

export default MapWrapper;
