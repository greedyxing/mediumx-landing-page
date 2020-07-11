import "tailwindcss/dist/base.css";
import "styles/globalStyles.css";
import React from "react";
import { css } from "styled-components/macro"; //eslint-disable-line

/*
 * This is the entry point component of this project. You can change the below exported default App component to any of
 * the prebuilt landing page components by uncommenting their import and export lines respectively.
 * See one of the landing page components to better understand how to import and render different components (Always
 * make sure if you are building your own page, the root component should be the AnimationRevealPage component. You can
 * disable the animation by using the disabled prop.
 *
 * The App component below is using React router to render the landing page that you see on the live demo website
 * and the component previews.
 *
 */

/* Use AnimationRevealPage as a wrapper component for your pages if you are custom building it */
// import AnimationRevealPage from "helpers/AnimationRevealPage.js";

/*
 * Hero section is the top most section on the page. It contains the header as well.
 * So you dont need to import headers
 * separately
 */

import SaaSProductLandingPage from "demos/SaaSProductLandingPage.js";
import AboutPage from "pages/AboutUs";
import PricingPage from "pages/Pricing";
import BlogPage from "pages/BlogIndex";
import AuthPage from "pages/Signup";
import ContactPage from "pages/ContactUs";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const GetBaidu = props => {
  let children = props.children;
  let _hmt = _hmt || [];
  (function() {
    var hm = document.createElement("script");
    hm.src = "https://hm.baidu.com/hm.js?5aafa25d50339782f08e82eaa9aabb96";
    var s = document.getElementsByTagName("script")[0];
    s.parentNode.insertBefore(hm, s);
  })();
  return children;
};

export default function App() {
  // return <AnimationRevealPage disabled></AnimationRevealPage>;
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
