import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { FiArrowRightCircle, FiArrowLeftCircle } from "react-icons/fi";

import HeaderSection from "@src/components/HeaderSection";

import Loader from "@src/components/Loader";
import { formatDate, truncate } from "@src/utils/helpers";

import Box from "@src/css/blocks/Box";
import { Button, Article, Grid, H4, Hr, P } from "@src/css/elements";

import { getNews } from "@src/actions/news/actionsSideEffects";

const LandingNews = ({ DIC, news, total, handleGetNews }) => {
  const [count, setCount] = useState(0);
  const [loading, setLoading] = useState(false);
  let currentNews = news.slice(count, count + 3);

  useEffect(() => {
    currentNews = news.slice(count, count + 3);
  }, [count]);

  function handlePrev() {
    let prev = count - 3;
    prev = prev <= total ? 0 : prev;
    setCount(prev);
  }
  function handleNext() {
    let next = count + 3;
    next = next >= total ? 0 : next;
    setCount(next);
  }
  useEffect(() => {
    if (!news.success && !loading) {
      setLoading(true);
      handleGetNews();
    }
  }, [news]);

  return (
    <Article centered>
      <HeaderSection
        title={DIC.NAV_LABEL_NEWS}
        subtitle={DIC.NEWS_DESCRIPTION}
      />
      <Grid middle vertical="center" withMargin="1rem 0 2rem">
        <Button withIcon onClick={handlePrev}>
          <FiArrowLeftCircle />
        </Button>
        <P withMargin="0 1rem">{`${count} of ${total}`}</P>
        <Button withIcon onClick={handleNext}>
          <FiArrowRightCircle />
        </Button>
      </Grid>
      {!news.length ? (
        <Grid withMargin="17rem" middle vertical="center">
          <Loader />
        </Grid>
      ) : (
        <Box>
          {currentNews.map(item => (
            <Box.Link
              to={`news/${item._id}`}
              key={item._id}
              with_scale="true"
              with_background="true"
            >
              <Box.Figure>
                <Box.Figure.Image src={item.image} alt={item.title} />
              </Box.Figure>
              <Grid vertical="center">
                <P small withMargin="1.5rem 0 0.5rem" highlight>
                  {`${DIC.NEWS_PUBLISHED_THE} ${formatDate(item.updatedAt)}`}
                </P>
              </Grid>

              <H4 withMargin="0 1rem 0.75rem" centered>
                {item.title}
              </H4>
              <Hr withSize="80px" withMargin="0 auto 1rem" withAlign="center" />
              <P withPadding="0 1rem 0.75rem">{truncate(item.text, 25)}</P>
              {/* {!!item.link && (
                <Grid withMargin='0 0 1.5rem' vertical='center'>
                  <A role='button' to={item.link}>
                    {DIC.LEARN_MORE}
                    <Icon>
                      <FiArrowRightCircle />
                    </Icon>
                  </A>
                </Grid>
              )} */}
            </Box.Link>
          ))}
        </Box>
      )}
    </Article>
  );
};

LandingNews.propTypes = {
  DIC: PropTypes.shape({
    LEARN_MORE: PropTypes.string.isRequired,
    NAV_LABEL_NEWS: PropTypes.string.isRequired,
    NEWS_DESCRIPTION: PropTypes.string.isRequired,
    NEWS_PUBLISHED_THE: PropTypes.string.isRequired
  }).isRequired,
  news: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.string
    })
  ),
  handleGetNews: PropTypes.func.isRequired,
  total: PropTypes.number
};

const mapStateToProps = ({ news }) => ({
  news: news.data,
  total: news.count
});

const mapDispatchToProps = dispatch => ({
  handleGetNews: () => dispatch(getNews())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LandingNews);
