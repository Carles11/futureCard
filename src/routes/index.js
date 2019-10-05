import React, { lazy, Suspense } from 'react';
import { Switch, Route } from 'react-router-dom';

import Loader from '@src/components/Loader';

const Landing = lazy(() => import('./Landing'));
const About = lazy(() => import('./About'));
const AboutFacility = lazy(() => import('./AboutFacility'));
const Careers = lazy(() => import('./Careers'));

/** SOLUTIONS ROUTES */
const Solutions = lazy(() => import('./Solutions'));
const SolutionsCustomize = lazy(() => import('./SolutionsCustomize'));

/** SOLUTIONS CARD MANAGEMENT ROUTES */
const SolutionsCardManagement = lazy(() => import('./SolutionsCardManagement'));
const SolutionsCardManagementCentralIssuance = lazy(() => import('./SolutionsCardManagementCentralIssuance'));
const SolutionsCardManagementInstantIssuance = lazy(() => import('./SolutionsCardManagementInstantIssuance'));
const SolutionsCardManagementCardHolder = lazy(() => import('./SolutionsCardManagementCardHolder'));
const SolutionsCardManagementCardLife = lazy(() => import('./SolutionsCardManagementCardLife'));

/** SOLUTIONS END TO END ROUTES */
const SolutionsEndToEnd = lazy(() => import('./SolutionsEndToEnd'));
const SolutionsEndToEndPayment = lazy(() => import('./SolutionsEndToEndPayment'));
const SolutionsEndToEndIdentification = lazy(() => import('./SolutionsEndToEndIdentification'));
const SolutionsEndToEndTransport = lazy(() => import('./SolutionsEndToEndTransport'));
const SolutionsEndToEndTelecom = lazy(() => import('./SolutionsEndToEndTelecom'));
const SolutionsEndToEndRetail = lazy(() => import('./SolutionsEndToEndRetail'));

/** SERVICES ROUTES */
const Services = lazy(() => import('./Services'));
const ServicesConsulting = lazy(() => import('./ServicesConsulting'));
const ServicesDesign = lazy(() => import('./ServicesDesign'));
const ServicesFulfillment = lazy(() => import('./ServicesFulfillment'));
const ServicesPersonalization = lazy(() => import('./ServicesPersonalization'));

/** FEATURES ROUTES */
const Features = lazy(() => import('./Features'));
const FeaturesCard = lazy(() => import('./FeaturesCard'));
const FeaturesDesign = lazy(() => import('./FeaturesDesign'));
const FeaturesTechnology = lazy(() => import('./FeaturesTechnology'));

/** NEWS ROUTES */
const NewsDetail = lazy(() => import('./NewsDetail'));
const News = lazy(() => import('./News'));

const Contact = lazy(() => import('./Contact'));
const NotFound = lazy(() => import('./NotFound'));

/** ADMIN */
const AdminEditUser = lazy(() => import('./AdminEditUser'));
const AdminUsers = lazy(() => import('./AdminUsers'));
const AdminEditCareers = lazy(() => import('./AdminEditCareers'));
const AdminCareers = lazy(() => import('./AdminCareers'));
const AdminEditNews = lazy(() => import('./AdminEditNews'));
const AdminNews = lazy(() => import('./AdminNews'));
const Admin = lazy(() => import('./Admin'));

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
        path="/our-solutions/card-management-systems/central-issuance"
        component={SolutionsCardManagementCentralIssuance}
      />
      <Route
        path="/our-solutions/card-management-systems/instant-issuance"
        component={SolutionsCardManagementInstantIssuance}
      />
      <Route
        path="/our-solutions/card-management-systems/cardholder-enrollment-system"
        component={SolutionsCardManagementCardHolder}
      />
      <Route
        path="/our-solutions/card-management-systems/card-life-cycle-management"
        component={SolutionsCardManagementCardLife}
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
        path="/our-services/card-consulting"
        component={ServicesConsulting}
      />
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

      {/* NEWS */}
      <Route path="/news/:id" component={NewsDetail} />
      <Route path="/news" component={News} />

      <Route path="/contact-us" component={Contact} />

      {/* ADMIN  */}
      <Route path="/admin/users/:id" component={AdminEditUser} />
      <Route path="/admin/users" component={AdminUsers} />
      <Route path="/admin/careers/:id" component={AdminEditCareers} />
      <Route path="/admin/careers" component={AdminCareers} />
      <Route path="/admin/news/:id" component={AdminEditNews} />
      <Route path="/admin/news" component={AdminNews} />
      <Route path="/admin" component={Admin} />

      <Route component={NotFound} />
    </Switch>
  </Suspense>
);

export default Routes;
