import styled from 'styled-components';

import withTheme from '@src/css/Theme';
import IMG from '@src/assets/image/FutureCard_BWCreditCard_96ppi.jpg';
// import IMG from '@src/assets/image/FutureCard_WhiteCard_96ppi.jpg';

const LandingBG = styled.section`
background-image: url(${IMG});
background-size: cover;
height: 100vh;
background-repeat: no-repeat;
`;
export default withTheme(LandingBG);
