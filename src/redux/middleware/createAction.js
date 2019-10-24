export const createActionCustom = actionType => {
  const actionCreator = (payload, error) => {
    const action = { type: actionType, payload };
    if (error) {
      action.error = error;
    }
    return action;
  };
  actionCreator.toString = () => {
    return actionType;
  };
  return actionCreator;
};
