import React, { Fragment, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';


import ImageSlider from '@src/css/blocks/ImageSlider';
import { Grid } from '@src/css/elements';
import useInterval from '@src/hooks/useInterval';

import { getAllCards } from '@src/actions/cards/actionsSideEffects';
import Loader from './Loader';

const CardSlider = ({ cards, total, handleGetAllCards }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!cards.length) {
      handleGetAllCards();
    }
  }, [cards]);

  useInterval(() => {
    const next = count < total - 2 ? count + 2 : 0;
    setCount(next);
  }, 5000);

  return (
    <Fragment>
      {!!cards && cards.length ? (
        <ImageSlider>
          {cards.slice(count, count + 2).map(card => (
            <ImageSlider.Figure key={card._id}>
              <ImageSlider.Image src={card.img} alt={card.name} />
            </ImageSlider.Figure>
          ))}
        </ImageSlider>
      ) : (
        <Grid loader>
          <Loader />
        </Grid>
      )}
    </Fragment>
  );
};

CardSlider.propTypes = {
  cards: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.string,
      name: PropTypes.string,
      description: PropTypes.string,
      img: PropTypes.string,
    }),
  ).isRequired,
  handleGetAllCards: PropTypes.func.isRequired,
  total: PropTypes.number,
};

const mapStateToProps = ({ cards }) => ({
  cards: cards.all,
  total: cards.count,
});

const mapDispatchToProps = dispatch => ({
  handleGetAllCards: () => dispatch(getAllCards()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(CardSlider);
