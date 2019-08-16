import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, signIn, signOut } from "./actions";
import "./App.css";

function Component1() {
  const counter = useSelector(state => state.counter);
  const isLogged = useSelector(state => state.isLogged);

  const dispatch = useDispatch();

  const signInToggle = () => {
    if (isLogged) {
      dispatch(signOut());
    } else {
      dispatch(signIn());
    }
  };

  return (
    <div class="container center-align animated fadeIn slow">
      Component1
      <h3>Counter {counter}</h3>
      <br />
      <br />
      <button
        className="waves-effect waves-teal btn"
        onClick={() => dispatch({ type: "INCREMENT" })}
      >
        +
      </button>
      <button
        className="waves-effect waves-teal btn"
        onClick={() => dispatch(increment())}
      >
        second +
      </button>
      <br />
      <br />
      <button
        className="waves-effect waves-teal btn"
        onClick={() => dispatch({ type: "DECREMENT" })}
      >
        -
      </button>
      <button
        className="waves-effect waves-teal btn"
        onClick={() => dispatch(decrement())}
      >
        second -
      </button>
      <br />
      <br />
      <button
        className="green accent-3 waves-effect waves-green btn"
        onClick={() => dispatch({ type: "SIGN_IN" })}
      >
        Sign In
      </button>
      <button
        className="green accent-3 waves-effect waves-green btn"
        onClick={() => dispatch(signIn())}
      >
        second Sign In
      </button>
      <br />
      <br />
      <button
        className="red accent-3 waves-effect waves-green btn"
        onClick={() => dispatch({ type: "SIGN_OUT" })}
      >
        Sign Out
      </button>
      <button
        className="red accent-3 waves-effect waves-green btn"
        onClick={() => dispatch(signOut())}
      >
        Second Sign Out
      </button>
      <br />
      <br />
      <button
        className="grey darken-2 waves-effect waves-black btn"
        onClick={
          isLogged
            ? () => dispatch({ type: "SIGN_OUT" })
            : () => dispatch({ type: "SIGN_IN" })
        }
      >
        Sign In Toggle
      </button>
      <br />
      <br />
      <button
        className="grey darken-2 waves-effect waves-black btn"
        onClick={signInToggle}
      >
        Second Sign In Toggle
      </button>
      {isLogged === true && (
        <h3>Information that can only be seen if I am Logged in</h3>
      )}
    </div>
  );
}

export default Component1;
