import React, { useReducer, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
  FiInstagram, FiMail, FiFacebook, FiLinkedin,
} from 'react-icons/fi';

import { ADDRESSES, LANGUAGE, NAVIGATION } from '@src/utils/constants';
import { setDictionary } from '@src/actions/dictionary/actionsSideEffects';
import Icon from '@src/components/Icon';

import Layout from '@src/css/blocks/Layout';
import {
  AExternal,
  Address,
  Footer,
  Grid,
  H3,
  H4,
  Hr,
  P,
} from '@src/css/elements';

const YEAR = new Date().getFullYear();

function footerReducer(state, action) {
  switch (action.type) {
    case 'ALL':
      return {
        ...state,
        language: action.language,
        navigation: [...action.navigation],
      };
    default:
      return {
        ...state,
      };
  }
}

const FooterComponent = ({ LANG: language, DIC, handleSetDictionary }) => {
  const initialState = { language, navigation: NAVIGATION };
  const [state, dispatch] = useReducer(footerReducer, initialState);

  useEffect(() => {
    dispatch({ type: 'ALL', language, navigation: NAVIGATION });
  }, [language]);

  function handleLanguage(value) {
    handleSetDictionary(value);
  }

  return (
    <Footer>
      <Grid column>
        <Grid withPadding="2rem 5%" queryColumn>
          <Grid column flex={1}>
            <Grid column>
              <H3
                sansSerif
                invertColor
                withSize="22px"
                withMargin="1rem 0 0.2rem"
              >
                {DIC.COMPANY_OFFICES}
              </H3>
              <Hr withSize="100px" />
            </Grid>
            <Grid withMargin="1rem 0" wrapping>
              {ADDRESSES.map(item => (
                <Address key={item.id} wrapping>
                  <H4 invertColor withSize="18px" withMargin="1rem 0 0">
                    {item.title}
                  </H4>
                  <P bold small highlight withMargin="0.15rem 0 0.75rem">
                    {item.subtitle}
                  </P>
                  <P invertColor tiny withMargin="0.25rem 0 0.1rem">
                    {item.address}
                  </P>
                  <P invertColor tiny bold withMargin="0 0 0.1rem">
                    {item.location}
                  </P>
                  <P invertColor tiny withMargin="0 0 0.1rem">
                    {item.phone}
                  </P>
                  {!!item.fax && (
                    <P invertColor tiny withMargin="0 0 0.2rem">
                      {item.fax}
                    </P>
                  )}
                </Address>
              ))}
            </Grid>
          </Grid>
          <Grid column withMargin="0 3rem 0 0">
            <Grid column>
              <H3
                sansSerif
                invertColor
                withSize="22px"
                withMargin="1rem 0 0.2rem"
              >
                {DIC.COMPANY_INFO}
              </H3>
              <Hr withSize="100px" />
            </Grid>
            <Grid withMargin="1rem 0" wrapping>
              <Layout.Footer>
                {state.navigation.map((item) => {
                  const LABEL = `NAV_LABEL_${item.label}`;

                  return (
                    <Layout.Footer.Link key={item.key} to={item.link}>
                      {DIC[LABEL]}
                    </Layout.Footer.Link>
                  );
                })}
              </Layout.Footer>
            </Grid>
          </Grid>
          <Grid column withMargin="0">
            <Grid column>
              <H3
                sansSerif
                invertColor
                withSize="22px"
                withMargin="1rem 0 0.2rem"
              >
                {DIC.NAV_LABEL_LANGUAGE}
              </H3>
              <Hr withSize="100px" />
            </Grid>
            <Grid withMargin="1rem 0" wrapping>
              <Layout.Footer>
                {LANGUAGE.map((item) => {
                  const active = item.value === state.language;

                  return (
                    <Layout.Footer.Item
                      active={active}
                      key={item.id}
                      onClick={() => handleLanguage(item.value)}
                    >
                      {item.label}
                    </Layout.Footer.Item>
                  );
                })}
              </Layout.Footer>
            </Grid>
          </Grid>
        </Grid>
        <Grid darker withMargin="0" withPadding="1rem 5%">
          <Grid flex={1}>
            <P invertColor small>
              {YEAR}
              {' '}
&copy; Futurecard industries LLC
            </P>
          </Grid>
          <Grid middle>
            <AExternal
              href="https://www.linkedin.com/company/future-card/"
              target="_blank"
            >
              <Icon>
                <FiLinkedin />
              </Icon>
            </AExternal>
            <AExternal href="https://www.facebook.com/FutureCardindustries/">
              <Icon>
                <FiFacebook />
              </Icon>
            </AExternal>
            <AExternal
              href="https://www.instagram.com/futurecardindustries/"
              target="_blank"
            >
              <Icon>
                <FiInstagram />
              </Icon>
            </AExternal>
            <AExternal href="mailto:info@futurecard.com">
              <Icon>
                <FiMail />
              </Icon>
            </AExternal>
          </Grid>
        </Grid>
      </Grid>
    </Footer>
  );
};

FooterComponent.propTypes = {
  LANG: PropTypes.string.isRequired,
  DIC: PropTypes.shape({
    COMPANY_INFO: PropTypes.string.isRequired,
    COMPANY_OFFICES: PropTypes.string.isRequired,
    NAV_LABEL_HOME: PropTypes.string.isRequired,
    NAV_LABEL_LANGUAGE: PropTypes.string.isRequired,
    NAV_LABEL_NEWS: PropTypes.string.isRequired,
    NAV_LABEL_PRODUCTS: PropTypes.string.isRequired,
    NAV_LABEL_SERVICES: PropTypes.string.isRequired,
  }).isRequired,
  handleSetDictionary: PropTypes.func.isRequired,
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
)(FooterComponent);
