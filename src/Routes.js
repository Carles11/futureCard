import React, { lazy, Suspense } from 'react';
import { Switch, Route } from 'react-router-dom';

import Loader from '@src/components/Loader';

const Landing = lazy(() => import('./views/Landing'));
const Products = lazy(() => import('./views/Products'));

const Routes = () => (
  <Suspense fallback={<Loader loader />}>
    <Switch>
      <Route exact path="/" component={Landing} />
      <Route path="/products" component={Products} />
    </Switch>
  </Suspense>
);

export default Routes;
