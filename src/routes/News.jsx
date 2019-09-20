import React, { useEffect, useState } from 'react';
import Helmet from 'react-helmet';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import HeaderSection from '@src/components/HeaderSection';
import { Section, Article } from '@src/css/elements';
import Footer from '@src/components/Footer';
import useLocation from '@src/hooks/useLocation';

import { getLocation } from '@src/actions/location/actions';
import { getNews } from '@src/actions/news/actionsSideEffects';

const News = ({
  DIC, path, location, news, handleLocation, handleGetNews,
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
    <Section>
      <Helmet
        title={DIC.NAV_LABEL_NEWS}
        meta={[
          { name: 'description', content: `${DIC.NEWS_DESCRIPTION}` },
          { property: 'og:title', content: 'welcome to futurecard.com' },
        ]}
      />
      <HeaderSection title={DIC.NEWS_TITLE} subtitle={DIC.NEWS_DESCRIPTION} />
      <Article centered>
        {DIC.NEWS_CONTENT}
      </Article>
      <Footer />
    </Section>
  );
};

News.propTypes = {
  DIC: PropTypes.shape({
    NAV_LABEL_NEWS: PropTypes.string.isRequired,
    NEWS_TITLE: PropTypes.string.isRequired,
    NEWS_SUBTITLE: PropTypes.string.isRequired,
    NEWS_DESCRIPTION: PropTypes.string.isRequired,
    NEWS_CONTENT: PropTypes.string.isRequired,

  }).isRequired,
  path: PropTypes.string.isRequired,
  handleLocation: PropTypes.func.isRequired,
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
  }),
  news: PropTypes.string,
  handleGetNews: PropTypes.func.isRequired,
};

const mapStateToProps = ({ dictionary, location, news }) => ({
  DIC: dictionary.data,
  path: location.path,
  news,
});

const mapDispatchToProps = dispatch => ({
  handleLocation: location => dispatch(getLocation(location)),
  handleGetNews: () => dispatch(getNews()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(News);
