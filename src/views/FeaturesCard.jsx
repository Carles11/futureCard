import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import ViewLayout from '@src/components/ViewLayout';
import HeaderSection from '@src/components/HeaderSection';
import { Article, P } from '@src/css/elements';

const FeaturesCard = ({ DIC }) => (
  <ViewLayout
    title={`${DIC.NAV_LABEL_CARDS} | ${DIC.NAV_LABEL_CARDS_MATERIALS}`}
    description={DIC.CARDS_MATERIALS_DESCRIPTION}
  >
    <HeaderSection
      title={DIC.CARDS_MATERIALS_TITLE}
      subtitle={DIC.CARDS_MATERIALS_SUBTITLE}
    />
    <Article centered>
      <P>{DIC.CARDS_MATERIALS_CONTENT_0}</P>
      <P>{DIC.CARDS_MATERIALS_CONTENT_1}</P>
    </Article>
  </ViewLayout>
);

FeaturesCard.propTypes = {
  DIC: PropTypes.shape({
    CARDS_MATERIALS_CONTENT_0: PropTypes.string.isRequired,
    CARDS_MATERIALS_CONTENT_1: PropTypes.string.isRequired,
    CARDS_MATERIALS_DESCRIPTION: PropTypes.string.isRequired,
    CARDS_MATERIALS_SUBTITLE: PropTypes.string.isRequired,
    CARDS_MATERIALS_TITLE: PropTypes.string.isRequired,
    NAV_LABEL_CARDS_MATERIALS: PropTypes.string.isRequired,
  }).isRequired,
};

const mapStateToProps = ({ dictionary }) => ({
  DIC: dictionary.data,
});

export default connect(
  mapStateToProps,
  null,
)(FeaturesCard);
