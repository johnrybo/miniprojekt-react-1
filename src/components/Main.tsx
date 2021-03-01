import { Component } from "react";
import "../App.css";

//import components
import Weather from "./Weather";
class Main extends Component {

  render() {

      return (
        <main>
          <Weather />
        </main>
      );
  }
}

export default Main;
