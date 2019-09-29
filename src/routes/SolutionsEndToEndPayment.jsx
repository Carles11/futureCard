import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import ViewLayout from '@src/components/ViewLayout';
import HeaderSection from '@src/components/HeaderSection';
import CardsList from '@src/components/CardsList';
import CardsListOptions from '@src/components/CardsListOptions';

import { AExternal, Article, P } from '@src/css/elements';
import {
  BACKGROUND_IMG,
  OPTIONS_PAYMENT,
  OPTIONS_GENERAL,
  PAYMENT_LOGOS,
} from '@src/utils/constants';

import Layout from '@src/css/blocks/Layout';

import { getCards } from '@src/actions/cards/actionsSideEffects';

/**
 * SolutionsEndToEndPayment View Component
 *
 * @param {Object} props
 * @param {Object} props.DIC
 */

const SolutionsEndToEndPayment = ({
  DIC,
  language,
  cards,
  cardsLang,
  handleGetCards,
}) => {
  const OPTIONS = [...OPTIONS_PAYMENT, ...OPTIONS_GENERAL];

  useEffect(() => {
    if (!cards.length || cardsLang !== language) {
      handleGetCards('payment', language);
    }
  }, [language]);

  return (
    <ViewLayout
      title={`${DIC.NAV_LABEL_SOLUTIONS} | ${DIC.NAV_LABEL_PAYMENT}`}
      description={DIC.SOLUTIONS_END_TO_END_PAYMENT_DESCRIPTION}
      image={BACKGROUND_IMG.CARD_PAYMENT}>
      <HeaderSection
        title={DIC.NAV_LABEL_PAYMENT}
        subtitle={DIC.SOLUTIONS_END_TO_END_PAYMENT_DESCRIPTION}
      />
      <Article centered>
        <P>{DIC.SOLUTIONS_END_TO_END_PAYMENT_CONTENT}</P>
      </Article>
      {PAYMENT_LOGOS.map(item => (
        <AExternal href={item.link} target='_blank'>
          <Layout.Header.Logo.Image
            logosAdapt
            src={item.src}
            alt={`${item.label}-logo`}
          />
        </AExternal>
      ))}
      <CardsList cards={cards} />
      <HeaderSection
        title={DIC.LOOKING_FOR}
        subtitle='Discover all the options and solutions we offer for our payment cards'
      />
      <CardsListOptions options={OPTIONS} />
    </ViewLayout>
  );
};

SolutionsEndToEndPayment.propTypes = {
  DIC: PropTypes.shape({
    LOOKING_FOR: PropTypes.string.isRequired,
    NAV_LABEL_SOLUTIONS: PropTypes.string.isRequired,
    NAV_LABEL_PAYMENT: PropTypes.string.isRequired,
    SOLUTIONS_END_TO_END_PAYMENT_DESCRIPTION: PropTypes.string.isRequired,
    SOLUTIONS_END_TO_END_PAYMENT_CONTENT: PropTypes.string.isRequired,
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
  cards: cards.payment,
  cardsLang: cards.lang,
});

const mapDispatchToProps = dispatch => ({
  handleGetCards: (code, lang) => dispatch(getCards(code, lang)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(SolutionsEndToEndPayment);
