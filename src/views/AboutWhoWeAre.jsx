import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import ViewLayout from '@src/components/ViewLayout';
import HeaderSection from '@src/components/HeaderSection';

import { Article, P } from '@src/css/elements';

const AboutWhoWeAre = ({ DIC }) => (
  <ViewLayout
    title={`${DIC.NAV_LABEL_ABOUT} | ${DIC.NAV_LABEL_WHO_WE_ARE}`}
    description={DIC.ABOUT_US_DESCRIPTION}
  >
    <HeaderSection
      title={DIC.NAV_LABEL_WHO_WE_ARE}
      subtitle={DIC.ABOUT_SUBTITLE}
    />
    <Article centered>
      <P>{DIC.ABOUT_US_CONTENT_0}</P>
      <P>{DIC.ABOUT_US_CONTENT_1}</P>
    </Article>
  </ViewLayout>
);

AboutWhoWeAre.propTypes = {
  DIC: PropTypes.shape({
    NAV_LABEL_ABOUT: PropTypes.string.isRequired,
    NAV_LABEL_WHO_WE_ARE: PropTypes.string.isRequired,
    ABOUT_US_CONTENT_0: PropTypes.string.isRequired,
    ABOUT_US_CONTENT_1: PropTypes.string.isRequired,
  }).isRequired,
};

const mapStateToProps = ({ dictionary }) => ({
  DIC: dictionary.data,
});

export default connect(
  mapStateToProps,
  null,
)(AboutWhoWeAre);
