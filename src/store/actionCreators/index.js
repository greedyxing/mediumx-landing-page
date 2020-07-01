import * as types from "../actionTypes";

const makeActionCreator = (type, ...argNames) => {
  return function(...args) {
    const action = { type };
    argNames.forEach((arg, index) => {
      action[argNames[index]] = args[index];
    });
    return action;
  };
};

export const showDevelopment = makeActionCreator(
  types.SHOW_UNDER_DEVELOPMENT_BANNER,
  "payload"
);

export const hideDevelopement = makeActionCreator(
  types.HIDE_UNDER_DEVELOPMENT_BANNER,
  "payload"
);
