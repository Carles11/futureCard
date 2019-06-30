import React from 'react';

import loaderImg from '@src/assets/image/loader.gif';

import { Grid } from '@src/css/elements';

const Loader = () => (
  <Grid loader>
    <img src={loaderImg} alt="Loading..." />
  </Grid>
);

export default Loader;
