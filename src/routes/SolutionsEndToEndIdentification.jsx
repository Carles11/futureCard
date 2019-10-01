import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import ViewLayout from '@src/components/ViewLayout';
import HeaderSection from '@src/components/HeaderSection';
import CardsList from '@src/components/CardsList';
import CardsListOptions from '@src/components/CardsListOptions';

import { Article, P, Grid } from '@src/css/elements';
import {
  OPTIONS_GENERAL,
  OPTIONS_IDENTIFICATION,
  BACKGROUND_IMG,
} from '@src/utils/constants';

import { getCards } from '@src/actions/cards/actionsSideEffects';

/**
 * SolutionsEndToEndIdentification View Component
 *
 * @param {Object} props
 * @param {Object} props.DIC
 */
const SolutionsEndToEndIdentification = ({
  DIC,
  language,
  cards,
  cardsLang,
  handleGetCards,
}) => {
  const OPTIONS = [...OPTIONS_IDENTIFICATION, ...OPTIONS_GENERAL];

  useEffect(() => {
    if (!cards.length || cardsLang !== language) {
      handleGetCards('identification', language);
    }
  }, [language]);

  return (
    <ViewLayout
      title={`${DIC.NAV_LABEL_SOLUTIONS}`}
      description={DIC.SOLUTIONS_DESCRIPTION}
      image={BACKGROUND_IMG.IDENTIFICATION}
    >
      <HeaderSection
        title={DIC.NAV_LABEL_IDENTIFICATION}
        subtitle={DIC.SOLUTIONS_END_TO_END_IDENTIFICATION_DESCRIPTION}
      />
      <Article centered>
        <P>{DIC.SOLUTIONS_END_TO_END_IDENTIFICATION_CONTENT}</P>
      </Article>
      <CardsList cards={cards} />
      <Grid column withMargin="4rem 0 2rem">
        <HeaderSection
          title={DIC.LOOKING_FOR}
          subtitle="Discover all the options and solutions we offer for our ID cards"
        />
        <CardsListOptions options={OPTIONS} />
      </Grid>
    </ViewLayout>
  );
};

SolutionsEndToEndIdentification.propTypes = {
  DIC: PropTypes.shape({
    NAV_LABEL_SOLUTIONS: PropTypes.string.isRequired,
    NAV_LABEL_IDENTIFICATION: PropTypes.string.isRequired,
    SOLUTIONS_DESCRIPTION: PropTypes.string.isRequired,
    SOLUTIONS_END_TO_END_IDENTIFICATION_DESCRIPTION:
      PropTypes.string.isRequired,
    SOLUTIONS_END_TO_END_IDENTIFICATION_CONTENT: PropTypes.string.isRequired,
  }).isRequired,
  language: PropTypes.string.isRequired,
  cards: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.string,
      name: PropTypes.string,
      description: PropTypes.string,
      img: PropTypes.string,
    }),
  ),
  cardsLang: PropTypes.string.isRequired,
  handleGetCards: PropTypes.func.isRequired,
};

const mapStateToProps = ({ dictionary, cards }) => ({
  DIC: dictionary.data,
  language: dictionary.language,
  cards: cards.identification,
  cardsLang: cards.lang,
});

const mapDispatchToProps = dispatch => ({
  handleGetCards: (code, lang) => dispatch(getCards(code, lang)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(SolutionsEndToEndIdentification);
