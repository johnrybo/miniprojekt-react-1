import React from "react";
import { Component } from "react";
import "../App.css";

import Melbourne from "./Melbourne";
import NewYork from "./NewYork";
import Paris from "./Paris";

//import components
import Weather from "./Weather";
class Main extends Component {
  render() {
    return (
      <main>
        <Weather />
        <div className='cities'>
        <NewYork />
        <Melbourne />
        <Paris />
        </div>
      </main>
    );
  }
}

export default Main;
