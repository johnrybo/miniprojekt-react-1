import { Component, CSSProperties } from "react";

import "../App.css";
interface Props {
  sky: any;
  icon: any;
}
export default class Sky extends Component<Props> {
  render() {
    return (
      <div style={skyStyle}>
        <h2>{this.props.sky}</h2>
        <img
          style={imgStyle}
          src={`https://openweathermap.org/img/wn/${this.props.icon}@4x.png`}
          alt="Weather icon"
        />
      </div>
    );
  }
}

const skyStyle: CSSProperties = {
  display: "flex",
  flexDirection: "column",
  textAlign: "center",
  alignItems: "center",
};

const imgStyle: CSSProperties = {
  width: "75%",
  height: "auto",
};
