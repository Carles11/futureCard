import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import HeaderSection from '@src/components/HeaderSection';

import Loader from '@src/components/Loader';
import Icon from '@src/components/Icon';
import { FiArrowLeftCircle, FiArrowRightCircle } from 'react-icons/fi';
import news2 from '@src/assets/image/news_2.jpeg';
import news3 from '@src/assets/image/news_3.jpeg';
import news4 from '@src/assets/image/news_4.jpeg';

import Box from '@src/css/blocks/Box';
import {
  A, Article, Button, Grid, H4, Hr, P,
} from '@src/css/elements';

const NEWS = [
  {
    id: 0,
    title: 'Futurecard collaborates with Fingerprints',
    content:
      'Futurecard collaborates with Fingerprints to address Middle East Banks with BIOMETRIC PAYMENT Card #banks #biometric #paymentcard #middleeast #fingerprints #seamlessdxb #security',
    img: news4,
    date: '03/05/2019',
    link: '/news',
  },
  {
    id: 1,
    title:
      'Futurecard @ #seamlessdxb 2019 #payments #fintech #smartcards #biometrics',
    content:
      'Futurecard collaborates with Fingerprints to address Middle East Banks with BIOMETRIC PAYMENT Card',
    img: news2,
    date: '01/03/2019',
    link: '/news',
  },
  {
    id: 2,
    title: 'Ramadan Kareem from FutureCard #ramadankareem #ramadan2019',
    content:
      'FutureCard is a uniquely positioned card supplier in the vibrant EMEA region. ',
    img: news3,
    date: '04/01/2019',
    link: '/news',
  },
];

const LandingNews = ({ DIC }) => {
  const [loading, setLoading] = useState(false);
  const [count, setCount] = useState(3);

  useEffect(() => {
    if (loading) {
      setTimeout(() => {
        setLoading(!loading);
      }, 1000);
    }
  }, [loading]);

  function fakeApiRequest() {
    const total = count < 36 ? count + 3 : 3;
    setCount(total);
    setLoading(!loading);
  }

  return (
    <Article centered>
      <HeaderSection title={DIC.NAV_LABEL_NEWS} subtitle={DIC.NEWS_DESCRIPTION} />
      <Grid middle withMargin="1rem 0 2rem">
        <Button withIcon onClick={fakeApiRequest}>
          <FiArrowLeftCircle />
        </Button>
        <P withMargin="0 1rem">{`${count} of 36`}</P>
        <Button withIcon onClick={fakeApiRequest}>
          <FiArrowRightCircle />
        </Button>
      </Grid>
      {loading ? (
        <Grid withMargin="17rem" middle vertical="center">
          <Loader />
        </Grid>
      ) : (
        <Box>
          {NEWS.map(item => (
            <Box.Item key={item.id} withScale withBackground>
              <Box.Figure>
                <Box.Figure.Image src={item.img} alt={item.title} />
              </Box.Figure>
              <P
                highlight
                tiny
                bold
                withMargin="1.5rem 0 0.2rem"
                withAlign="center"
              >
                <h4>{DIC.NEWS_PUBLISHED_THE}</h4>
                {' '}
                {item.date}
              </P>
              <H4 withMargin="0 0.5rem 0.5rem" centered>
                {item.title}
              </H4>
              <Hr withSize="80px" withMargin="0 auto 1rem" withAlign="center" />
              <P small withPadding="0 1rem 0.5rem" withAlign="center">
                {item.content}
              </P>
              {item.link && (
              <Grid withMargin="0 0 1.5rem" vertical="center">
                <A role="button" to={item.link}>
                  {DIC.LEARN_MORE}
                  <Icon>
                    <FiArrowRightCircle />
                  </Icon>
                </A>
              </Grid>
              )}
            </Box.Item>
          ))}
        </Box>
      )}
    </Article>
  );
};

LandingNews.propTypes = {
  DIC: PropTypes.shape({
    LEARN_MORE: PropTypes.string.isRequired,
    NAV_LABEL_NEWS: PropTypes.string.isRequired,
    NEWS_DESCRIPTION: PropTypes.string.isRequired,
    NEWS_PUBLISHED_THE: PropTypes.string.isRequired,
  }).isRequired,
};

export default LandingNews;
