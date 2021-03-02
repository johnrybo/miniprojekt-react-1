import React, { Component, CSSProperties } from "react";
import { Link, BrowserRouter as Router } from "react-router-dom";
import "../App.css";

export default class Info extends Component {
  render() {
    return (
      <Router>
        <div style={infoStyle}>
          <h2>Info om projektet</h2>
          <Link to="/" style={linkStyle}>Gå tillbaka till startsidan</Link>
        </div>
      </Router>
    );
  }
}

const infoStyle: CSSProperties = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    width: '100%',
    height: '100%'
}

const linkStyle: CSSProperties = {
    color: 'white',
}