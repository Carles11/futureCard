import React, { lazy, Suspense } from 'react';
import { Switch, Route } from 'react-router-dom';

import Loader from '@src/components/Loader';

const Landing = lazy(() => import('./views/Landing'));
const Products = lazy(() => import('./views/Products'));
const Contact = lazy(() => import('./views/Contact'));

const Routes = () => (
  <Suspense fallback={<Loader />}>
    <Switch>
      <Route exact path="/" component={Landing} />
      <Route path="/products" component={Products} />
      <Route path="/contact" component={Contact} />
    </Switch>
  </Suspense>
);

export default Routes;
