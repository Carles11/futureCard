import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import ViewLayout from '@src/components/ViewLayout';
import HeaderSection from '@src/components/HeaderSection';
import CardsList from '@src/components/CardsList';

import { Article, P } from '@src/css/elements';

import { getFeatures } from '@src/actions/features/actionsSideEffects';

/**
 * FeaturesTechnology View Component
 *
 * @param {Object} props
 * @param {Object} props.DIC
 */

const FeaturesTechnology = ({
  DIC,
  language,
  features,
  featuresLang,
  handleGetFeatures,
}) => {
  const [title, ...content] = DIC.CARD_FEATURES_TECHNOLOGY_DESCRIPTION.split(
    '.',
  );

  useEffect(() => {
    if (!features.length || featuresLang !== language) {
      handleGetFeatures('technology', language);
    }
  }, [language]);

  return (
    <ViewLayout
      title={`${DIC.NAV_LABEL_CARDS} | ${DIC.NAV_LABEL_TECHNOLOGY}`}
      description={title}
    >
      <HeaderSection title={DIC.NAV_LABEL_TECHNOLOGY} subtitle={`${title}.`} />
      <Article centered>
        <P>{content}</P>
      </Article>
      <CardsList cards={features} />
    </ViewLayout>
  );
};

FeaturesTechnology.propTypes = {
  DIC: PropTypes.shape({
    NAV_LABEL_CARDS: PropTypes.string.isRequired,
    NAV_LABEL_TECHNOLOGY: PropTypes.string.isRequired,
    CARD_FEATURES_TECHNOLOGY_DESCRIPTION: PropTypes.string.isRequired,
  }).isRequired,
  language: PropTypes.string.isRequired,
  features: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.string,
      name: PropTypes.string,
      description: PropTypes.string,
      img: PropTypes.string,
    }),
  ),
  featuresLang: PropTypes.string.isRequired,
  handleGetFeatures: PropTypes.func.isRequired,
};

const mapStateToProps = ({ dictionary, features }) => ({
  DIC: dictionary.data,
  language: dictionary.language,
  features: features.technology,
  featuresLang: features.lang,
});

const mapDispatchToProps = dispatch => ({
  handleGetFeatures: (code, lang) => dispatch(getFeatures(code, lang)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(FeaturesTechnology);
