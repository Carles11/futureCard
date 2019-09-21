import React, { Fragment, memo } from 'react';
import PropTypes from 'prop-types';

import Loader from '@src/components/Loader';

import {
  Article, Grid, Figure, Image, P, H3,
} from '@src/css/elements';

const CardsList = memo(
  ({ cards }) => (
    <Fragment>
      {cards.length ? (
        cards.map(card => (
          <Article key={card._id} centered with_margin="3.5rem auto 0">
            <Grid responsive>
              <Grid flex="1">
                <Figure card>
                  <Image
                    responsive
                    loading="auto"
                    src={card.img}
                    alt={card.name}
                  />
                </Figure>
              </Grid>
              <Grid column flex="1" withMargin="2rem 0 0">
                <H3 withMargin="0">{card.name}</H3>
                <P>{card.description}</P>
              </Grid>
            </Grid>
          </Article>
        ))
      ) : (
        <Grid loader>
          <Loader />
        </Grid>
      )}
    </Fragment>
  ),
  areEqual,
);

CardsList.propTypes = {
  cards: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.string,
      name: PropTypes.string,
      description: PropTypes.string,
      img: PropTypes.string,
    }),
  ).isRequired,
};

function areEqual(prevProps, nextProps) {
  return prevProps.cards === nextProps.cards;
}

export default CardsList;
