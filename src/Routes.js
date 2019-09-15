import React, { lazy, Suspense } from 'react';
import { Switch, Route } from 'react-router-dom';

import Loader from '@src/components/Loader';

const Landing = lazy(() => import('./views/Landing'));
const About = lazy(() => import('./views/About'));
const AboutFacility = lazy(() => import('./views/AboutFacility'));
const Careers = lazy(() => import('./views/Careers'));

/** SOLUTIONS ROUTES */
const Solutions = lazy(() => import('./views/Solutions'));


const SolutionsCustomize = lazy(() => import('./views/SolutionsCustomize'));

/** SOLUTIONS CARD MANAGEMENT ROUTES */
const SolutionsCardManagement = lazy(() => import('./views/SolutionsCardManagement'));

/** SOLUTIONS END TO END ROUTES */
const SolutionsEndToEnd = lazy(() => import('./views/SolutionsEndToEnd'));
const SolutionsEndToEndPayment = lazy(() => import('./views/SolutionsEndToEndPayment'));
const SolutionsEndToEndIdentification = lazy(() => import('./views/SolutionsEndToEndIdentification'));
const SolutionsEndToEndTransport = lazy(() => import('./views/SolutionsEndToEndTransport'));
const SolutionsEndToEndTelecom = lazy(() => import('./views/SolutionsEndToEndTelecom'));
const SolutionsEndToEndRetail = lazy(() => import('./views/SolutionsEndToEndRetail'));

/** SERVICES ROUTES */
const Services = lazy(() => import('./views/Services'));
const ServicesDesign = lazy(() => import('./views/ServicesDesign'));
const ServicesFulfillment = lazy(() => import('./views/ServicesFulfillment'));
const ServicesPersonalization = lazy(() => import('./views/ServicesPersonalization'));
const Features = lazy(() => import('./views/Features'));
const FeaturesCard = lazy(() => import('./views/FeaturesCard'));
const FeaturesDesign = lazy(() => import('./views/FeaturesDesign'));
const FeaturesTechnology = lazy(() => import('./views/FeaturesTechnology'));
const News = lazy(() => import('./views/News'));
const Contact = lazy(() => import('./views/Contact'));
const NotFound = lazy(() => import('./views/NotFound'));

const Routes = () => (
  <Suspense fallback={<Loader loader />}>
    <Switch>
      <Route exact path="/" component={Landing} />

      {/* ABOUT */}
      <Route
        path="/about-futurecard/our-facility-and-capabilities"
        component={AboutFacility}
      />
      <Route path="/about-futurecard/careers" component={Careers} />
      <Route path="/about-futurecard" component={About} />

      {/* OUR SOLUTIONS */}
      <Route
        path="/our-solutions/customize-your-card"
        component={SolutionsCustomize}
      />
      <Route
        path="/our-solutions/card-management-systems"
        component={SolutionsCardManagement}
      />
      <Route
        path="/our-solutions/end-to-end-card-solutions/payment"
        component={SolutionsEndToEndPayment}
      />
      <Route
        path="/our-solutions/end-to-end-card-solutions/identification"
        component={SolutionsEndToEndIdentification}
      />
      <Route
        path="/our-solutions/end-to-end-card-solutions/transport-and-access"
        component={SolutionsEndToEndTransport}
      />
      <Route
        path="/our-solutions/end-to-end-card-solutions/telecom"
        component={SolutionsEndToEndTelecom}
      />
      <Route
        path="/our-solutions/end-to-end-card-solutions/retail_loyalty"
        component={SolutionsEndToEndRetail}
      />
      <Route
        path="/our-solutions/end-to-end-card-solutions"
        component={SolutionsEndToEnd}
      />
      <Route path="/our-solutions" component={Solutions} />

      {/* OUR SERVICES */}
      <Route path="/our-services/card-design" component={ServicesDesign} />
      <Route
        path="/our-services/card-personalization"
        component={ServicesPersonalization}
      />
      <Route
        path="/our-services/fulfillment-packaging"
        component={ServicesFulfillment}
      />
      <Route path="/our-services" component={Services} />

      {/* CARD FEATURES */}
      <Route
        path="/card-features/technology-materials"
        component={FeaturesTechnology}
      />
      <Route path="/card-features/card-materials" component={FeaturesCard} />
      <Route
        path="/card-features/design-and-security-features"
        component={FeaturesDesign}
      />
      <Route path="/card-features" component={Features} />

      <Route path="/news" component={News} />
      <Route path="/contact-us" component={Contact} />
      <Route component={NotFound} />
    </Switch>
  </Suspense>
);

export default Routes;
