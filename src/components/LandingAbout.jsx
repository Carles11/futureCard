// @flow

import React from 'react';
import PropTypes from 'prop-types';

import Icon from '@src/components/Icon';
import {
  FiShoppingCart,
  FiCreditCard,
  FiArrowRightCircle,
} from 'react-icons/fi';

import Box from '@src/css/blocks/Box';
import {
  A, Article, Grid, H2, H3, H4, Hr, P,
} from '@src/css/elements';

const SECTIONS = [
  // {
  //   id: 0,
  //   title: 'MARKETS',
  //   icon: <FiGlobe />,
  //   link: null,
  // },
  {
    id: 1,
    title: 'PRODUCTS',
    icon: <FiShoppingCart />,
    link: '/products',
  },
  {
    id: 2,
    title: 'SERVICES',
    icon: <FiCreditCard />,
    link: '/services',
  },
];

const LandingAbout = ({ DIC }) => (
  <Article centered>
    <H3 secundaryColor withMargin="1rem 0 0.75rem">
      {DIC.ABOUT_US}
    </H3>
    <H2 withMargin="0" centered small>
      {DIC.ABOUT_US_DESCRIPTION}
    </H2>
    <Hr withSize="180px" withMargin="1.5rem 0 2rem" withAlign="center" />
    <P withAlign="center">{DIC.ABOUT_US_CONTENT}</P>
    <Box>
      {SECTIONS.map((section) => {
        const TITLE = `NAV_LABEL_${section.title}`;
        const CONTENT = `ABOUT_US_${section.title}`;
        return (
          <Box.Item key={section.id} withScale>
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
