import { Component } from "react";
import "../App.css";
interface Props {
  temp: number
}
export default class Temp extends Component<Props> {

  render() {
    return <h2>{this.props.temp + ' °C'}</h2>;
  }
}
