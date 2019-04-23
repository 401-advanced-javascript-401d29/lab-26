import React from "react";
import { connect } from "react-redux";
import Header from "./header.js";
import Footer from "./footer.js";
import "./app.scss";

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0
    };
  }

  incrementButtonClick = e => {
    e.preventDefault();
    this.setState({ counter: this.state.counter + 1 });
  };

  decrementButtonClick = e => {
    e.preventDefault();
    this.setState({ counter: this.state.counter - 1 });
  };

  render() {
    return (
      <main>
        <h4>{this.state.counter}</h4>
        <div>
          <a onClick={this.incrementButtonClick}>Increment Counter</a>
          <a onClick={this.decrementButtonClick}>Decrement Counter</a>
        </div>
      </main>
    );
  }
}

class App extends React.Component {
  å;
  render() {
    return (
      <React.Fragment>
        <Header />
        <Counter />
        <Footer />
      </React.Fragment>
    );
  }
}

export default App;
