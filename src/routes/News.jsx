import React, { useEffect, useState } from "react";
import Helmet from "react-helmet";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import Loader from "@src/components/Loader";
import HeaderSection from "@src/components/HeaderSection";
import useLocation from "@src/hooks/useLocation";
import ViewLayout from "@src/components/ViewLayout";
import { BACKGROUND_IMG } from "@src/utils/constants";
import { formatDate, truncate } from "@src/utils/helpers";

import Box from "@src/css/blocks/Box";
import { Article, P, Grid, H4, Hr } from "@src/css/elements";

import { getLocation } from "@src/actions/location/actions";
import { getNews } from "@src/actions/news/actionsSideEffects";

const News = ({
  DIC,
  path,
  location,
  news,
  count,
  handleLocation,
  handleGetNews
}) => {
  const [loading, setLoading] = useState(false);
  useLocation(path, location, handleLocation);

  useEffect(() => {
    if (!news.success && !loading) {
      setLoading(true);
      handleGetNews();
    }
  }, [news]);

  return (
    <ViewLayout
      title={`${DIC.NAV_LABEL_NEWS}`}
      description={DIC.NEWS_DESCRIPTION}
      image={BACKGROUND_IMG.NEWS}
    >
      <Helmet
        title={DIC.NAV_LABEL_NEWS}
        meta={[
          { name: "description", content: `${DIC.NEWS_DESCRIPTION}` },
          { property: "og:title", content: "welcome to futurecard.com" }
        ]}
      />
      <HeaderSection title={DIC.NEWS_TITLE} subtitle={DIC.NEWS_DESCRIPTION} />
      <Article centered>
        <P withMargin="0 0 4rem">{DIC.NEWS_CONTENT}</P>
        <Grid column>
          <Grid middle>
            <Grid flex="1">
              <H4 withMargin="1rem 0">{`Found ${count} News.`}</H4>
            </Grid>
          </Grid>
        </Grid>
        <Hr invertColor />
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
                wrap_space="true"
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
                <Hr
                  withSize="80px"
                  withMargin="0 auto 1rem"
                  withAlign="center"
                />
                <P withPadding="0 1rem 0.75rem">{truncate(item.text, 25)}</P>
              </Box.Link>
            ))}
          </Box>
        )}
      </Article>
    </ViewLayout>
  );
};

News.propTypes = {
  DIC: PropTypes.shape({
    NAV_LABEL_NEWS: PropTypes.string.isRequired,
    NEWS_TITLE: PropTypes.string.isRequired,
    NEWS_SUBTITLE: PropTypes.string.isRequired,
    NEWS_DESCRIPTION: PropTypes.string.isRequired,
    NEWS_CONTENT: PropTypes.string.isRequired
  }).isRequired,
  path: PropTypes.string.isRequired,
  handleLocation: PropTypes.func.isRequired,
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired
  }),
  news: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.string
    })
  ),
  handleGetNews: PropTypes.func.isRequired,
  count: PropTypes.number
};

const mapStateToProps = ({ dictionary, location, news }) => ({
  DIC: dictionary.data,
  path: location.path,
  news: news.data,
  count: news.count
});

const mapDispatchToProps = dispatch => ({
  handleLocation: location => dispatch(getLocation(location)),
  handleGetNews: () => dispatch(getNews())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(News);
