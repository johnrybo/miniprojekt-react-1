import { Component, CSSProperties } from "react";
import "../App.css";

interface State {
  position: string;
  temp: number;
  sky: string;
}
export default class London extends Component {
  state: State = {
    position: "",
    temp: 0,
    sky: "",
  };

  componentDidMount() {
    let lon = -0.1257;
    let lat = 51.5085;
    this.getWeather(lon, lat);
  }

  async getWeather(lon: number, lat: number) {
    let APIKey = "c2a3479cf7f0d7dd2b48b2f371689e02";
    let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${APIKey}&units=metric`;
    const response = await fetch(url);
    const result = await response.json();

    console.log(result);

    this.setState({
      position: result.name,
      temp: result.main.temp.toFixed(0),
      sky: result.weather[0].main,
    });
  }

  render() {
    return (
      <div style={center}>
        <h1 style={textStyle}>{this.state.position}</h1>
        <h2>{this.state.temp + ' °C'}</h2>
        <h2>{this.state.sky}</h2>
      </div>
    );
  }
}

const textStyle: CSSProperties = {
    fontSize: '1.5rem'
}

const center: CSSProperties = {
    textAlign: 'center'
}