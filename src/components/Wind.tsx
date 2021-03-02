import { Component, CSSProperties } from "react";
import "../App.css";
interface Props {
  windDirection: any;
  windSpeed: any;
}
export default class Wind extends Component<Props> {
  render() {
    return (
      <div style={windStyle}>
        {this.props.windDirection + " " + this.props.windSpeed + " m/s"}
      </div>
    );
  }
}

const windStyle: CSSProperties = {
  display: "flex",
};
