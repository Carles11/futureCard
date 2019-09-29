import React, { Fragment, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import ViewLayout from '@src/components/ViewLayout';
import HeaderSection from '@src/components/HeaderSection';
import Loader from '@src/components/Loader';
import { getCareers } from '@src/actions/admin/actionsSideEffects';
import CONFIG from '@src/config';

import {
  A, Article, Grid, H4, Hr,
} from '@src/css/elements';

const AdminCareers = ({
  token, careers, message, handleGetCareers,
}) => {
  const [isAdmin, setIsAdmin] = useState(null);

  useEffect(() => {
    const response = localStorage.getItem(CONFIG.API_TOKEN_NAME);
    setIsAdmin(!!response);
  }, [token]);

  useEffect(() => {
    if (!careers.length && !message) {
      handleGetCareers();
    }
  }, [careers]);

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
          title="Admin Careers"
          description="FutureCard admin panel | Careers"
        >
          <HeaderSection
            title="Admin Careers"
            subtitle="Publish job offers and documents from FutureCards"
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

AdminCareers.propTypes = {
  token: PropTypes.string.isRequired,
  careers: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    }),
  ),
  message: PropTypes.string,
  handleGetCareers: PropTypes.func.isRequired,
};

const mapStateToProps = ({ admin }) => ({
  token: admin.token,
  careers: admin.careers.data,
  message: admin.careers.message,
});

const mapDispatchToProps = dispatch => ({
  handleGetCareers: () => dispatch(getCareers()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(AdminCareers);
