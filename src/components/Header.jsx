import React, {
  Fragment, useReducer, useEffect,
} from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { NAVIGATION } from '@src/utils/constants';
import logo from '@src/assets/image/logo.png';
import logoWhite from '@src/assets/image/logo_white.png';
import useScroll from '@src/hooks/useScroll';

import Layout from '@src/css/blocks/Layout';
import HeaderIcons from './HeaderIcons';

const Header = ({ LANG: language, DIC, path }) => {
  const initialState = {
    language,
    navigation: NAVIGATION,
    visibility: false,
    position: false,
  };
  const [state, dispatch] = useReducer(headerReducer, initialState);
  const position = useScroll();

  useEffect(() => {
    dispatch({ type: 'ALL', language, navigation: NAVIGATION });
  }, [language]);

  useEffect(() => {
    if (!state.position && position > 250) {
      dispatch({ type: 'SCROLL', position: true });
      dispatch({ type: 'DARK', dark: false });
    }

    if (!!state.position && position <= 250) {
      dispatch({ type: 'SCROLL', position: false });
      dispatch({ type: 'DARK', dark: true });
    }
  }, [position]);

  useEffect(() => {
    const dark = path === '/';
    dispatch({ type: 'DARK', dark });
  }, [path]);

  function handleChangeVisibility(visibility) {
    dispatch({ type: 'CHANGE', visibility });
  }

  return (
    <Fragment>
      <Layout.Header>
        <Layout.Header.Overlay visible={state.visibility} />
        <Layout.Header.Logo>
          <Link to="/">
            <Layout.Header.Logo.Image
              src={state.dark ? logoWhite : logo}
              alt="Futurecard"
            />
          </Link>
        </Layout.Header.Logo>
        <Layout.Header.Navigation visible={state.visibility}>
          {state.navigation.map((item) => {
            const LABEL = `NAV_LABEL_${item.label}`;

            return (
              <Layout.Header.Navigation.Link
                with_dark={state.dark ? state.dark.toString() : undefined}
                active={path === item.link ? item.link.toString() : undefined}
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
        <Layout.Header.HeaderBackground
          visible={state.position ? state.position.toString() : undefined}
        />
      </Layout.Header>
    </Fragment>
  );
};

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
    case 'SCROLL':
      return {
        ...state,
        position: action.position,
      };
    case 'DARK':
      return {
        ...state,
        dark: action.dark,
      };
    default:
      return {
        ...state,
      };
  }
}

Header.propTypes = {
  LANG: PropTypes.string.isRequired,
  DIC: PropTypes.shape({
    NAV_LABEL_HOME: PropTypes.string.isRequired,
    NAV_LABEL_SOLUTIONS: PropTypes.string.isRequired,
    NAV_LABEL_LANGUAGE: PropTypes.string.isRequired,
    NAV_LABEL_NEWS: PropTypes.string.isRequired,
    NAV_LABEL_PRODUCTS: PropTypes.string.isRequired,
    NAV_LABEL_SERVICES: PropTypes.string.isRequired,
    NAV_LABEL_CONTACT: PropTypes.string.isRequired,
  }).isRequired,
  path: PropTypes.string.isRequired,
};

const mapStateToProps = ({ dictionary, location }) => ({
  LANG: dictionary.language,
  DIC: dictionary.data,
  path: location.path,
});

export default connect(
  mapStateToProps,
  null,
)(Header);
