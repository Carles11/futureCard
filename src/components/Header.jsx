import React, { Fragment, useReducer, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { NAVIGATION } from '@src/utils/constants';
import logo from '@src/assets/image/logo.png';
import logoWhite from '@src/assets/image/logo_white.png';
import useSize from '@src/hooks/useSize';
import NavigationItem from '@src/components/NavigationItem';

import Layout from '@src/css/blocks/Layout';
import { logOut } from '@src/actions/admin/actionsSideEffects';
import HeaderIcons from './HeaderIcons';

const Header = ({
  LANG: language, DIC, path, token, handleCloseSession,
}) => {
  const initialState = {
    language,
    navigation: NAVIGATION,
    visibility: false,
    position: false,
    dark: false,
    mobile: false,
    active: false,
  };
  const [state, dispatch] = useReducer(headerReducer, initialState);
  const size = useSize();

  /** Handles screen resolution and effects in the menu */
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
            return (
              <Fragment key={item.key}>
                {!!item.child && !state.mobile ? (
                  <NavigationItem
                    item={item}
                    label={DIC[LABEL]}
                    dark={state.dark}
                    path={path}
                    DIC={DIC}
                    fn={handleChangeVisibility}
                  />
                ) : (
                  <Layout.Header.Navigation.Link
                    key={item.key}
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
          {!!token && (
            <Layout.Header.Navigation.Item
              with_dark={state.dark ? state.dark.toString() : undefined}
              onClick={handleCloseSession}
            >
              Close
            </Layout.Header.Navigation.Item>
          )}
        </Layout.Header.Navigation>
        <HeaderIcons
          visibility={state.visibility}
          handleIconClick={handleChangeVisibility}
        />
        <Layout.Header.HeaderBackground visible />
      </Layout.Header>
    </Fragment>
  );
};

function headerReducer(state, action) {
  switch (action.type) {
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
    NAV_LABEL_SERVICES: PropTypes.string.isRequired,
    NAV_LABEL_CONTACT: PropTypes.string.isRequired,
  }).isRequired,
  path: PropTypes.string.isRequired,
  token: PropTypes.string.isRequired,
  handleCloseSession: PropTypes.func.isRequired,
};

const mapStateToProps = ({ dictionary, location, admin }) => ({
  LANG: dictionary.language,
  DIC: dictionary.data,
  path: location.path,
  token: admin.token,
});

const mapDispatchToProps = dispatch => ({
  handleCloseSession: () => dispatch(logOut()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Header);
