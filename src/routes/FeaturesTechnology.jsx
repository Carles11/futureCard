import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import ViewLayout from '@src/components/ViewLayout';
import HeaderSection from '@src/components/HeaderSection';
import { Article, P } from '@src/css/elements';

const FeaturesTechnology = ({ DIC }) => (
  <ViewLayout
    title={`${DIC.NAV_LABEL_CARDS} | ${DIC.NAV_LABEL_TECHNOLOGY}`}
    description={DIC.CARDS_TECHNOLOGY_DESCRIPTION}
  >
    <HeaderSection
      title={DIC.CARDS_TECHNOLOGY_TITLE}
      subtitle={DIC.CARDS_TECHNOLOGY_SUBTITLE}
    />
    <Article centered>
      <P>{DIC.CARDS_TECHNOLOGY_CONTENT_0}</P>
      <P>{DIC.CARDS_TECHNOLOGY_CONTENT_1}</P>
      <P>HERE ALL OPTIONS OF TECHNOLOGIE IN TABS WHEN CONTENT AVAILABLE</P>
    </Article>
  </ViewLayout>
);

FeaturesTechnology.propTypes = {
  DIC: PropTypes.shape({
    NAV_LABEL_TECHNOLOGY: PropTypes.string.isRequired,
    CARDS_TECHNOLOGY_TITLE: PropTypes.string.isRequired,
    CARDS_TECHNOLOGY_SUBTITLE: PropTypes.string.isRequired,
    CARDS_TECHNOLOGY_DESCRIPTION: PropTypes.string.isRequired,
    CARDS_TECHNOLOGY_CONTENT_0: PropTypes.string.isRequired,
    CARDS_TECHNOLOGY_CONTENT_1: PropTypes.string.isRequired,
  }).isRequired,
};

const mapStateToProps = ({ dictionary }) => ({
  DIC: dictionary.data,
});

export default connect(
  mapStateToProps,
  null,
)(FeaturesTechnology);
