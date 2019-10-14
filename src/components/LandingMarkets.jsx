/* eslint-disable import/no-duplicates */
import React from 'react';
import PropTypes from 'prop-types';

import HeaderSection from '@src/components/HeaderSection';

import PAYMENT from '@src/assets/icons/futurecard-payment.png';
import IDENTIFICATION from '@src/assets/icons/futurecard-identification.png';
import TRANSPORT_ACCESS from '@src/assets/icons/futurecard-transport2.png';
import TELECOM from '@src/assets/icons/futurecard-telecom.png';
import LOYALTY_RETAIL from '@src/assets/icons/futurecard-loyalty-retail.png';
import {
  Article, Grid, H4, Hr, Image, P,
} from '@src/css/elements';
import Box from '@src/css/blocks/Box';

const SECTIONS = [
  {
    id: 1,
    title: 'PAYMENT',
    link: '/our-solutions/end-to-end-card-solutions/payment',
    icon: PAYMENT,
  },
  {
    id: 2,
    title: 'IDENTIFICATION',
    link: '/our-solutions/end-to-end-card-solutions/identification',
    icon: IDENTIFICATION,
  },
  {
    id: 3,
    title: 'TRANSPORT_ACCESS',
    link: '/our-solutions/end-to-end-card-solutions/transport-and-access',
    icon: TRANSPORT_ACCESS,
  },
  {
    id: 4,
    title: 'TELECOM',
    link: '/our-solutions/end-to-end-card-solutions/telecom',
    icon: TELECOM,
  },
  {
    id: 5,
    title: 'LOYALTY_RETAIL',
    link: '/our-solutions/end-to-end-card-solutions/retail_loyalty',
    icon: LOYALTY_RETAIL,
  },
];

const LandingMarkets = ({ DIC }) => (
  <Article centered>
    <HeaderSection title={DIC.INDUSTRY_FOCUS} subtitle={DIC.ABOUT_US_MARKETS} />

    <Box>
      {SECTIONS.map((section) => {
        const TITLE = `MARKETS_${section.title}`;
        const CONTENT = `MARKETS_DESCRIPTION_${section.title}`;

        return (
          <Box.Link
            to={section.link}
            key={section.id}
            with_scale="true"
            with_background_white="true"
          >
            <Grid
              withIcon
              withPadding="2rem 2rem 1rem"
              flex={1}
              vertical="center"
            >
              <Image src={section.icon} alt="category icon futurecard" />
            </Grid>
            <H4 withMargin="0.5rem" centered>
              {DIC[TITLE]}
            </H4>
            <Hr withSize="80px" withMargin="0 auto 1rem" withAlign="center" />
            <P small withPadding="0 1rem 0.5rem" withAlign="left">
              {DIC[CONTENT]}
            </P>
          </Box.Link>
        );
      })}
    </Box>
  </Article>
);

LandingMarkets.propTypes = {
  DIC: PropTypes.shape({
    LEARN_MORE: PropTypes.string.isRequired,
    NAV_LABEL_MARKETS: PropTypes.string.isRequired,
    ABOUT_US_MARKETS: PropTypes.string.isRequired,
    LANDING_MAP_TITLE: PropTypes.string.isRequired,
    MARKETS_PAYMENT: PropTypes.string.isRequired,
    MARKETS_DESCRIPTION_PAYMENT: PropTypes.string.isRequired,
    MARKETS_IDENTIFICATION: PropTypes.string.isRequired,
    MARKETS_DESCRIPTION_IDENTIFICATION: PropTypes.string.isRequired,
    MARKETS_TRANSPORT_ACCESS: PropTypes.string.isRequired,
    MARKETS_DESCRIPTION_TRANSPORT_ACCESS: PropTypes.string.isRequired,
    MARKETS_TELECOM: PropTypes.string.isRequired,
    MARKETS_DESCRIPTION_TELECOM: PropTypes.string.isRequired,
    MARKETS_LOYALTY_RETAIL: PropTypes.string.isRequired,
    MARKETS_DESCRIPTION_LOYALTY_RETAIL: PropTypes.string.isRequired,
  }).isRequired,
};

export default LandingMarkets;
