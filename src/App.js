import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment } from './actions'
import "./App.css";

function App() {
  const counter = useSelector(state => state.counter);
  const isLogged = useSelector(state => state.isLogged);

  const dispatch = useDispatch();

  return (
    <div>
      Counter {counter}
      <br />
      <button onClick={() => dispatch({ type: "INCREMENT" })}>+</button>
      <button onClick={() => dispatch(increment())}>or +</button>
      <button>-</button>
      {isLogged
        ? "<h3>Information that can only be seen if I am looged in</h3>"
        : ""}
    </div>
  );
}

export default App;
