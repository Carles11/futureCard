import React from "react";
import Helmet from "react-helmet";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import { Section, Grid, H1, H2, P, A } from "@src/css/elements";
import Footer from "@src/components/Footer";
import useLocation from "@src/hooks/useLocation";

import { getLocation } from "@src/actions/location/actions";

const NotFound = ({ DIC, path, location, handleLocation }) => {
  useLocation(path, location, handleLocation);

  return (
    <Section>
      <Helmet
        title={DIC.NOT_FOUND}
        meta={[
          { name: "description", content: `${DIC.NOT_FOUND_DESCRIPTION}` },
          { property: "og:title", content: "welcome to futurecard.com" }
        ]}
      />
      <Grid column middle vertical="center" withPadding="8rem 2rem 10rem">
        <H1 withSize="10rem" withMargin="0">
          404
        </H1>
        <H2 withMargin="0 1rem 1rem" centered>
          {DIC.NOT_FOUND}
        </H2>
        <P withAlign="center" withMargin="0 0 2.5rem">
          {DIC.NOT_FOUND_DESCRIPTION}
        </P>
        <A role="button" to="/">
          {DIC.NOT_FOUND_LINK}
        </A>
      </Grid>
      <Footer />
    </Section>
  );
};

NotFound.propTypes = {
  DIC: PropTypes.shape({
    NOT_FOUND: PropTypes.string.isRequired,
    NOT_FOUND_DESCRIPTION: PropTypes.string.isRequired,
    NOT_FOUND_LINK: PropTypes.string.isRequired
  }).isRequired,
  path: PropTypes.string.isRequired,
  handleLocation: PropTypes.func.isRequired,
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired
  })
};

const mapStateToProps = ({ dictionary, location }) => ({
  DIC: dictionary.data,
  path: location.path
});

const mapDispatchToProps = dispatch => ({
  handleLocation: location => dispatch(getLocation(location))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NotFound);
