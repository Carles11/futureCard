import styled from 'styled-components';

import withTheme from '@src/css/Theme';

const Form = styled.form`
position: absolute;
opacity: 0.9;
z-index: 500;

@import "compass/css3";

@import url(https://fonts.googleapis.com/css?family=Open+Sans:400,700,600,300,800);

.row {
  min-width: 600px;
  margin: 0 auto;
  padding: 60px 30px;
  background: ${props => props.theme.background};
  text-align: center;
  margin-top: 400px;
  margin-left: 100px;
  padding: 40px 30px;
  background: whitesmoke;
  
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
<<<<<<< HEAD
    color: white;
=======
>>>>>>> f4b94eda9692d285a84260ecc90f7fc2251e0c1c
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
<<<<<<< HEAD
      background: ${props => props.theme.fontColor}
=======
      background: #134A46; // change this to #134A46
>>>>>>> f4b94eda9692d285a84260ecc90f7fc2251e0c1c
    }
    &:after {
      top: 0;
      bottom: 0;
<<<<<<< HEAD
      background: ${props => props.theme.fontColorDarker};
=======
      background: #377D6A;
>>>>>>> f4b94eda9692d285a84260ecc90f7fc2251e0c1c
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
<<<<<<< HEAD
  color: ${props => props.theme.fontColorDarker};
=======
  color: #377D6A;
>>>>>>> f4b94eda9692d285a84260ecc90f7fc2251e0c1c
  text-indent: 0;
  background: #fff;
  
  &::-webkit-input-placeholder {
<<<<<<< HEAD
    color: ${props => props.theme.fontColor};
=======
    color: #aaa;
>>>>>>> f4b94eda9692d285a84260ecc90f7fc2251e0c1c
  }
  + label {
    transform: translateY(-100%);

    &:before {
      border-radius: 5px;
    }
    &:after {
      transform: translateY(100%);
    }
  }
}
        @media only screen and (max-width: 849px) {
          .row {
            min-width: 450px;
<<<<<<< HEAD
=======
            margin: 0 auto;
>>>>>>> f4b94eda9692d285a84260ecc90f7fc2251e0c1c
            padding: 40px 17px;
            background: ${props => props.theme.background};
            text-align: center;
            
            &:first-child {
              padding: 30px 20px;
              background: whitesmoke;
            }
            
            span {
              position: relative;
              display: block;
              margin: 25px 8px;
            }
          }
          
          .slide-up {
            width: 85%;
            padding: 20px 0 8px 11px;
          
            + label {
              padding: 8px 11px;
              font-size: 15px;
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
<<<<<<< HEAD
            color: ${props => props.theme.fontColorDarker};
=======
            color: #377D6A;
>>>>>>> f4b94eda9692d285a84260ecc90f7fc2251e0c1c
            text-indent: 0;
            background: #fff;
            
            &::-webkit-input-placeholder {
<<<<<<< HEAD
              color: ${props => props.theme.fontColor};
=======
              color: #aaa;
>>>>>>> f4b94eda9692d285a84260ecc90f7fc2251e0c1c
            }
          
            }
          }

@media only screen and (max-width: 649px) {
  .row {
    min-width: 250px;
<<<<<<< HEAD
=======
    margin: 0 auto;
>>>>>>> f4b94eda9692d285a84260ecc90f7fc2251e0c1c
    padding: 40px 17px;
    background: ${props => props.theme.background};
    text-align: center;
    
    &:first-child {
      padding: 30px 20px;
      background: whitesmoke;
    }
    
    span {
      position: relative;
      display: block;
      margin: 25px 8px;
    }
  }
  
  .slide-up {
    width: 75%;
    padding: 20px 0 8px 11px;
    
    + label {
      padding: 8px 11px;
      font-size: 14px;
    }
<<<<<<< HEAD
  }  
  
=======
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
    color: #377D6A;
    text-indent: 0;
    background: #fff;
    
    &::-webkit-input-placeholder {
      color: #aaa;
    }
    
  }
>>>>>>> f4b94eda9692d285a84260ecc90f7fc2251e0c1c
}
}`;

export default withTheme(Form);
