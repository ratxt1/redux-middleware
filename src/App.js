import React from "react";
import "./App.css";
import { connect } from "react-redux";
import { increment, incrementAsync } from "./redux/actions";

const App = ({ count, increment, incrementAsync }) => {
  return (
    <div className="App">
      <div>Count: {count}</div>
      <button onClick={() => increment(1)}>+</button>
      <button onClick={() => incrementAsync(1)}>delayed +</button>
    </div>
  );
};

const mapStatetoProps = state => {
  return { count: state.count };
};

const mapDispatchtoProps = {
  increment,
  incrementAsync
};

export default connect(
  mapStatetoProps,
  mapDispatchtoProps
)(App);
