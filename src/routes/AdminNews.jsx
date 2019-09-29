import React, { Fragment, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import ViewLayout from '@src/components/ViewLayout';
import HeaderSection from '@src/components/HeaderSection';
import Loader from '@src/components/Loader';
import { getNews } from '@src/actions/admin/actionsSideEffects';
import CONFIG from '@src/config';

import {
  A, Article, Grid, H4, Hr,
} from '@src/css/elements';

const AdminNews = ({
  token, news, message, handleGetNews,
}) => {
  const [isAdmin, setIsAdmin] = useState(null);

  useEffect(() => {
    const response = localStorage.getItem(CONFIG.API_TOKEN_NAME);
    setIsAdmin(!!response);
  }, [token]);

  useEffect(() => {
    if (!news.length && !message) {
      handleGetNews();
    }
  }, [news]);

  return (
    <Fragment>
      {isAdmin === null && (
        <Grid loader>
          <Loader />
        </Grid>
      )}
      {isAdmin !== null && !isAdmin && <Redirect to="/admin" />}
      {!!isAdmin && (
        <ViewLayout
          title="Admin News"
          description="FutureCard admin panel | News"
        >
          <HeaderSection
            title="Admin News"
            subtitle="'Publish job offers and documents from FutureCards"
          />
          <Article centered>
            <Grid column>
              <Grid middle>
                <Grid flex="1">
                  <H4 withMargin="1rem 0">{message}</H4>
                </Grid>
                <Grid heightProp="50px">
                  <A role="button" to="/admin">
                    Back to Admin
                  </A>
                </Grid>
              </Grid>
            </Grid>
            <Hr invertColor />
          </Article>
        </ViewLayout>
      )}
    </Fragment>
  );
};

AdminNews.propTypes = {
  token: PropTypes.string.isRequired,
  news: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    }),
  ),
  message: PropTypes.string,
  handleGetNews: PropTypes.func.isRequired,
};

const mapStateToProps = ({ admin }) => ({
  token: admin.token,
  news: admin.news.data,
  message: admin.news.message,
});

const mapDispatchToProps = dispatch => ({
  handleGetNews: () => dispatch(getNews()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(AdminNews);
