import React, { lazy, Suspense } from 'react';
import { Switch, Route } from 'react-router-dom';

const Landing = lazy(() => import('./views/Landing'));

const Routes = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Switch>
      <Route exact path="/" component={Landing} />
    </Switch>
  </Suspense>
);

export default Routes;
