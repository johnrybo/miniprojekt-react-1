import React, { CSSProperties } from "react";
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
        <div style={cities}>
        <Melbourne />
        <NewYork />
        <Paris />
        </div>
      </main>
    );
  }
}

const cities: CSSProperties = {
  display: 'flex',
  justifyContent: 'space-evenly',
  width: '100%'
}

export default Main;
