import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import ViewLayout from '@src/components/ViewLayout';
import HeaderSection from '@src/components/HeaderSection';
import CardsList from '@src/components/CardsList';
import CardsListOptions from '@src/components/CardsListOptions';

import { Article, P } from '@src/css/elements';
import { OPTIONS_RETAIL, OPTIONS_GENERAL } from '@src/utils/constants';

import { getCards } from '@src/actions/cards/actionsSideEffects';

/**
 * SolutionsEndToEndRetail View Component
 *
 * @param {Object} props
 * @param {Object} props.DIC
 */
const SolutionsEndToEndRetail = ({
  DIC,
  language,
  cards,
  cardsLang,
  handleGetCards,
}) => {
  const OPTIONS = [...OPTIONS_RETAIL, ...OPTIONS_GENERAL];

  useEffect(() => {
    if (!cards.length || cardsLang !== language) {
      handleGetCards('retail', language);
    }
  }, [language]);

  return (
    <ViewLayout
      title={`${DIC.NAV_LABEL_SOLUTIONS}`}
      description={DIC.SOLUTIONS_DESCRIPTION}
    >
      <HeaderSection
        title={DIC.NAV_LABEL_RETAIL_LOYALTY}
        subtitle={DIC.SOLUTIONS_END_TO_END_RETAIL_DESCRIPTION}
      />
      <Article centered>
        <P>{DIC.SOLUTIONS_END_TO_END_RETAIL_CONTENT}</P>
      </Article>
      <CardsList cards={cards} />
      <HeaderSection
        title={DIC.LOOKING_FOR}
        subtitle="Discover all the options and solutions we offer for our Recharge and SIM/USIM Cards"
      />
      <CardsListOptions options={OPTIONS} />
    </ViewLayout>
  );
};

SolutionsEndToEndRetail.propTypes = {
  DIC: PropTypes.shape({
    NAV_LABEL_SOLUTIONS: PropTypes.string.isRequired,
    NAV_LABEL_RETAIL_LOYALTY: PropTypes.string.isRequired,
    SOLUTIONS_END_TO_END_RETAIL_DESCRIPTION: PropTypes.string.isRequired,
    SOLUTIONS_END_TO_END_RETAIL_CONTENT: PropTypes.string.isRequired,
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
  cards: cards.retail,
  cardsLang: cards.lang,
});

const mapDispatchToProps = dispatch => ({
  handleGetCards: (code, lang) => dispatch(getCards(code, lang)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(SolutionsEndToEndRetail);
