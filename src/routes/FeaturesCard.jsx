import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import ViewLayout from '@src/components/ViewLayout';
import HeaderSection from '@src/components/HeaderSection';
import CardsList from '@src/components/CardsList';
import { scrollToFn } from '@src/utils/helpers';
import { BACKGROUND_IMG } from '@src/utils/constants';

import { Article, P } from '@src/css/elements';

import { getFeatures } from '@src/actions/features/actionsSideEffects';

/**
 * FeaturesCard View Component
 *
 * @param {Object} props
 * @param {Object} props.DIC
 */

const FeaturesCard = ({
  DIC,
  language,
  features,
  featuresLang,
  handleGetFeatures,
}) => {
  const [
    title,
    ...content
  ] = DIC.CARD_FEATURES_CARD_MATERIALS_DESCRIPTION.split('.');

  useEffect(() => {
    if (!features.length || featuresLang !== language) {
      handleGetFeatures('materials', language);
    }
  }, [language]);

  useEffect(() => {
    // eslint-disable-next-line no-restricted-globals
    if (location.hash && features.length) {
      // eslint-disable-next-line no-restricted-globals
      scrollToFn(location.hash);
    }
    // eslint-disable-next-line no-restricted-globals
  }, [features, location]);

  return (
    <ViewLayout
      title={`${DIC.NAV_LABEL_CARDS} | ${DIC.NAV_LABEL_CARD_MATERIALS}`}
      description={title}
      image={BACKGROUND_IMG.CARD_MATERIALS}>
      <HeaderSection
        title={DIC.NAV_LABEL_CARD_MATERIALS}
        subtitle={`${title}`}
      />
      <Article>
        <P>{content}</P>
      </Article>
      <CardsList cards={features} />
    </ViewLayout>
  );
};

FeaturesCard.propTypes = {
  DIC: PropTypes.shape({
    NAV_LABEL_CARDS: PropTypes.string.isRequired,
    NAV_LABEL_CARD_MATERIALS: PropTypes.string.isRequired,
    CARD_FEATURES_CARD_MATERIALS_DESCRIPTION: PropTypes.string.isRequired,
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
  features: features.materials,
  featuresLang: features.lang,
});

const mapDispatchToProps = dispatch => ({
  handleGetFeatures: (code, lang) => dispatch(getFeatures(code, lang)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(FeaturesCard);
