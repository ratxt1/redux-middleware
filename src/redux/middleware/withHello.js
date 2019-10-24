export const withHello = () => {
  return next => action => {
    console.log("hello");
    return next(action);
  };
};
