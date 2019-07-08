import React from 'react';
import PropTypes from 'prop-types';

import HeaderSection from '@src/components/HeaderSection';
import MarketsMap from '@src/assets/image/MarketsMap.jpeg';

import {
  FaUniversity,
  FaMoneyBillAlt,
  FaMobileAlt,
  FaUsers,
} from 'react-icons/fa';
import {
  Article, Grid, H4, Hr, Image, P,
} from '@src/css/elements';
import Box from '@src/css/blocks/Box';

const SECTIONS = [
  {
    id: 1,
    title: 'GOVERNMENT',
    icon: <FaUniversity />,
  },
  {
    id: 2,
    title: 'FINANCIAL',
    icon: <FaMoneyBillAlt />,
  },
  {
    id: 3,
    title: 'MOBILE',
    icon: <FaMobileAlt />,
  },
  {
    id: 4,
    title: 'COMMERCIAL',
    icon: <FaUsers />,
  },
];

const LandingMarkets = ({ DIC }) => (
  <Article centered>
    <HeaderSection title={DIC.NAV_LABEL_MARKETS} subtitle={DIC.ABOUT_US_MARKETS} />
    <Image section withMargin="0 0 0" src={MarketsMap} alt={DIC.NAV_LABEL_MARKETS} />
    <Box>
      {SECTIONS.map((section) => {
        const TITLE = `MARKETS_${section.title}`;
        const CONTENT = `MARKETS_DESCRIPTION_${section.title}`;
        return (
          <Box.Item key={section.id} withScale withBackground>
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
            <P small withPadding="0 1rem 0.5rem" withAlign="center">
              {DIC[CONTENT]}
            </P>
          </Box.Item>
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
    MARKETS_GOVERNMENT: PropTypes.string.isRequired,
    MARKETS_FINANCIAL: PropTypes.string.isRequired,
    MARKETS_MOBILE: PropTypes.string.isRequired,
    MARKETS_COMMERCIAL: PropTypes.string.isRequired,
    MARKETS_DESCRIPTION_GOVERNMENT: PropTypes.string.isRequired,
    MARKETS_DESCRIPTION_FINANCIAL: PropTypes.string.isRequired,
    MARKETS_DESCRIPTION_MOBILE: PropTypes.string.isRequired,
    MARKETS_DESCRIPTION_COMMERCIAL: PropTypes.string.isRequired,
  }).isRequired,
};

export default LandingMarkets;
