import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { FiArrowRightCircle } from 'react-icons/fi';
import Icon from '@src/components/Icon';
import ViewLayout from '@src/components/ViewLayout';
import HeaderSection from '@src/components/HeaderSection';
import CardsList from '@src/components/CardsList';
import { scrollToFn } from '@src/utils/helpers';
import { BACKGROUND_IMG } from '@src/utils/constants';
import {
  A, Article, Button, P, Image, Hr,
} from '@src/css/elements';
import { getFeatures } from '@src/actions/features/actionsSideEffects';

/**
 * FeaturesDesign View Component
 *
 * @param {Object} props
 * @param {Object} props.DIC
 */

const FeaturesDesign = ({
  DIC,
  language,
  features,
  featuresLang,
  handleGetFeatures,
}) => {
  const [title, ...content] = DIC.CARD_FEATURES_DESIGN_DESCRIPTION.split('.');

  useEffect(() => {
    if (!features.length || featuresLang !== language) {
      handleGetFeatures('design', language);
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

  // const SECTIONS = NAVIGATION.find(nav => nav.label === 'CARDS');
  // const FILTERED_SECTIONS = SECTIONS.child.filter(
  //   item => item.label !== 'DESIGN',
  // );
  return (
    <ViewLayout
      title={`${DIC.NAV_LABEL_CARDS} | ${DIC.NAV_LABEL_DESIGN}`}
      description={title}
      image={BACKGROUND_IMG.DESIGN_SECURITY}
    >
      <HeaderSection title={DIC.NAV_LABEL_DESIGN} subtitle={`${title}`} />
      <Article centered>
        <P>{content.join('.')}</P>
      </Article>
      <Image
        withMargin="2rem auto"
        withWidth="60%"
        src={BACKGROUND_IMG.SECURITY_FEATURES_FRONT}
      />
      <Hr withMargin="3rem auto" withSize="45%" />

      <Image
        withMargin="3rem auto 4rem auto"
        withWidth="60%"
        src={BACKGROUND_IMG.SECURITY_FEATURES_REVERSE}
      />
      <CardsList cards={features} />
      <Button.Centered withMargin="3.3rem">
        <A role="button" to="/our-solutions/card-features">
          {`${DIC.BACK_HOME} ${DIC.NAV_LABEL_CARDS}`}
          <Icon>
            <FiArrowRightCircle />
          </Icon>
        </A>
      </Button.Centered>
    </ViewLayout>
  );
};

FeaturesDesign.propTypes = {
  DIC: PropTypes.shape({
    NAV_LABEL_CARDS: PropTypes.string.isRequired,
    NAV_LABEL_DESIGN: PropTypes.string.isRequired,
    CARD_FEATURES_DESIGN_DESCRIPTION: PropTypes.string.isRequired,
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
  features: features.design,
  featuresLang: features.lang,
});

const mapDispatchToProps = dispatch => ({
  handleGetFeatures: (code, lang) => dispatch(getFeatures(code, lang)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(FeaturesDesign);
