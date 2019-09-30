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
  A, Article, Button, P,
} from '@src/css/elements';

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

  // const SECTIONS = NAVIGATION.find(nav => nav.label === 'CARDS');
  // const FILTERED_SECTIONS = SECTIONS.child.filter(
  //   item => item.label !== 'CARD_MATERIALS',
  // );

  return (
    <ViewLayout
      title={`${DIC.NAV_LABEL_CARDS} | ${DIC.NAV_LABEL_CARD_MATERIALS}`}
      description={title}
      image={BACKGROUND_IMG.CARD_MATERIALS}
    >
      <HeaderSection
        title={DIC.NAV_LABEL_CARD_MATERIALS}
        subtitle={`${title}`}
      />
      <Article>
        <P>{content}</P>
      </Article>
      <CardsList cards={features} />
      {/* <Box>
        {FILTERED_SECTIONS.map((section) => {
          const TITLE = `NAV_LABEL_${section.label}`;
          const CONTENT = `CARD_FEATURES_${section.label}_DESCRIPTION`;

          return (
            <Box.Link
              to={section.link}
              key={section.key}
              with_scale="true"
              with_background="true"
            >
              <H4 withMargin="1.5rem 0.5rem 0.5rem" centered>
                {DIC[TITLE]}
              </H4>
              <Hr withSize="80px" withMargin="0 auto 1rem" withAlign="center" />
              <P small centered withPadding="0 1rem 0.5rem">
                {`${DIC[CONTENT].split('.')[0]}.`}
              </P>
            </Box.Link>
          );
        })}
      </Box> */}
      <Button.Centered withMargin="3.3rem">
        <A role="button" to="/card-features">
          {`${DIC.BACK_HOME} ${DIC.NAV_LABEL_CARDS}`}
          <Icon>
            <FiArrowRightCircle />
          </Icon>
        </A>
      </Button.Centered>
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
