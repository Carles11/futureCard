import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { FiArrowRightCircle } from 'react-icons/fi';

import ViewLayout from '@src/components/ViewLayout';
import HeaderSection from '@src/components/HeaderSection';
import CardsList from '@src/components/CardsList';
import CardsListOptions from '@src/components/CardsListOptions';
import {
  BACKGROUND_IMG,
  OPTIONS_TELECOM,
  OPTIONS_GENERAL,
} from '@src/utils/constants';

import {
  Article, A, Button, Grid, P,
} from '@src/css/elements';
import Icon from '@src/components/Icon';

import { getCards } from '@src/actions/cards/actionsSideEffects';

/**
 * SolutionsEndToEndTelecom View Component
 *
 * @param {Object} props
 * @param {Object} props.DIC
 */
const SolutionsEndToEndTelecom = ({
  DIC,
  language,
  cards,
  cardsLang,
  handleGetCards,
}) => {
  const OPTIONS = [...OPTIONS_TELECOM, ...OPTIONS_GENERAL];

  useEffect(() => {
    if (!cards.length || cardsLang !== language) {
      handleGetCards('telecom', language);
    }
  }, [language]);

  return (
    <ViewLayout
      title={`${DIC.NAV_LABEL_SOLUTIONS}`}
      description={DIC.SOLUTIONS_DESCRIPTION}
      image={BACKGROUND_IMG.TELECOM}
    >
      <HeaderSection
        title={DIC.NAV_LABEL_TELECOM}
        subtitle={DIC.SOLUTIONS_END_TO_END_TELECOM_DESCRIPTION}
      />
      <Article centered>
        <P>{DIC.SOLUTIONS_END_TO_END_TELECOM_CONTENT}</P>
      </Article>
      <CardsList cards={cards} />
      <Grid column withMargin="4rem 0 2rem">
        <HeaderSection
          title={DIC.LOOKING_FOR}
          subtitle="Discover all the options and solutions we offer for our Recharge and SIM/USIM Cards"
        />
        <CardsListOptions options={OPTIONS} />
      </Grid>

      <Article>
        <Button.Centered>
          <A role="button" to="/our-solutions/end-to-end-card-solutions">
            {`${DIC.BACK_HOME} ${DIC.NAV_LABEL_END_TO_END}`}
            <Icon>
              <FiArrowRightCircle />
            </Icon>
          </A>
        </Button.Centered>
      </Article>
    </ViewLayout>
  );
};

SolutionsEndToEndTelecom.propTypes = {
  DIC: PropTypes.shape({
    BACK_HOME: PropTypes.string.isRequired,
    LOOKING_FOR: PropTypes.string.isRequired,
    NAV_LABEL_END_TO_END: PropTypes.string.isRequired,
    NAV_LABEL_SOLUTIONS: PropTypes.string.isRequired,
    NAV_LABEL_TELECOM: PropTypes.string.isRequired,
    SOLUTIONS_DESCRIPTION: PropTypes.string.isRequired,
    SOLUTIONS_END_TO_END_TELECOM_DESCRIPTION: PropTypes.string.isRequired,
    SOLUTIONS_END_TO_END_TELECOM_CONTENT: PropTypes.string.isRequired,
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
  cards: cards.telecom,
  cardsLang: cards.lang,
});

const mapDispatchToProps = dispatch => ({
  handleGetCards: (code, lang) => dispatch(getCards(code, lang)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(SolutionsEndToEndTelecom);
