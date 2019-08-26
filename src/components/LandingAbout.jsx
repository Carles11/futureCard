import React from 'react';
import PropTypes from 'prop-types';

import HeaderSection from '@src/components/HeaderSection';

import Icon from '@src/components/Icon';
import {
  FiShoppingCart,
  FiCreditCard,
  FiArrowRightCircle,
} from 'react-icons/fi';

import Box from '@src/css/blocks/Box';
import {
  A, Article, Grid, H4, Hr, P,
} from '@src/css/elements';

const SECTIONS = [
  {
    id: 1,
    title: 'PRODUCTS',
    icon: <FiShoppingCart />,
    link: '/our-solutions',
  },
  {
    id: 2,
    title: 'SERVICES',
    icon: <FiCreditCard />,
    link: '/our-services',
  },
];

const LandingAbout = ({ DIC }) => (
  <Article centered>
    <HeaderSection title={DIC.ABOUT_US} subtitle={DIC.ABOUT_US_DESCRIPTION} />

    <P withAlign="center">{DIC.ABOUT_US_CONTENT}</P>
    <Box>
      {SECTIONS.map((section) => {
        const TITLE = `NAV_LABEL_${section.title}`;
        const CONTENT = `ABOUT_US_${section.title}`;
        return (
          <Box.Item key={section.id} withBackground>
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
    ABOUT_US: PropTypes.string.isRequired,
    ABOUT_US_DESCRIPTION: PropTypes.string.isRequired,
    ABOUT_US_CONTENT: PropTypes.string.isRequired,
    ABOUT_US_MARKETS: PropTypes.string.isRequired,
    ABOUT_US_PRODUCTS: PropTypes.string.isRequired,
    ABOUT_US_SERVICES: PropTypes.string.isRequired,
    LEARN_MORE: PropTypes.string.isRequired,
    NAV_LABEL_PRODUCTS: PropTypes.string.isRequired,
    NAV_LABEL_SERVICES: PropTypes.string.isRequired,
    NAV_LABEL_MARKETS: PropTypes.string.isRequired,
  }).isRequired,
};

export default LandingAbout;
