import { Component } from "react";
import "../App.css";
interface Props {
  windDirection: any;
  windSpeed: any;
}
export default class Wind extends Component<Props> {
  render() {
    return (
      <h2>
        {this.props.windDirection + " " + this.props.windSpeed + " m/s"}
      </h2>
    );
  }
}