import React, { Fragment } from 'react';
import Helmet from 'react-helmet';

import Header from '@src/components/layout/Header';
import Routes from './Routes';


const App = () => (
  <Fragment>
    <Helmet titleTemplate="%s | Future Card" defaultTitle="Future Card">
      <link rel="canonical" href="https://futurecard.com" />
      <meta name="description" content="W" />
    </Helmet>
    <Header />
    <Routes />
  </Fragment>
);

export default App;
