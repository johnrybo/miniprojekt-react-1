import React, { Component, CSSProperties } from "react";
import { Link } from "react-router-dom";
import "../App.css";

export default class Info extends Component {
  render() {
    return (
      <div style={infoStyle}>
        <h2>Information</h2>
        <p style={pStyle}>
          The weather data comes from{" "}
          <a style={aStyle} href="https://openweathermap.org/">
            OpenWeather
          </a>
        </p>
        <div style={memberStyle}>
          <span style={{ padding: "1rem" }}>Project members:</span>
          <span>Linda Söder</span>
          <span style={{ paddingTop: ".3rem" }}>Mia Herman</span>
          <span style={{ paddingTop: ".3rem" }}>John Rybo</span>
        </div>
        <a
          style={aStyle}
          href="https://github.com/johnrybo/miniprojekt-react-1">
          GitHub Repository
        </a>
        <Link to="/" style={linkStyle}>
          Return to the start page
        </Link>
      </div>
    );
  }
}

const pStyle: CSSProperties = {
  color: "white",
  padding: "1rem",
  textAlign: "center",
};

const aStyle: CSSProperties = {
  color: "white",
  padding: "1rem 0 1rem 0",
};

const memberStyle: CSSProperties = {
  display: "flex",
  flexDirection: "column",
  textAlign: "center",
  padding: "1rem 0 1rem 0",
  color: "white",
};

const infoStyle: CSSProperties = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexDirection: "column",
  width: "100%",
  height: "100%",
};

const linkStyle: CSSProperties = {
  color: "white",
};
