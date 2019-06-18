

import styled from 'styled-components';

const BurgerMenuIcon = styled.label`
    
    $color: #fff;

    display: block;
    cursor: pointer;
    input {
        display: none;
        & + div {
            width: 20px;
            height: 14px;
            position: relative;
            div {
                position: absolute;
                left: 0;
                top: 0;
                right: 0;
                bottom: 0;
                transition: transform .5s ease;
                span {
                    display: block;
                    position: absolute;
                    left: 0;
                    right: 0;
                    &:first-child {
                        top: 0;
                        &:before,
                        &:after {
                            top: 0;
                        }
                    }
                    &:last-child {
                        bottom: 0;
                        &:before,
                        &:after {
                            bottom: 0;
                        }
                    }
                    &:before,
                    &:after {
                        content: '';
                        display: block;
                        width: 47%;
                        height: 2px;
                        border-radius: 1px;
                        background: $color;
                        position: absolute;
                        -webkit-backface-visibility: hidden;
                        transition: transform .5s ease, border-radius .3s ease;
                    }
                    &:before {
                        left: 0;
                        transform-origin: 0 50%;
                        transform: translate(1px, 0) scaleX(1.1);
                    }
                    &:after {
                        right: 0;
                        transform-origin: 100% 50%;
                        transform: translate(-1px, 0) scaleX(1.1);
                    }
                }
            }
            svg {
                display: block;
                fill: none;
                stroke: $color;
                stroke-width: 2px;
                width: 44px;
                height: 44px;
                stroke-linecap: round;
                position: absolute;
                left: 50%;
                top: 50%;
                margin: -22px 0 0 -22px;
                stroke-dasharray: 0 82.801 8 82.801;
                stroke-dashoffset: 82.801;
                transform-origin: 50% 50%;
                -webkit-backface-visibility: hidden;
                transform: scale(1);
                transition: stroke-dashoffset .5s ease, stroke-dasharray .6s ease, transform .5s ease;
                &:nth-child(3) {
                    transform: rotate(180deg) scale(1);
                }
            }
        }
        &:checked + div {
            div {
                transform: rotate(90deg);
                span {
                    &:first-child {
                        &:before {
                            transform: rotate(45deg) translate(2.2px, -3px) scaleX(1.05);
                        }
                        &:after {
                            transform: rotate(-45deg) translate(-2.2px, -3px) scaleX(1.05);
                        }
                    }
                    &:last-child {
                        &:before {
                            transform: rotate(-45deg) translate(2.2px, 3px) scaleX(1.05);
                        }
                        &:after {
                            transform: rotate(45deg) translate(-2.2px, 3px) scaleX(1.05);
                        }
                    }
                }
            }
            svg {
                stroke-dashoffset: 62;
                stroke-dasharray: 0 82.801 62 82.801;
                transform: rotate(90deg);
                &:nth-child(3) {
                    transform: rotate(270deg);
                }
            }
        }
    }


html {
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
}

* {
    box-sizing: inherit;
    &:before,
    &:after {
        box-sizing: inherit;
    }
}

// Center & dribbble
body {
    min-height: 100vh;
    font-family: Roboto, Arial;
    color: #ADAFB6;
    background: #5628EE;
    display: flex;
    justify-content: center;
    align-items: center;
    .dribbble {
        position: fixed;
        display: block;
        right: 24px;
        bottom: 24px;
        img {
            display: block;
            width: 76px;
        }
    }
}


##########################
span {
    position: relative;
    height: 65px;
    /* this can be anything */
    width: 65px;
    /* ...but maintain 1:1 aspect ratio */
    display: flex;
    flex - direction: column;
    justify - content: right;
    cursor: pointer;
}

span:: before,
    span:: after {
    position: absolute;
    content: '';
    width: 100 %;
    height: 9px;
    /* cross thickness */
    background: #0a6284;
}

span:: before {
    transform: rotate(45deg);
}

span:: after {
    transform: rotate(-45deg);
}
`;

export default BurgerMenuIcon;
