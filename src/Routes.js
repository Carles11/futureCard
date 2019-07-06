import React, { lazy, Suspense } from 'react';
import { Switch, Route } from 'react-router-dom';

import Loader from '@src/components/Loader';

const Landing = lazy(() => import('./views/Landing'));
const Products = lazy(() => import('./views/Products'));
const Services = lazy(() => import('./views/Services'));
const News = lazy(() => import('./views/News'));
const Contact = lazy(() => import('./views/Contact'));

const Routes = () => (
  <Suspense fallback={<Loader loader />}>
    <Switch>
      <Route exact path="/" component={Landing} />
      <Route path="/products" component={Products} />
      <Route path="/services" component={Services} />
      <Route path="/news" component={News} />
      <Route path="/contact" component={Contact} />
    </Switch>
  </Suspense>
);

export default Routes;
