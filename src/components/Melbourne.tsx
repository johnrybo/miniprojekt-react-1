import { Component, CSSProperties } from "react";
import "../App.css";

interface State {
  position: string;
  temp: number;
  description: string;
}
export default class Melbourne extends Component {
  state: State = {
    position: "",
    temp: 0,
    description: "",
  };

  componentDidMount() {
    let lon = 144.9633;
    let lat = -37.814;
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
      description: this.capitalizeFirstLetter(result.weather[0].description)
    });
  }

  capitalizeFirstLetter(string: string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  render() {
    return (
      <div style={center}>
        <h1 style={textStyle}>{this.state.position}</h1>
        <h2>{this.state.temp + ' °C'}</h2>
        <h2>{this.state.description}</h2>
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