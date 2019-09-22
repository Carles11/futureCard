import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import ViewLayout from '@src/components/ViewLayout';
import HeaderSection from '@src/components/HeaderSection';
import { NAVIGATION, BACKGROUND_IMG } from '@src/utils/constants';


import Box from '@src/css/blocks/Box/index';
import {
  Article, H3, Hr, P,
} from '@src/css/elements/index';

/**
 * About View Component
 *
 * @param {Object} props
 * @param {Object} props.DIC
 */
const About = ({ DIC }) => {
  const sections = NAVIGATION.find(nav => nav.label === 'ABOUT');

  return (
    <ViewLayout
      title={`${DIC.ABOUT_TITLE}`}
      description={DIC.ABOUT_US_DESCRIPTION}
      image={BACKGROUND_IMG.WHO_WE_ARE}
    >
      <HeaderSection
        title={DIC.NAV_LABEL_WHO_WE_ARE}
        subtitle={DIC.ABOUT_US_DESCRIPTION}
      />
      <Article centered>
        <P>{DIC.ABOUT_US_CONTENT_0}</P>
        <P>{DIC.ABOUT_US_CONTENT_1}</P>
        <P>{DIC.ABOUT_US_CONTENT_2}</P>
      </Article>
      <Article centered>
        <Box>
          {sections.child.map((section) => {
            const TITLE = `NAV_LABEL_${section.label}`;
            const CONTENT = `ABOUT_US_${section.label}_DESCRIPTION`;

            return (
              <Box.Link
                key={section.key}
                to={section.link}
                with_background="true"
                with_scale="true"
              >
                <H3 withMargin="1.5rem 0.5rem 1rem" centered>
                  {DIC[TITLE]}
                </H3>
                <Hr
                  withSize="80px"
                  withMargin="0 auto 1rem"
                  withAlign="center"
                />
                <P small withPadding="0 1rem 0.5rem" withAlign="center">
                  {`${DIC[CONTENT].split('.')[0]}.`}
                </P>
              </Box.Link>
            );
          })}
        </Box>
      </Article>
    </ViewLayout>
  );
};

About.propTypes = {
  DIC: PropTypes.shape({
    NAV_LABEL_ABOUT: PropTypes.string.isRequired,
    ABOUT_US_DESCRIPTION: PropTypes.string.isRequired,
    ABOUT_US_CONTENT_0: PropTypes.string.isRequired,
    ABOUT_US_CONTENT_1: PropTypes.string.isRequired,
    ABOUT_US_CONTENT_2: PropTypes.string.isRequired,
  }).isRequired,
};

const mapStateToProps = ({ dictionary }) => ({
  DIC: dictionary.data,
});

export default connect(
  mapStateToProps,
  null,
)(About);
