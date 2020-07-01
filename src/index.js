import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import App from "./App";
import configureStore from "store";
import { PersistGate } from "redux-persist/integration/react";
import Modal from "react-modal";

const { store, persistor } = configureStore();

Modal.setAppElement("#root");

const renderApp = () => {
  ReactDOM.render(
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>,
    document.getElementById("root")
  );
};

if (process.env.NODE_ENV !== "production" && module.hot) {
  module.hot.accept("./App", renderApp);
}

renderApp();
