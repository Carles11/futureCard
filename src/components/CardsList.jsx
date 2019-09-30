import React, { Fragment, memo } from 'react';
import PropTypes from 'prop-types';

import Loader from '@src/components/Loader';

import List from '@src/css/blocks/List';
import {
  Article, Grid, Figure, Image, P, H3,
} from '@src/css/elements';

const CardsList = memo(
  ({ cards }) => (
    <Fragment>
      {cards.length ? (
        cards
          .sort((a, b) => (a.order > b.order ? 1 : -1))
          .map(card => (
            <Article
              id={card.hash ? card.hash : card._id}
              key={card._id}
              centered
              with_margin="1.5rem auto 0"
            >
              <Grid responsive>
                <Grid flex="2">
                  <Figure card>
                    <Image
                      responsive
                      loading="auto"
                      src={card.img}
                      alt={card.name}
                    />
                  </Figure>
                </Grid>
                <Grid column flex="3" withMargin="2rem 0 0">
                  {!!card.group && (
                    <P small highlight noMargin bold>
                      {!!card.group && card.group}
                    </P>
                  )}
                  <H3 withMargin="0">
                    {card.name}
                    {' '}
                    {!!card.family && ` - ${card.family}`}
                  </H3>

                  <P>{card.description}</P>
                  {!!card.list && !!card.list.length && (
                    <List>
                      {card.list.map(item => (
                        <List.Item key={card.id}>{item}</List.Item>
                      ))}
                    </List>
                  )}
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
