import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { FiArrowRightCircle } from 'react-icons/fi';

import ViewLayout from '@src/components/ViewLayout';
import HeaderSection from '@src/components/HeaderSection';
import CardsList from '@src/components/CardsList';
import CardsListOptions from '@src/components/CardsListOptions';
import Icon from '@src/components/Icon';

import {
  AExternal,
  A,
  Article,
  Button,
  P,
  Image,
  Grid,
} from '@src/css/elements';
import {
  BACKGROUND_IMG,
  OPTIONS_PAYMENT,
  OPTIONS_GENERAL,
} from '@src/utils/constants';

import VISA from '@src/assets/image/payment-logos/visa-card-logo-9.png';
import MASTERCARD from '@src/assets/image/payment-logos/mastercard-logo.png';
import UNIONPAY from '@src/assets/image/payment-logos/unionpay-logo.png';
import PAYPAK from '@src/assets/image/payment-logos/paypak-logo.png';
import GIMAC from '@src/assets/image/payment-logos/gimac-logo.png';
import MERCURY from '@src/assets/image/payment-logos/mercury-logo.png';

import { getCards } from '@src/actions/cards/actionsSideEffects';

/**
 * SolutionsEndToEndPayment View Component
 *
 * @param {Object} props
 * @param {Object} props.DIC
 */
const PAYMENT_LOGOS = [
  {
    id: 0,
    label: 'VISA',
    src: VISA,
    link: 'https://www.visa.com',
  },
  {
    id: 1,
    label: 'MASTERCARD',
    src: MASTERCARD,
    link: 'https://www.mastercard.com',
  },
  {
    id: 2,
    label: 'UNIONPAY',
    src: UNIONPAY,
    link: 'http://www.unionpayintl.com/en/',
  },
  {
    id: 3,
    label: 'PAYPAK',
    src: PAYPAK,
    link: 'https://1link.net.pk/pay-pak/',
  },
  {
    id: 4,
    label: 'GIMAC',
    src: GIMAC,
    link: 'https://gimac-afr.com/',
  },
  {
    id: 5,
    label: 'MERCURY',
    src: MERCURY,
    link: 'https://www.mercury-pay.com/',
  },
];

const SolutionsEndToEndPayment = ({
  DIC,
  language,
  cards,
  cardsLang,
  handleGetCards,
}) => {
  const OPTIONS = [...OPTIONS_PAYMENT, ...OPTIONS_GENERAL];

  useEffect(() => {
    if (!cards.length || cardsLang !== language) {
      handleGetCards('payment', language);
    }
  }, [language]);
  const style = {
    height: 'auto',
    width: '50%',
    margin: '20px',
  };
  return (
    <ViewLayout
      title={`${DIC.NAV_LABEL_SOLUTIONS} | ${DIC.NAV_LABEL_PAYMENT}`}
      description={DIC.SOLUTIONS_END_TO_END_PAYMENT_DESCRIPTION}
      image={BACKGROUND_IMG.CARD_PAYMENT}
    >
      <HeaderSection
        title={DIC.NAV_LABEL_PAYMENT}
        subtitle={DIC.SOLUTIONS_END_TO_END_PAYMENT_DESCRIPTION}
      />

      <Article centered>
        <P>{DIC.SOLUTIONS_END_TO_END_PAYMENT_CONTENT}</P>
        <Grid responsive withMargin="5rem auto 2rem" middle vertical="center">
          {PAYMENT_LOGOS.map(item => (
            <Grid key={item.id} flex="1" withMargin="0 1rem 1rem">
              <AExternal href={item.link} target="_blank">
                <Image
                  style={style}
                  logosAdapt
                  src={item.src}
                  alt={`${item.label}-logo`}
                />
              </AExternal>
            </Grid>
          ))}
        </Grid>
      </Article>
      <CardsList cards={cards} />
      <Grid column withMargin="4rem 0 2rem">
        <HeaderSection
          title={DIC.LOOKING_FOR}
          subtitle="Discover all the options and solutions we offer for our payment cards"
        />
        <CardsListOptions options={OPTIONS} />
      </Grid>

      <Article>
        <Button.Centered>
          <A role="button" to="/our-solutions/end-to-end-card-solutions">
            {`${DIC.BACK_HOME} ${DIC.NAV_LABEL_END_TO_END}`}
            <Icon>
              <FiArrowRightCircle />
            </Icon>
          </A>
        </Button.Centered>
      </Article>
    </ViewLayout>
  );
};

SolutionsEndToEndPayment.propTypes = {
  DIC: PropTypes.shape({
    BACK_HOME: PropTypes.string.isRequired,
    LOOKING_FOR: PropTypes.string.isRequired,
    NAV_LABEL_SOLUTIONS: PropTypes.string.isRequired,
    NAV_LABEL_PAYMENT: PropTypes.string.isRequired,
    NAV_LABEL_END_TO_END: PropTypes.string.isRequired,
    SOLUTIONS_END_TO_END_PAYMENT_DESCRIPTION: PropTypes.string.isRequired,
    SOLUTIONS_END_TO_END_PAYMENT_CONTENT: PropTypes.string.isRequired,
  }).isRequired,
  language: PropTypes.string.isRequired,
  cards: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.string,
      name: PropTypes.string,
      description: PropTypes.string,
      img: PropTypes.string,
    }),
  ),
  cardsLang: PropTypes.string.isRequired,
  handleGetCards: PropTypes.func.isRequired,
};

const mapStateToProps = ({ dictionary, cards }) => ({
  DIC: dictionary.data,
  language: dictionary.language,
  cards: cards.payment,
  cardsLang: cards.lang,
});

const mapDispatchToProps = dispatch => ({
  handleGetCards: (code, lang) => dispatch(getCards(code, lang)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(SolutionsEndToEndPayment);
