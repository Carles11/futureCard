import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { FiArrowRightCircle } from "react-icons/fi";

import ViewLayout from "@src/components/ViewLayout";
import HeaderSection from "@src/components/HeaderSection";
import CardsList from "@src/components/CardsList";
import CardsListOptions from "@src/components/CardsListOptions";

import { Article, A, Button, P, Grid } from "@src/css/elements";
import Icon from "@src/components/Icon";

import {
  OPTIONS_GENERAL,
  OPTIONS_IDENTIFICATION,
  BACKGROUND_IMG
} from "@src/utils/constants";

import { getCards } from "@src/actions/cards/actionsSideEffects";

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
  handleGetCards
}) => {
  const OPTIONS = [...OPTIONS_IDENTIFICATION, ...OPTIONS_GENERAL];

  useEffect(() => {
    if (!cards.length || cardsLang !== language) {
      handleGetCards("identification", language);
    }
  }, [language]);

  const [
    title,
    ...first
  ] = DIC.SOLUTIONS_END_TO_END_IDENTIFICATION_CONTENT.split(".");
  const [para1, para2, ...second] = first;
  const [para3, para4, ...third] = second;
  const [para5, para6] = third;
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
        <P>{`${title}. ${para1}. ${para2}.`}</P>
        <P>{`${para3}. ${para4}. ${para5}.`}</P>
        <P>{`${para6}.`}</P>
      </Article>
      <CardsList cards={cards} />
      <Grid column withMargin="4rem 0 2rem">
        <HeaderSection
          title={DIC.LOOKING_FOR}
          subtitle="Discover all the options and solutions we offer for our ID cards"
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

SolutionsEndToEndIdentification.propTypes = {
  DIC: PropTypes.shape({
    NAV_LABEL_SOLUTIONS: PropTypes.string.isRequired,
    NAV_LABEL_IDENTIFICATION: PropTypes.string.isRequired,
    SOLUTIONS_DESCRIPTION: PropTypes.string.isRequired,
    SOLUTIONS_END_TO_END_IDENTIFICATION_DESCRIPTION:
      PropTypes.string.isRequired,
    SOLUTIONS_END_TO_END_IDENTIFICATION_CONTENT: PropTypes.string.isRequired
  }).isRequired,
  language: PropTypes.string.isRequired,
  cards: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.string,
      name: PropTypes.string,
      description: PropTypes.string,
      img: PropTypes.string
    })
  ),
  cardsLang: PropTypes.string.isRequired,
  handleGetCards: PropTypes.func.isRequired
};

const mapStateToProps = ({ dictionary, cards }) => ({
  DIC: dictionary.data,
  language: dictionary.language,
  cards: cards.identification,
  cardsLang: cards.lang
});

const mapDispatchToProps = dispatch => ({
  handleGetCards: (code, lang) => dispatch(getCards(code, lang))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SolutionsEndToEndIdentification);
