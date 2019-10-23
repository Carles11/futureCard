import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { connect } from 'react-redux';

import useLocation from '@src/hooks/useLocation';
import { NAVIGATION } from '@src/utils/constants';
import useWindowSize from '@src/hooks/useWindowSize';

import { Container, Section } from '@src/css/elements';

import { getLocation } from '@src/actions/location/actions';
import Footer from './Footer';
import Breadcrumb from './Breadcrumb';
import Background from './Background';

const ViewLayout = ({
  title,
  description,
  image,
  DIC,
  path,
  children,
  handleLocation,
}) => {
  const [breadcrumb, setBreadcrumb] = useState([]);
  const { h: height } = useWindowSize();

  useEffect(() => {
    // eslint-disable-next-line no-restricted-globals
    useLocation(path, location, handleLocation);
    window.scrollTo(0, 0);

    const navigation = NAVIGATION.find(item => item.link === path);

    if (navigation && navigation.child) {
      return setBreadcrumb([{ label: navigation.label }, ...navigation.child]);
    }

    return () => {};
  }, [path, DIC]);

  return (
    <Section>
      <Helmet
        title={title}
        meta={[
          { name: 'description', content: `${description}` },
          { property: 'og:title', content: 'welcome to futurecard.com' },
        ]}
      />
      {!!image && <Background section={!!image} image={image} fixed />}
      {!!breadcrumb && !!breadcrumb.length && (
        <Breadcrumb DIC={DIC} items={breadcrumb} path={path} />
      )}
      <Container position={height / 2.5} nopadding>
        {children}
      </Container>

      <Footer />
    </Section>
  );
};

ViewLayout.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string,
  children: PropTypes.node.isRequired,
  path: PropTypes.string.isRequired,
  handleLocation: PropTypes.func.isRequired,
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
  }),
  DIC: PropTypes.shape({}),
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
