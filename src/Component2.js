import React from "react";
import { connect } from "react-redux";
import { increment, decrement, signIn, signOut } from "./actions";

class Component2 extends React.Component {
  render() {
    return (
      <div className="container center animated fadeIn slow">
        Component2
        <h3>Second Counter {this.props.counter}</h3>
        <br />
        <br />
        <button
          className="waves-effect waves-teal btn"
          onClick={() => this.props.increment()}
        >
          +
        </button>
        <button
          className="waves-effect waves-teal btn"
          onClick={() => this.props.decrement()}
        >
          -
        </button>
        <br />
        <br />
        <button
          className="green accent-3 waves-effect waves-green btn"
          onClick={() => this.props.signIn()}
        >
          Sign In
        </button>
        <button
          className="red accent-3 waves-effect waves-green btn"
          onClick={() => this.props.signOut()}
        >
          Sign Out
        </button>
        {this.props.isLogged === true && (
          <h3>Information that can only be seen if I am Logged in</h3>
        )}
        <br />
        <br />
        <br />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    counter: state.counter,
    isLogged: state.isLogged
  };
};

const mapDispatchToProps = () => {
  return {
    increment,
    decrement,
    signIn,
    signOut
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps()
)(Component2);
