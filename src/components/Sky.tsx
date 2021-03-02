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
        <div style={textStyle}>{this.props.sky}</div>
        <img src={`http://openweathermap.org/img/wn/${this.props.icon}@4x.png`} alt="Weather icon"/>
      </div>
    );
  }
}

const skyStyle: CSSProperties = {
  display: "flex",
  flexDirection: 'column',
  textAlign: 'center'
};

const textStyle: CSSProperties = {
  fontSize: '3rem'
}
