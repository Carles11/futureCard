/* eslint-disable import/no-duplicates */
import React from 'react';
import PropTypes from 'prop-types';

import HeaderSection from '@src/components/HeaderSection';
import MarketsMap from '@src/assets/image/MarketsMap.jpeg';

import { FaUniversity } from 'react-icons/fa';
import { FaMoneyBillAlt } from 'react-icons/fa';
import { FaMobileAlt } from 'react-icons/fa';
import { FaUsers } from 'react-icons/fa';
import {
  Article, Grid, H4, Hr, Image, P,
} from '@src/css/elements';
import Box from '@src/css/blocks/Box';

const SECTIONS = [
  {
    id: 1,
    title: 'PAYMENT',
    link: '/our-solutions/end-to-end-card-solutions/payment',
    icon: <FaUniversity />,
  },
  {
    id: 2,
    title: 'IDENTIFICATION',
    link: '/our-solutions/end-to-end-card-solutions/identification',
    icon: <FaMoneyBillAlt />,
  },
  {
    id: 3,
    title: 'TRANSPORT_ACCESS',
    link: '/our-solutions/end-to-end-card-solutions/transport-and-access',
    icon: <FaMobileAlt />,
  },
  {
    id: 4,
    title: 'TELECOM',
    link: '/our-solutions/end-to-end-card-solutions/telecom',
    icon: <FaUsers />,
  },
  {
    id: 5,
    title: 'LOYALTY_RETAIL',
    link: '/our-solutions/end-to-end-card-solutions/retail_loyalty',
    icon: <FaMoneyBillAlt />,
  },
];

const LandingMarkets = ({ DIC }) => (
  <Article centered>
    <HeaderSection
      title={DIC.NAV_LABEL_MARKETS}
      subtitle={DIC.ABOUT_US_MARKETS}
    />
    <Image
      section
      withMargin="0 0 0"
      src={MarketsMap}
      alt={DIC.NAV_LABEL_MARKETS}
    />
    <Box>
      {SECTIONS.map((section) => {
        const TITLE = `MARKETS_${section.title}`;
        const CONTENT = `MARKETS_DESCRIPTION_${section.title}`;

        return (
          <Box.Link
            to={section.link}
            key={section.id}
            with_scale
            with_background
          >
            <Grid
              withIcon
              withPadding="2rem 2rem 1rem"
              flex={1}
              vertical="center"
            >
              {section.icon}
            </Grid>
            <H4 withMargin="0.5rem" centered>
              {DIC[TITLE]}
            </H4>
            <Hr withSize="80px" withMargin="0 auto 1rem" withAlign="center" />
            <P small withPadding="0 1rem 0.5rem" withAlign="justify">
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
