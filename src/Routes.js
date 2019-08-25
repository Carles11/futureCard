import React, { lazy, Suspense } from 'react';
import { Switch, Route } from 'react-router-dom';

import Loader from '@src/components/Loader';

const Landing = lazy(() => import('./views/Landing'));
const About = lazy(() => import('./views/AboutFCI'));
const Products = lazy(() => import('./views/Products'));
const Services = lazy(() => import('./views/Services'));
const Features = lazy(() => import('./views/Features'));
const News = lazy(() => import('./views/News'));
const Contact = lazy(() => import('./views/Contact'));

const Routes = () => (
  <Suspense fallback={<Loader loader />}>
    <Switch>
      <Route exact path="/" component={Landing} />
      <Route path="/about-futurecard" component={About} />
      <Route path="/our-solutions" component={Products} />
      <Route path="/our-services" component={Services} />
      <Route path="/card-features" component={Features} />
      <Route path="/news" component={News} />
      <Route path="/contact-us" component={Contact} />
    </Switch>
  </Suspense>
);

export default Routes;
