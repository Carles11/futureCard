import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { FiArrowRightCircle } from 'react-icons/fi';

import ViewLayout from '@src/components/ViewLayout';
import HeaderSection from '@src/components/HeaderSection';
import Icon from '@src/components/Icon';
import ecoCard from '@src/assets/image/eco_card.png';
import giftCard from '@src/assets/image/gift_card.png';
import healthCard from '@src/assets/image/health_card.png';
import transportCard from '@src/assets/image/transport_card.png';

import {
  Article, Grid, Figure, Image, P, A, H3,
} from '@src/css/elements';

/**
 * SolutionsEndToEndPayment View Component
 *
 * @param {Object} props
 * @param {Object} props.DIC
 */

const SolutionsEndToEndPayment = ({ DIC }) => (
  <ViewLayout
    title={`${DIC.NAV_LABEL_SOLUTIONS} | ${DIC.NAV_LABEL_PAYMENT}`}
    description={DIC.SOLUTIONS_END_TO_END_PAYMENT_DESCRIPTION}
  >
    <HeaderSection
      title={DIC.NAV_LABEL_PAYMENT}
      subtitle={DIC.SOLUTIONS_END_TO_END_PAYMENT_DESCRIPTION}
    />

    {/*
       *
       *  @todo xvila - Move all the card data to DDBB
       *
       */}
    <Article centered with_margin="3.5rem auto 0">
      <Grid responsive>
        <Grid flex="1">
          <Figure card>
            <Image responsive src={healthCard} alt="EMV Card" />
          </Figure>
        </Grid>
        <Grid column flex="2">
          <H3 withMargin="0">EMV Card</H3>
          <P>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry&apos;s standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
          </P>
          <Grid responsive withMargin="1rem 0">
            <A role="button" to="/card-features/card-materials">
                Learn about EMV Card material
              <Icon>
                <FiArrowRightCircle />
              </Icon>
            </A>
          </Grid>
        </Grid>
      </Grid>
    </Article>
    <Article centered>
      <Grid responsive>
        <Grid flex="1">
          <Figure card>
            <Image responsive src={transportCard} alt="EMV Card" />
          </Figure>
        </Grid>
        <Grid column flex="2">
          <H3 withMargin="0">White Label Card</H3>
          <P>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry&apos;s standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
          </P>
          <Grid responsive withMargin="1rem 0">
            <A role="button" to="/card-features/card-materials">
                Learn about White Label Card material
              <Icon>
                <FiArrowRightCircle />
              </Icon>
            </A>
          </Grid>
        </Grid>
      </Grid>
    </Article>
    <Article centered>
      <Grid responsive>
        <Grid flex="1">
          <Figure card>
            <Image responsive src={giftCard} alt="EMV Card" />
          </Figure>
        </Grid>
        <Grid column flex="2">
          <H3 withMargin="0">EMV Biometric Card</H3>
          <P>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry&apos;s standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
          </P>
          <Grid responsive withMargin="1rem 0">
            <A role="button" to="/card-features/card-materials">
                Learn about EMV Biometric Card material
              <Icon>
                <FiArrowRightCircle />
              </Icon>
            </A>
          </Grid>
        </Grid>
      </Grid>
    </Article>
    <Article centered>
      <Grid responsive>
        <Grid flex="1">
          <Figure card>
            <Image responsive src={ecoCard} alt="EMV Card" />
          </Figure>
        </Grid>
        <Grid column flex="2">
          <H3 withMargin="0">Metal Card</H3>
          <P>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry&apos;s standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
          </P>
          <Grid responsive withMargin="1rem 0">
            <A role="button" to="/card-features/card-materials">
                Learn about Metal Card material
              <Icon>
                <FiArrowRightCircle />
              </Icon>
            </A>
          </Grid>
        </Grid>
      </Grid>
    </Article>
    <HeaderSection title={DIC.LOOKING_FOR} />
    <Article centered />
  </ViewLayout>
);

SolutionsEndToEndPayment.propTypes = {
  DIC: PropTypes.shape({
    NAV_LABEL_SOLUTIONS: PropTypes.string.isRequired,
    LOOKING_FOR: PropTypes.string.isRequired,
  }).isRequired,
};

const mapStateToProps = ({ dictionary }) => ({
  DIC: dictionary.data,
});

export default connect(
  mapStateToProps,
  null,
)(SolutionsEndToEndPayment);
