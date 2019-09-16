import React from 'react';
import PropTypes from 'prop-types';
import { FiArrowRightCircle } from 'react-icons/fi';

import HeaderSection from '@src/components/HeaderSection';
import Icon from '@src/components/Icon';

import Box from '@src/css/blocks/Box';
import {
  A, Article, Grid, H3, Hr, P,
} from '@src/css/elements';

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
      title={DIC.NAV_LABEL_WHO_WE_ARE}
      subtitle={DIC.ABOUT_US_DESCRIPTION}
    />

    <P withAlign="justify">{DIC.ABOUT_US_CONTENT}</P>
    <Box>
      {SECTIONS.map((section) => {
        const TITLE = `NAV_LABEL_${section.title}`;
        const CONTENT = `ABOUT_US_${section.title}`;

        return (
          <Box.Item key={section.id} with_background>
            <H3 withMargin="1.5rem 0.5rem 1rem" centered>
              {DIC[TITLE]}
            </H3>
            <Hr withSize="80px" withMargin="0 auto 1rem" withAlign="center" />
            <P small withPadding="0 1rem 0.5rem" withAlign="justify">
              {DIC[CONTENT]}
            </P>
            {section.link && (
              <Grid withMargin="0 0 1.5rem" vertical="center">
                <A role="button" to={section.link}>
                  {DIC.LEARN_MORE}
                  <Icon>
                    <FiArrowRightCircle />
                  </Icon>
                </A>
              </Grid>
            )}
          </Box.Item>
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
    NAV_LABEL_SOLUTIONS: PropTypes.string.isRequired,
    NAV_LABEL_SERVICES: PropTypes.string.isRequired,
    NAV_LABEL_MARKETS: PropTypes.string.isRequired,
  }).isRequired,
};

export default LandingAbout;
