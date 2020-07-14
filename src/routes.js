import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useParams
} from "react-router-dom";
import GetBaidu from "./helpers/GetBaidu";
import getGoogleAnalytics from "./helpers/GetGoogleAnalytics";

import SaaSProductLandingPage from "./demos/SaaSProductLandingPage.js";
import AboutPage from "./pages/AboutUs";
import PricingPage from "./pages/Pricing";
import BlogPage from "./pages/BlogIndex";
import AuthPage from "./pages/Signup";
import ContactPage from "./pages/ContactUs";
import { Blogs } from "Blog";

export default function Routes() {
  // 激活google analytics
  getGoogleAnalytics();

  return (
    <Router>
      <Switch>
        <GetBaidu>
          <Route exact path="/about">
            <AboutPage />
          </Route>
          <Route exact path="/pricing">
            <PricingPage />
          </Route>
          <Route exact path="/blog">
            <BlogPage />
          </Route>
          <Route exact path="/blog/:id">
            <Child />
          </Route>
          <Route exact path="/auth">
            <AuthPage />
          </Route>
          <Route exact path="/contact-us">
            <ContactPage />
          </Route>
          <Route exact path="/">
            <SaaSProductLandingPage />
          </Route>
        </GetBaidu>
      </Switch>
    </Router>
  );
}

function Child() {
  let { id } = useParams();
  const BlogComponent = Blogs[id];

  return (
    <>
      <BlogComponent />
    </>
  );
}
