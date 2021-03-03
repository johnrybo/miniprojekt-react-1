import React from "react";
import { Component, CSSProperties } from "react";
import { Link, Route, Switch } from "react-router-dom";
import "../App.css";
import Info from "./Info";

import Melbourne from "./Melbourne";
import NewYork from "./NewYork";
import Paris from "./Paris";
import Tokyo from "./Tokyo";

import Music from "./Music";

//import components
import Weather from "./Weather";

export default class Main extends Component {

  render() {
    return (
        <Switch>
          <Route exact path="/">
            <main>
              <Weather />
              <Music />
              <div className="cities">
                <NewYork />
                <Melbourne />
                <Paris />
                <Tokyo />
              </div>
            </main>
          </Route>
          <Route path="/info">
            <Info />
          </Route>
          <div style={{textAlign: 'center'}}>
            <h2 style={{padding: '1rem'}}>This page doesn't exist :( 404</h2>
              <Link to="/" style={linkStyle}>Return to the start page</Link>
          </div>
        </Switch>
    );
  }
}

const linkStyle: CSSProperties = {
  color: "white",
  textAlign: 'center'
};