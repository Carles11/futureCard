import React, { lazy, Suspense } from 'react';
import { Switch, Route } from 'react-router-dom';

const Landing = lazy(() => import('./views/Landing'));
const Products = lazy(() => import('./views/Products'));
<<<<<<< HEAD
const Services = lazy(() => import('./views/Services'));
const News = lazy(() => import('./views/News'));
const Contact = lazy(() => import('./views/Contact'));
=======
>>>>>>> master

const Routes = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Switch>
      <Route exact path="/" component={Landing} />
      <Route path="/products" component={Products} />
<<<<<<< HEAD
      <Route path="/services" component={Services} />
      <Route path="/contact" component={Contact} />
      <Route path="/news" component={News} />
=======
>>>>>>> master
    </Switch>
  </Suspense>
);

export default Routes;
