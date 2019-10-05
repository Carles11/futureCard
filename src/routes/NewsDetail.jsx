import React, { Fragment, useEffect } from "react";
import Helmet from "react-helmet";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { FiExternalLink } from "react-icons/fi";

import ViewLayout from "@src/components/ViewLayout";
import Loader from "@src/components/Loader";
import { BACKGROUND_IMG } from "@src/utils/constants";
import { formatDate } from "@src/utils/helpers";

import List from "@src/css/blocks/List";
import {
  A,
  AExternal,
  Grid,
  Figure,
  Image,
  P,
  H1,
  H3,
  Hr,
  Article
} from "@src/css/elements";

import { getOneNews, getNews } from "@src/actions/news/actionsSideEffects";

const NewsDetail = ({
  match,
  DIC,
  item,
  news,
  handleGetNews,
  handleGetOneNews
}) => {
  useEffect(() => {
    const { id } = match.params;

    if (id) {
      handleGetOneNews(id);
    }
    return () => {};
  }, [match]);

  useEffect(() => {
    if (!news.length) {
      handleGetNews();
    }
    return () => {};
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
      {Object.keys(item).length ? (
        <Fragment>
          <Article centered>
            <Grid column>
              <Grid responsive withMargin="3rem 0 2rem">
                <Grid column flex="3">
                  <P highlight withMargin="0">
                    {`${DIC.NEWS_PUBLISHED_THE} ${formatDate(item.updatedAt)}`}
                  </P>
                  <H1 withMargin="0 5rem 1rem 0" small>
                    {item.title}
                  </H1>
                  <Hr withSize="30%" withMargin="1rem 0 3rem" />
                  <Grid responsive>
                    <Grid flex="1" withMargin="1rem 2rem 1rem 0">
                      <Figure preview>
                        <Image
                          section
                          src={item.image}
                          alt={`${item.title} image`}
                        />
                      </Figure>
                    </Grid>
                    <Grid column flex="2">
                      <P>{item.text}</P>
                      {!!item.link && (
                        <AExternal target="_blank" href={item.link}>
                          <Grid middle>
                            Learn More&nbsp;
                            <FiExternalLink />
                          </Grid>
                        </AExternal>
                      )}
                    </Grid>
                  </Grid>
                </Grid>
                <Grid responsive column flex="1" withMargin="2.25rem 0 2rem 0">
                  <H3 withMargin="0 0 1rem 2rem">Last news:</H3>
                  <Hr withSize="30%" withMargin="0rem 0 1rem 2rem" />
                  <List>
                    {news.length &&
                      news
                        .filter(newsItem => newsItem._id !== item._id)
                        .map(newsItem => (
                          <List.Item link key={newsItem._id}>
                            <A role="link" to={`/news/${newsItem._id}`}>
                              {newsItem.title}
                            </A>
                          </List.Item>
                        ))}
                  </List>
                </Grid>
              </Grid>
            </Grid>
          </Article>
        </Fragment>
      ) : (
        <Grid loader>
          <Loader />
        </Grid>
      )}
    </ViewLayout>
  );
};

NewsDetail.propTypes = {
  DIC: PropTypes.shape({
    NAV_LABEL_NEWS: PropTypes.string.isRequired,
    NEWS_DESCRIPTION: PropTypes.string.isRequired
  }).isRequired,
  item: PropTypes.shape({
    _id: PropTypes.string
  }),
  news: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.string
    })
  ),
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string
    })
  }).isRequired,
  handleGetNews: PropTypes.func.isRequired,
  handleGetOneNews: PropTypes.func.isRequired
};

const mapStateToProps = ({ dictionary, news }) => ({
  DIC: dictionary.data,
  item: news.item,
  news: news.data
});

const mapDispatchToProps = dispatch => ({
  handleGetNews: () => dispatch(getNews()),
  handleGetOneNews: id => dispatch(getOneNews(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NewsDetail);
