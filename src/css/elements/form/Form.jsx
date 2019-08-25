import styled from 'styled-components';

import withTheme from '@src/css/Theme';

const Form = styled.form`
<<<<<<< HEAD
opacity: 0.9;
z-index: 500;

.row {
  margin: 0 auto;
  background: ${props => props.theme.background};
  text-align: center;
  margin-left: 100px;
  
  &:first-child {
  }
  
  span {
    position: relative;
    display: block;
    margin: 30px 10px;
  }
}

.slide-up {
  display: inline-block;
  width: 90%;
  padding: 30px 0 10px 15px;
  font-family: "Open Sans", sans;
  font-weight: 400;
  color: ${props => props.theme.mainColor};
  background: #efefef;
  border: 0;
  border-radius: 3px;
  outline: 0;
  text-indent: 80px; // Arbitrary.
  transition: all .3s ease-in-out;
  
  &::-webkit-input-placeholder {
    color: #efefef;
    text-indent: 0;
    font-weight: 300;
  }

  + label {
    display: inline-block;
    position: absolute;
    transform: translateX(0);
    top: 0;
    left: 0;
    padding: 10px 15px;
    color: white;
    text-shadow: 0 1px 0 rgba(19,74,70,.4);
    transition: all .3s ease-in-out;
    border-top-left-radius: 3px;
    border-bottom-left-radius: 3px;
    overflow: hidden;

    &:before,
    &:after {
      content: "";
      position: absolute;
      right: 0;
      left: 0;
      z-index: -1;
      transition: all .3s ease-in-out;
    }
    &:before {
      // Skinny bit here
      top: 6px;
      left: 5px;
      right: 5px;
      bottom: 6px;
      background: ${props => props.theme.fontColor}
    }
    &:after {
      top: 0;
      bottom: 0;
      background: ${props => props.theme.fontColorDarker};
    }
  }
}
span:nth-child(1) .slide-up {
  text-indent: 105px;
}
span:nth-child(3) .slide-up {
  text-indent: 125px;
}
span:nth-child(1) .slide-up:focus,
span:nth-child(1) .slide-up:active,
span:nth-child(3) .slide-up:focus,
span:nth-child(3) .slide-up:active {
  text-indent: 0;
}
.slide-up:focus,
.slide-up:active {
  color: ${props => props.theme.fontColorDarker};
  text-indent: 0;
  background: #fff;
=======
  display: flex;
  flex-direction: column;
  width: 100%;
  height: auto;
  display: -webkit-flex; /* Safari */
  display: flex;
  z-index: 500;
>>>>>>> contact
  
  @media only screen and (min-width: 649px){
    width: 50%;
  }
`;

export default withTheme(Form);
