import React, { Fragment, useReducer, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { NAVIGATION } from '@src/utils/constants';
import logo from '@src/assets/image/logo.png';
import logoWhite from '@src/assets/image/logo_white.png';
import useScroll from '@src/hooks/useScroll';
import useSize from '@src/hooks/useSize';
import Submenu from '@src/components/Submenu';

import Layout from '@src/css/blocks/Layout';
import HeaderIcons from './HeaderIcons';

const Header = ({ LANG: language, DIC, path }) => {
  const initialState = {
    language,
    navigation: NAVIGATION,
    visibility: false,
    position: false,
    dark: false,
    mobile: false,
  };
  const [state, dispatch] = useReducer(headerReducer, initialState);
  const position = useScroll();
  const size = useSize();

  useEffect(() => {
    dispatch({ type: 'ALL', language, navigation: NAVIGATION });
  }, [language]);

  useEffect(() => {
    if (!state.position && position > 100) {
      dispatch({ type: 'SCROLL', position: true });
      dispatch({ type: 'DARK', dark: false });
    }

    if (!!state.position && position <= 100) {
      dispatch({ type: 'SCROLL', position: false });
      dispatch({ type: 'DARK', dark: path === '/' });
    }
  }, [position]);

  useEffect(() => {
    const dark = path === '/';
    dispatch({ type: 'DARK', dark });
  }, [path]);

  useEffect(() => {
    if (size.w <= 1024 && !state.mobile) {
      dispatch({ type: 'MOBILE', mobile: true });
    }

    if (size.w > 1024 && !!state.mobile) {
      dispatch({ type: 'MOBILE', mobile: false });
    }
  }, [size]);

  function handleChangeVisibility(visibility) {
    dispatch({ type: 'CHANGE', visibility });
  }

  function handleSubmenu(e) {
    const active = e.target.id;

    dispatch({ type: 'SUBMENU', active: state.active ? '' : Number(active) });
  }

  return (
    <Fragment>
      <Layout.Header>
        <Layout.Header.Overlay visible={state.visibility} />
        <Layout.Header.Logo>
          <Link to="/">
            <Layout.Header.Logo.Image
              src={state.dark ? logoWhite : logo}
              alt="Futurecard logo"
            />
          </Link>
        </Layout.Header.Logo>
        <Layout.Header.Navigation visible={state.visibility}>
          {state.navigation.map((item) => {
            const LABEL = `NAV_LABEL_${item.label}`;
            const children = item.child ? 'arrow' : null;

            return (
              <Fragment key={item.key}>
                {!!children && !state.mobile ? (
                  <Layout.Header.Navigation.Container
                    id={item.key}
                    with_dark={!!state.dark}
                    active={
                      path === item.link ? item.link.toString() : undefined
                    }
                    onMouseEnter={handleSubmenu}
                    onMouseLeave={handleSubmenu}
                  >
                    {DIC[LABEL]}
                    {item.key === state.active ? (
                      <Submenu items={item.child} DIC={DIC} />
                    ) : null}
                  </Layout.Header.Navigation.Container>
                ) : (
                  <Layout.Header.Navigation.Link
                    with_dark={state.dark ? state.dark.toString() : undefined}
                    active={
                      path === item.link ? item.link.toString() : undefined
                    }
                    to={item.link}
                    onClick={() => handleChangeVisibility(false)}
                  >
                    {DIC[LABEL]}
                  </Layout.Header.Navigation.Link>
                )}
              </Fragment>
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
    case 'SUBMENU':
      return {
        ...state,
        active: action.active,
      };
    case 'MOBILE':
      return {
        ...state,
        mobile: action.mobile,
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
