import React from "react";
import Helmet from "react-helmet";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import ContactForm from "@src/components/ContactForm";
import { Image, Section, Article } from "@src/css/elements/index";

import { BACKGROUND_IMG } from "@src/utils/constants";
import Footer from "@src/components/Footer";
import useLocation from "@src/hooks/useLocation";
import HeaderSection from "@src/components/HeaderSection";

import { getLocation } from "@src/actions/location/actions";

const Contact = ({ DIC, path, location, handleLocation }) => {
  useLocation(path, location, handleLocation);

  return (
    <Section>
      <Helmet
        title={DIC.NAV_LABEL_CONTACT}
        meta={[
          { name: "description", content: `${DIC.CONTACT_DECRIPTION}` },
          {
            property: "og:title",
            content: "Contact page of FutureCard Industries"
          }
        ]}
      />
      <HeaderSection
        title={DIC.CONTACT_TITLE}
        subtitle={DIC.CONTACT_SUBTITLE}
      />
      <Image
        contactSize
        src={BACKGROUND_IMG.CONTACT_MAP_IN_CARLES_CLOUDINARY}
      />
      <Article centered>
        <ContactForm />
      </Article>
      <Footer />
    </Section>
  );
};

Contact.propTypes = {
  DIC: PropTypes.shape({
    NAV_LABEL_CONTACT: PropTypes.string.isRequired,
    CONTACT_TITLE: PropTypes.string.isRequired,
    CONTACT_SUBTITLE: PropTypes.string.isRequired,
    CONTACT_DESCRIPTION: PropTypes.string.isRequired
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
)(Contact);
