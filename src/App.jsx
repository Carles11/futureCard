import React, { Fragment } from 'react';
import Helmet from 'react-helmet';

const App = () => (
  <Fragment>
    <Helmet titleTemplate="%s | Future Card" defaultTitle="Future Card">
      <link rel="canonical" href="https://futurecard.com" />
      <meta name="description" content="W" />
    </Helmet>
  </Fragment>
);

export default App;
