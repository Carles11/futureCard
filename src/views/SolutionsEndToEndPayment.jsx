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

import Box from '@src/css/blocks/Box';
import List from '@src/css/blocks/List';
import {
  Article, Grid, Figure, Image, P, A, H3, Hr,
} from '@src/css/elements';

const OPTIONS = [
  {
    id: 0,
    label: 'Card Materials',
    description:
      'Cards materials are supplied as foils for laminating or as granulates for injection molding of the cards.',
    child: [
      {
        id: 1,
        label: 'PVC (Plastic)',
        link: '/card-features/card-materials#pvc',
      },
      {
        id: 2,
        label: 'ECO PVC (Plastic)',
        link: '/card-features/card-materials#eco-pvc',
      },
      {
        id: 3,
        label: 'PET-G (Plastic)',
        link: '/card-features/card-materials#pet-g',
      },
      {
        id: 4,
        label: 'PET-F (Plastic)',
        link: '/card-features/card-materials#pet-f',
      },
      {
        id: 5,
        label: 'Metal',
        link: '/card-features/card-materials#metal',
      },
    ],
  },
  {
    id: 6,
    label: 'Technology',
    description:
      'Advancements in technology paved the way for secure and reliable smart cards that dominate the different sectors of government, transportation, healthcare, retail, telecommunications and financial industries.',
    child: [
      {
        id: 7,
        label: 'Contact',
        link: '/card-features/technology-materials#contact',
      },
      {
        id: 8,
        label: 'Contactless',
        link: '/card-features/technology-materials#contactless',
      },
      {
        id: 9,
        label: 'Dual-Interface',
        link: '/card-features/technology-materials#dual-interface',
      },
      {
        id: 10,
        label: 'Hybrid',
        link: '/card-features/technology-materials#hybrid',
      },
      {
        id: 11,
        label: 'Magstripe',
        link: '/card-features/technology-materials#magstripe',
      },
    ],
  },
  {
    id: 12,
    label: 'Design Features',
    description:
      'FCI has the manufacturing capabilities of below special material and effects:',
    child: [
      {
        id: 13,
        label: 'Colored Core PVC',
        link: '/card-features/design-and-security-features#colored-core-pvc',
      },
      {
        id: 14,
        label: 'Holographic PVC',
        link: '/card-features/design-and-security-features#holographic-pvc',
      },
      {
        id: 15,
        label: 'Transparent PVC with special IR blocker',
        link: '/card-features/design-and-security-features#transparent-pvc',
      },
      {
        id: 16,
        label: 'Hot Stamping',
        link: '/card-features/design-and-security-features#hot-stamping',
      },
      {
        id: 17,
        label: 'Tactile/Spot UV',
        link: '/card-features/design-and-security-features#tactile-spot-uv',
      },
      {
        id: 18,
        label: 'Special Color Magstripes',
        link:
          '/card-features/design-and-security-features#special-color-magstripes',
      },
      {
        id: 19,
        label: 'Special Shapes',
        link: '/card-features/design-and-security-features#special-shapes',
      },
      {
        id: 20,
        label: 'Aromatic & Touch Effect',
        link:
          '/card-features/design-and-security-features#aromatic-touch-effect',
      },
      {
        id: 21,
        label: 'Bejeweled',
        link: '/card-features/design-and-security-features#bejeweled',
      },
    ],
  },
  {
    id: 22,
    label: 'Solutions',
    description:
      'As an end-to-end card manufacturer, mixing technology with security printing craftsmanship, FutureCard covers the complete value chain of design and manufacturing of secure cards on all kind of substrates:',
    child: [
      {
        id: 23,
        label: 'Instant Issuance',
        link: '/solutions#instant-issuance',
      },
      {
        id: 24,
        label: 'Central Issuance',
        link: '/solutions#instant-issuance',
      },
      {
        id: 25,
        label: 'Card Holders Enrollment',
        link: '/solutions#card-holders-enrollment',
      },
      {
        id: 26,
        label: 'Card Lifecycle Management',
        link: '/solutions#card-lyfecycle-management',
      },
    ],
  },
  {
    id: 27,
    label: 'Our Services',
    description:
      'FutureCard completes its offering with complementary cards services and solutions, positionning itself as a one-stop-shop for all cards needs.',
    child: [
      {
        id: 28,
        label: 'Card Design',
        link: '/our-services/card-design',
      },
      {
        id: 29,
        label: 'Card Personalization',
        link: '/our-services/card-personalization',
      },
      {
        id: 30,
        label: 'Fulfillment Packaging',
        link: '/our-solutions/fulfillment-packaging',
      },
    ],
  },
];

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
     * NOT NECESARY TO CREATE DICTIONARIES!!!
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
            industry. Lorem Ipsum has been the industry&apos;s standard dummy
            text ever since the 1500s, when an unknown printer took a galley of
            type and scrambled it to make a type specimen book. It has survived
            not only five centuries, but also the leap into electronic
            typesetting, remaining essentially unchanged. It was popularised in
            the 1960s with the release of Letraset sheets containing Lorem Ipsum
            passages, and more recently with desktop publishing software like
            Aldus PageMaker including versions of Lorem Ipsum.
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
            industry. Lorem Ipsum has been the industry&apos;s standard dummy
            text ever since the 1500s, when an unknown printer took a galley of
            type and scrambled it to make a type specimen book. It has survived
            not only five centuries, but also the leap into electronic
            typesetting, remaining essentially unchanged. It was popularised in
            the 1960s with the release of Letraset sheets containing Lorem Ipsum
            passages, and more recently with desktop publishing software like
            Aldus PageMaker including versions of Lorem Ipsum.
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
            industry. Lorem Ipsum has been the industry&apos;s standard dummy
            text ever since the 1500s, when an unknown printer took a galley of
            type and scrambled it to make a type specimen book. It has survived
            not only five centuries, but also the leap into electronic
            typesetting, remaining essentially unchanged. It was popularised in
            the 1960s with the release of Letraset sheets containing Lorem Ipsum
            passages, and more recently with desktop publishing software like
            Aldus PageMaker including versions of Lorem Ipsum.
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
            industry. Lorem Ipsum has been the industry&apos;s standard dummy
            text ever since the 1500s, when an unknown printer took a galley of
            type and scrambled it to make a type specimen book. It has survived
            not only five centuries, but also the leap into electronic
            typesetting, remaining essentially unchanged. It was popularised in
            the 1960s with the release of Letraset sheets containing Lorem Ipsum
            passages, and more recently with desktop publishing software like
            Aldus PageMaker including versions of Lorem Ipsum.
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
    <HeaderSection
      title={DIC.LOOKING_FOR}
      subtitle="Discover all the options and solutions we offer"
    />
    <Article centered>
      <Box>
        {OPTIONS.map(option => (
          <Box.Item key={option.id} with_background="true">
            <H3 withMargin="1.5rem 0.5rem 1rem" centered>
              {option.label}
            </H3>
            <Hr withSize="80px" withMargin="0 auto 1rem" withAlign="center" />
            <P small withAlign="justify">
              {option.description}
            </P>
            {option.child ? (
              <List>
                {option.child.map(link => (
                  <List.Item key={link.id}>
                    <A role="link" to={link.link}>
                      {link.label}
                    </A>
                  </List.Item>
                ))}
              </List>
            ) : null}
          </Box.Item>
        ))}
      </Box>
    </Article>
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
