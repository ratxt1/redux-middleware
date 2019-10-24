import { createStore, compose, applyMiddleware } from "redux";
import rootReducer from "./rootReducer";
import { withHello } from "./middleware/withHello";
import thunk from "./middleware/withThunk";

const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(withHello, thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

export default store;
