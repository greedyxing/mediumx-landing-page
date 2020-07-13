import { createBrowserHistory } from "history";
import ReactGA from "react-ga";

const getGoogleAnalytics = () => {
  const history = createBrowserHistory();

  // 初始化google analytics
  ReactGA.initialize("UA-172151302-1");

  // Initialize google analytics page view tracking
  history.listen(location => {
    ReactGA.set({ page: location.pathname }); // Update the user's current page
    ReactGA.pageview(location.pathname); // Record a pageview for the given page
  });
};

export default getGoogleAnalytics;
