import styled, { css } from 'styled-components';

const Container = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: ${props => `${props.position}px`};
  box-sizing: border-box;
  background: white;
  z-index: 1;
  padding: 0 0 3rem;

  ${props => props.background
    && css`
      background: #f5f5f5;
    `}

  ${props => props.nopadding
    && css`
      padding: 0;
      @media only screen and (min-width: 768px) and (max-width: 1224px) {
        padding: 0 !important;
      }

      @media only screen and (max-width: 768px) {
        padding: 0 !important;
      }
    `}

  @media only screen and (min-width: 768px) and (max-width: 1224px) {
    padding: 5%;
  }

  @media only screen and (max-width: 768px) {
    flex-direction: column;
    padding: 1.5rem 0.5rem;
  }
`;

export default Container;
