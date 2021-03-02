import { Component } from "react";
import "../App.css";
interface Props {
  temp: number
}
export default class Temp extends Component<Props> {

  render() {
    return <div>{this.props.temp + ' °C'}</div>;
  }
}
