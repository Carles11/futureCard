import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { FiArrowRightCircle } from 'react-icons/fi';

import HeaderSection from '@src/components/HeaderSection';

import Loader from '@src/components/Loader';
import Icon from '@src/components/Icon';
import { formatDate } from '@src/utils/helpers';

import Box from '@src/css/blocks/Box';
import {
  A, Article, Grid, H4, Hr, P,
} from '@src/css/elements';

import { getNews } from '@src/actions/news/actionsSideEffects';

const LandingNews = ({ DIC, news, handleGetNews }) => {
  const [loading, setLoading] = useState(false);

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
      {/* <Grid middle vertical='center' withMargin='1rem 0 2rem'>
        <Button withIcon onClick={fakeApiRequest}>
          <FiArrowLeftCircle />
        </Button>
        <P withMargin='0 1rem'>{`${count} of 36`}</P>
        <Button withIcon onClick={fakeApiRequest}>
          <FiArrowRightCircle />
        </Button>
      </Grid> */}
      {!news.length ? (
        <Grid withMargin="17rem" middle vertical="center">
          <Loader />
        </Grid>
      ) : (
        <Box wrap="true">
          {news.map(item => (
            <Box.Link
              to={`news/${item._id}`}
              key={item._id}
              with_scale="true"
              with_background="true"
              wrap="true"
            >
              <Box.Figure>
                <Box.Figure.Image src={item.image} alt={item.title} />
              </Box.Figure>
              <Grid vertical="center">
                <P tiny withMargin="1.5rem 0 0.25rem" highlight>
                  {`${DIC.NEWS_PUBLISHED_THE} ${formatDate(item.updatedAt)}`}
                </P>
              </Grid>

              <H4 withMargin="0 1rem 0.5rem" centered>
                {item.title}
              </H4>
              <Hr withSize="80px" withMargin="0 auto 1rem" withAlign="center" />
              <P withPadding="0 1rem 0.75rem">{item.text}</P>
              {!!item.link && (
                <Grid withMargin="0 0 1.5rem" vertical="center">
                  <A role="button" to={item.link}>
                    {DIC.LEARN_MORE}
                    <Icon>
                      <FiArrowRightCircle />
                    </Icon>
                  </A>
                </Grid>
              )}
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
    NEWS_PUBLISHED_THE: PropTypes.string.isRequired,
  }).isRequired,
  news: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.string,
    }),
  ),
  handleGetNews: PropTypes.func.isRequired,
};

const mapStateToProps = ({ news }) => ({
  news: news.data,
});

const mapDispatchToProps = dispatch => ({
  handleGetNews: () => dispatch(getNews()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(LandingNews);
