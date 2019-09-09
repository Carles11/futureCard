import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import ViewLayout from '@src/components/ViewLayout';
import HeaderSection from '@src/components/HeaderSection';
import { Article, P } from '@src/css/elements';

const FeaturesDesign = ({ DIC }) => (
  <ViewLayout
    title={`${DIC.NAV_LABEL_CARDS} | ${DIC.NAV_LABEL_CARD_DESIGN}`}
    description={DIC.CARDS_DESCRIPTION}
  >
    <HeaderSection
      title={DIC.CARDS_DESIGN_TITLE}
      subtitle={DIC.CARDS_DESIGN_SUBTITLE}
    />
    <Article centered>
      <P>{DIC.CARDS_DESIGN_CONTENT_0}</P>
      <P>{DIC.CARDS_DESIGN_CONTENT_1}</P>
    </Article>
  </ViewLayout>
);

FeaturesDesign.propTypes = {
  DIC: PropTypes.shape({
    NAV_LABEL_CARDS_DESIGN: PropTypes.string.isRequired,
    CARDS_DESIGN_CONTENT_0: PropTypes.string.isRequired,
    CARDS_DESIGN_CONTENT_1: PropTypes.string.isRequired,
    CARDS_DESIGN_DESCRIPTION: PropTypes.string.isRequired,
    CARDS_DESIGN_SUBTITLE: PropTypes.string.isRequired,
    CARDS_DESIGN_TITLE: PropTypes.string.isRequired,
  }).isRequired,
};

const mapStateToProps = ({ dictionary }) => ({
  DIC: dictionary.data,
});

export default connect(
  mapStateToProps,
  null,
)(FeaturesDesign);
