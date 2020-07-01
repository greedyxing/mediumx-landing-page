import createReducer from "./createReducer";
import * as TYPES from "../actionTypes";

const initialState = {
  isShowDevBanner: true
};

const utilityReducer = createReducer(initialState, {
  [TYPES.SHOW_UNDER_DEVELOPMENT_BANNER]: (state, action) => {
    return Object.assign({}, state, {
      isShowDevBanner: action.payload
    });
  },
  [TYPES.HIDE_UNDER_DEVELOPMENT_BANNER]: (state, action) => {
    return Object.assign({}, state, {
      isShowDevBanner: action.payload
    });
  }
});

export default utilityReducer;
