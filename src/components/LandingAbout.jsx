import React from 'react';
import PropTypes from 'prop-types';

import HeaderSection from '@src/components/HeaderSection';

import Box from '@src/css/blocks/Box';
import { Article, H3, Hr, P } from '@src/css/elements';

const SECTIONS = [
  {
    id: 1,
    title: 'SOLUTIONS',
    link: '/our-solutions',
  },
  {
    id: 2,
    title: 'SERVICES',
    link: '/our-services',
  },
];

const LandingAbout = ({ DIC }) => (
  <Article centered>
    <HeaderSection
      title={DIC.NAV_LABEL_OUR_BUSINESS}
      subtitle={DIC.ABOUT_US_DESCRIPTION}
    />

    <P>{DIC.ABOUT_US_CONTENT}</P>

    <Box>
      {SECTIONS.map(section => {
        const TITLE = `NAV_LABEL_${section.title}`;
        const CONTENT = `ABOUT_US_${section.title}`;

        return (
          <Box.Link
            to={section.link}
            key={section.id}
            with_background='true'
            with_scale='true'>
            <H3 withMargin='1.5rem 0.5rem 1rem' centered>
              {DIC[TITLE]}
            </H3>
            <Hr withSize='80px' withMargin='0 auto 1rem' withAlign='center' />
            <P small withPadding='0 1rem 0.5rem'>
              {DIC[CONTENT]}
            </P>
          </Box.Link>
        );
      })}
    </Box>
  </Article>
);

LandingAbout.propTypes = {
  DIC: PropTypes.shape({
    NAV_LABEL_WHO_WE_ARE: PropTypes.string.isRequired,
    ABOUT_US_DESCRIPTION: PropTypes.string.isRequired,
    ABOUT_US_CONTENT: PropTypes.string.isRequired,
    ABOUT_US_MARKETS: PropTypes.string.isRequired,
    ABOUT_US_SOLUTIONS: PropTypes.string.isRequired,
    ABOUT_US_SERVICES: PropTypes.string.isRequired,
    LEARN_MORE: PropTypes.string.isRequired,
    NAV_LABEL_OUR_BUSINESS: PropTypes.string.isRequired,
    NAV_LABEL_SOLUTIONS: PropTypes.string.isRequired,
    NAV_LABEL_SERVICES: PropTypes.string.isRequired,
    NAV_LABEL_MARKETS: PropTypes.string.isRequired,
  }).isRequired,
};

export default LandingAbout;
