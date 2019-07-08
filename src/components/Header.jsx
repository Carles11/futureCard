import React, { Fragment, useReducer, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
// import { Link } from 'react-router-dom';

import { setDictionary } from '@src/actions/dictionary/actionsSideEffects';

import Layout from '@src/css/blocks/Layout';

import { NAVIGATION } from '@src/utils/constants';
import logo from '@src/assets/image/logo_white.png';
import HeaderIcons from './HeaderIcons';

function headerReducer(state, action) {
  switch (action.type) {
    case 'ALL':
      return {
        ...state,
        language: action.language,
        navigation: [...action.navigation],
      };
    case 'CHANGE':
      return {
        ...state,
        visibility: action.visibility,
      };
    default:
      return {
        ...state,
      };
  }
}

const Header = ({ LANG: language, DIC }) => {
  const initialState = { language, navigation: NAVIGATION, visibility: false };
  const [state, dispatch] = useReducer(headerReducer, initialState);

  useEffect(() => {
    dispatch({ type: 'ALL', language, navigation: NAVIGATION });
  }, [language]);

  function handleChangeVisibility(visibility) {
    dispatch({ type: 'CHANGE', visibility });
  }
  return (
    <Fragment>
      <Layout.Header>
        <Layout.Header.Overlay visible={state.visibility} />
        <Layout.Header.Logo>
          {/* <Link to="/"> */}
          <Layout.Header.Logo.Image src={logo} alt="Futurecard logo" />
          {/* </Link> */}
        </Layout.Header.Logo>
        <Layout.Header.Navigation visible={state.visibility}>
          {state.navigation.map((item) => {
            const LABEL = `NAV_LABEL_${item.label}`;

            return (
              <Layout.Header.Navigation.Link
                key={item.key}
                to={item.link}
                onClick={() => handleChangeVisibility(false)}
              >
                {DIC[LABEL]}
              </Layout.Header.Navigation.Link>
            );
          })}
        </Layout.Header.Navigation>
        <HeaderIcons
          visibility={state.visibility}
          handleIconClick={handleChangeVisibility}
        />
        <Layout.Header.HeaderBackground />
      </Layout.Header>
    </Fragment>
  );
};

Header.propTypes = {
  LANG: PropTypes.string.isRequired,
  DIC: PropTypes.shape({
    NAV_LABEL_HOME: PropTypes.string.isRequired,
    NAV_LABEL_LANGUAGE: PropTypes.string.isRequired,
    NAV_LABEL_NEWS: PropTypes.string.isRequired,
    NAV_LABEL_PRODUCTS: PropTypes.string.isRequired,
    NAV_LABEL_SERVICES: PropTypes.string.isRequired,
    NAV_LABEL_CONTACT: PropTypes.string.isRequired,
  }).isRequired,
};

const mapStateToProps = ({ dictionary }) => ({
  LANG: dictionary.language,
  DIC: dictionary.data,
});

const mapDispatchToProps = dispatch => ({
  handleSetDictionary: lang => dispatch(setDictionary(lang)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Header);
