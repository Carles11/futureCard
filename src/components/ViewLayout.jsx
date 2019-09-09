import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { connect } from 'react-redux';

import { Section } from '@src/css/elements';
import useLocation from '@src/hooks/useLocation';
import { NAVIGATION } from '@src/utils/constants';

import { getLocation } from '@src/actions/location/actions';
import Breadcrumb from './Breadcrumb';
import Footer from './Footer';

const ViewLayout = ({
  title,
  description,
  DIC,
  path,
  children,
  handleLocation,
}) => {
  const [breadcrumb, setBreadcrumb] = useState([]);

  useEffect(() => {
    // eslint-disable-next-line no-restricted-globals
    useLocation(path, location, handleLocation);

    const navigation = NAVIGATION.find(item => item.link === path);

    if (navigation.child) {
      return setBreadcrumb([{ label: navigation.label }, ...navigation.child]);
    }

    return () => {};
  }, [path]);

  return (
    <Section>
      <Helmet
        title={title}
        meta={[
          { name: 'description', content: `${description}` },
          { property: 'og:title', content: 'welcome to futurecard.com' },
        ]}
      />
      {!!breadcrumb && !!breadcrumb.length && (
        <Breadcrumb DIC={DIC} items={breadcrumb} />
      )}
      {children}
      <Footer />
    </Section>
  );
};

ViewLayout.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  path: PropTypes.string.isRequired,
  handleLocation: PropTypes.func.isRequired,
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
  }),
  DIC: PropTypes.shape({
    NAV_LABEL_SERVICES_FULFILLMENT: PropTypes.string.isRequired,
  }),
};

const mapStateToProps = ({ dictionary, location }) => ({
  DIC: dictionary.data,
  path: location.path,
});

const mapDispatchToProps = dispatch => ({
  handleLocation: location => dispatch(getLocation(location)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ViewLayout);
