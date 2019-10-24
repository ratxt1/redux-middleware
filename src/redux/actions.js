import { createActionCustom } from "./middleware/createAction";

export const increment = createActionCustom("INCREMENT");

export const incrementAsync = payload => {
  const asyncAction = async (dispatch, getState) => {
    const { count } = getState();
    setTimeout(() => {
      if (count % 3 === 2) {
        dispatch(increment(payload, "no multiples of 3"));
      } else {
        dispatch(increment(payload));
      }
    }, 1000);
  };
  asyncAction.toString = increment.toString;
  return asyncAction;
};
