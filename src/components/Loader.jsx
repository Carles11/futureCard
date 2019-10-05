import React from "react";
import PropTypes from "prop-types";

import loaderImg from "@src/assets/image/loader.gif";

import { Grid } from "@src/css/elements";

const Loader = ({ loader }) => (
  <Grid loader={loader}>
    <img src={loaderImg} alt="Loading..." />
  </Grid>
);

Loader.propTypes = {
  loader: PropTypes.bool
};

export default Loader;
