import React, { Component } from "react";
import "./App.css";

// import components
import Header from "./components/header";
import Main from "./components/Main";
import Footer from "./components/Footer";

interface State {
  backgroundColor: string;
}

export default class App extends Component {
  state: State = {
    backgroundColor: "",
  };

  componentDidMount() {
    this.setBackgroundColor();
  }

  setBackgroundColor() {
    let d = new Date();
    let n = d.getHours();
    let bgr;

    if (n > 7 && n < 20) {
      bgr = "#3066BE";
    } else {
      bgr = "#2E294E";
    }

    this.setState({ backgroundColor: bgr });
  }

  render() {
    return (
      <div
        className="App"
        style={{ backgroundColor: this.state.backgroundColor }}
      >
        <Header />
        <Main />
        <Footer />
      </div>
    );
  }
}
