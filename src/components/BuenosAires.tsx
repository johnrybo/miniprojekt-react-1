import { Component } from "react";
import "../App.css";

interface State {
  position: string;
  temp: number;
  description: string;
}
export default class BuenosAires extends Component {
  state: State = {
    position: "",
    temp: 0,
    description: "",
  };

  componentDidMount() {
    let lon = -58.3772;
    let lat = -34.6132;
    this.getWeather(lon, lat);
  }

  async getWeather(lon: number, lat: number) {
    let APIKey = "c2a3479cf7f0d7dd2b48b2f371689e02";
    let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${APIKey}&units=metric`;
    const response = await fetch(url);
    const result = await response.json();

    this.setState({
      position: result.name,
      temp: result.main.temp.toFixed(0),
      description: this.capitalizeFirstLetter(result.weather[0].description),
    });
  }

  capitalizeFirstLetter(string: string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  render() {
    return (
      <div>
        <h3>{this.state.position}</h3>
        <h4>{this.state.temp + " °C"}</h4>
        <h4>{this.state.description}</h4>
      </div>
    );
  }
}
