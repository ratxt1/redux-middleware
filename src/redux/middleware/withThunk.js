//modified redux-thunk code
function createThunkMiddleware(extraArgument) {
  return ({ dispatch, getState }) => next => async action => {
    if (typeof action === "function") {
      console.log("INITIATED", action);
      return action(dispatch, getState, extraArgument);
    } else if (action.error) {
      console.log("FAILED", action);
    } else {
      console.log("SUCCESS", action);
      return next(action);
    }
  };
}

const thunk = createThunkMiddleware();
thunk.withExtraArgument = createThunkMiddleware;

export default thunk;
