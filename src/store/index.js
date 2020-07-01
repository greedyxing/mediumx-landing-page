import { applyMiddleware, compose, createStore } from "redux";
import Logger from "./middlewares/logger.middleware";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web
import rootReducer from "./reducers";

export default function configureStore(preloadedState) {
  const persistConfig = {
    key: "root",
    storage
  };

  const persistedReducer = persistReducer(persistConfig, rootReducer);

  // 中间件
  const middlewares = [Logger];
  const middlewareEnhancer = applyMiddleware(...middlewares);

  // enhancers
  const composeWithDevTool =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  const composeEnhancers = composeWithDevTool(
    middlewareEnhancer
    // other store enhancers if any
  );

  let store = createStore(persistedReducer, preloadedState, composeEnhancers);
  let persistor = persistStore(store);

  // HRM
  if (process.env.NODE_ENV !== "production" && module.hot) {
    module.hot.accept("./reducers", () => {
      const nextRootReducer = require("./reducers").default;
      store.replaceReducer(persistReducer(persistConfig, nextRootReducer));
    });
  }

  return { store, persistor };
}
