import React, { Fragment, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import ViewLayout from '@src/components/ViewLayout';
import HeaderSection from '@src/components/HeaderSection';
import Loader from '@src/components/Loader';

import Box from '@src/css/blocks/Box';
import List from '@src/css/blocks/List';
import {
  Article, Grid, Figure, Image, P, A, H3, Hr,
} from '@src/css/elements';

import { getCards } from '@src/actions/cards/actionsSideEffects';

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
 * SolutionsEndToEndIdentification View Component
 *
 * @param {Object} props
 * @param {Object} props.DIC
 */
const SolutionsEndToEndIdentification = ({
  DIC,
  language,
  cards,
  cardsLang,
  handleGetCards,
}) => {
  useEffect(() => {
    if (cardsLang !== language) {
      handleGetCards('identification', language);
    }
  }, [language]);
  return (
    <ViewLayout
      title={`${DIC.NAV_LABEL_SOLUTIONS}`}
      description={DIC.SOLUTIONS_DESCRIPTION}
    >
      <HeaderSection
        title={DIC.NAV_LABEL_SOLUTIONS}
        subtitle={DIC.SOLUTIONS_DESCRIPTION}
      />
      <Fragment>
        {cards.length ? (
          cards.map(card => (
            <Article key={card._id} centered with_margin="3.5rem auto 0">
              <Grid responsive>
                <Grid flex="1">
                  <Figure card>
                    <Image
                      responsive
                      loading="auto"
                      src={card.img}
                      alt={card.name}
                    />
                  </Figure>
                </Grid>
                <Grid column flex="1" withMargin="2rem 0 0">
                  <H3 withMargin="0">{card.name}</H3>
                  <P>{card.description}</P>
                </Grid>
              </Grid>
            </Article>
          ))
        ) : (
          <Grid loader>
            <Loader />
          </Grid>
        )}
      </Fragment>

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
              <P small>{option.description}</P>
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
};

SolutionsEndToEndIdentification.propTypes = {
  DIC: PropTypes.shape({
    NAV_LABEL_SOLUTIONS: PropTypes.string.isRequired,
  }).isRequired,
  language: PropTypes.string.isRequired,
  cards: PropTypes.arrayOf({}),
  cardsLang: PropTypes.string.isRequired,
  handleGetCards: PropTypes.func.isRequired,
};

const mapStateToProps = ({ dictionary, cards }) => ({
  DIC: dictionary.data,
  language: dictionary.language,
  cards: cards.identification,
  cardsLang: cards.lang,
});

const mapDispatchToProps = dispatch => ({
  handleGetCards: (code, lang) => dispatch(getCards(code, lang)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(SolutionsEndToEndIdentification);
