import React from 'react';
import PropTypes from 'prop-types';

import HeaderSection from '@src/components/HeaderSection';
import { BACKGROUND_IMG } from '@src/utils/constants';

import Box from '@src/css/blocks/Box';
import { Article, H3, Hr, P } from '@src/css/elements';

const SECTIONS = [
  {
    id: 1,
    title: 'SOLUTIONS',
    link: '/our-solutions',
    bg: BACKGROUND_IMG.OUR_SOLUTIONS,
  },
  {
    id: 2,
    title: 'SERVICES',
    link: '/our-services',
    bg: BACKGROUND_IMG.OUR_SERVICES,
  },
];

const LandingAbout = ({ DIC, h }) => {
  const [para1, ...first] = DIC.ABOUT_US_CONTENT.split('.');
  const [para2, ...second] = first;
  const [para3, para4] = second;

  return (
    <Article centered size={h}>
      <HeaderSection
        title={DIC.NAV_LABEL_OUR_BUSINESS}
        subtitle={DIC.ABOUT_US_DESCRIPTION}
      />
      <P>{`${para1}. ${para2}.`}</P>
      <P>{`${para3}. ${para4}.`}</P>
      <Box>
        {SECTIONS.map((section, index) => {
          const TITLE = `NAV_LABEL_${section.title}`;
          const CONTENT = `ABOUT_US_${section.title}`;
          const isEven = index % 2 === 0;

          return (
            <Box.Link
              to={section.link}
              key={section.id}
              nomargin='true'
              with_height='325px'
              with_scale
              style={{ backgroundImage: `url(${section.bg})` }}>
              <Box.Wrapper>
                <H3 withMargin='1.5rem 0.5rem 1rem' centered invertColor>
                  {DIC[TITLE]}
                </H3>
                <Hr
                  withSize='80px'
                  withMargin='0 auto 1rem'
                  withAlign='center'
                  invertColor
                />
                <P small withPadding='0 3rem 0.5rem' invertColor centered>
                  {DIC[CONTENT]}
                </P>
              </Box.Wrapper>
              <Box.Wrapper.Bg isEven={isEven} />
            </Box.Link>
          );
        })}
      </Box>
    </Article>
  );
};

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
  h: PropTypes.number,
};

export default LandingAbout;
