import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import GetBaidu from "./helpers/GetBaidu";
import getGoogleAnalytics from "./helpers/GetGoogleAnalytics";

import SaaSProductLandingPage from "./demos/SaaSProductLandingPage.js";
import AboutPage from "./pages/AboutUs";
import PricingPage from "./pages/Pricing";
import BlogPage from "./pages/BlogIndex";
import AuthPage from "./pages/Signup";
import ContactPage from "./pages/ContactUs";

export default function Routes() {
  // 激活google analytics
  getGoogleAnalytics();

  return (
    <Router>
      <Switch>
        <GetBaidu>
          <Route path="/about">
            <AboutPage />
          </Route>
          <Route path="/pricing">
            <PricingPage />
          </Route>
          <Route path="/blog">
            <BlogPage />
          </Route>
          <Route path="/auth">
            <AuthPage />
          </Route>
          <Route path="/contact-us">
            <ContactPage />
          </Route>
          <Route path="/">
            <SaaSProductLandingPage />
          </Route>
        </GetBaidu>
      </Switch>
    </Router>
  );
}
