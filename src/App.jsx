import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { connect } from 'react-redux';

import Header from '@src/components/layout/Header';
import Routes from './Routes';


const App = ({ DIC }) => (
  <Fragment>
    <Helmet titleTemplate="%s | Future Card" defaultTitle="Future Card">
      <link rel="canonical" href="https://futurecard.com" />
      <meta name="description" content={DIC.APP_DESCRIPTION} />
    </Helmet>
    <Header />
    <Routes />
  </Fragment>
);

App.propTypes = {
  DIC: PropTypes.shape({
    APP_DESCRIPTION: PropTypes.string.isRequired,
  }).isRequired,
};

const mapStateToProps = ({ dictionary }) => ({
  DIC: dictionary.data,
});

export const AppWrapper = App;

export default connect(
  mapStateToProps,
  null,
)(App);
