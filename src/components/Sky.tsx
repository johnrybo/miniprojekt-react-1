import { Component, CSSProperties } from "react";
import "../App.css";
import { longitude, latitude } from "./Main";

interface State {
  sky: any;
  icon: any;
}

export default class Sky extends Component {
  state: State = {
    sky: "",
    icon: "",
  };

  componentDidMount() {
    // this.getSky(longitude, latitude);
    this.getSky2(longitude, latitude);
  }

  // Open Weather Data 

  async getSky2(lon: number, lat: number) {
    let APIKey = "c2a3479cf7f0d7dd2b48b2f371689e02";
    let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${APIKey}&units=metric`;
    const response = await fetch(url);
    const result = await response.json();

    console.log("sky: " + result.weather[0].main);

    this.setState({
      sky: result.weather[0].main,
      icon: this.getWeatherIcon(result.weather[0].main),
    });
  }

  getWeatherIcon(sky: any) {
    if (sky === "Clear") {
      return "01d";
    } else if (sky === 'Thunderstorm') {
      return "11d";
    } else if (sky === 'Drizzle') {
      return "09d";
    } else if (sky === 'Rain') {
      return "10d";
    } else if (sky === 'Snow') {
      return "13d";
    } else if (sky === 'Clouds') {
      return "03d";
    } else {
      return "50d" // Atmosphere
    }
  }

  // SMHI

  async getSky(lon: number, lat: number) {
    let url = `https://opendata-download-metfcst.smhi.se/api/category/pmp3g/version/2/geotype/point/lon/${lon}/lat/${lat}/data.json`;
    const response = await fetch(url);
    const result = await response.json();

    this.getWsymb2(result.timeSeries[0].parameters[18].values[0]);
  }

  // Hämtar typ av väder / himmel och gör om till text
  getWsymb2(wsymb2: number) {
    if (wsymb2 === 1) {
      this.setState({
        sky: "Klar himmel",
        emoji: "☀️",
      });
    } else if (wsymb2 === 2 || wsymb2 === 3 || wsymb2 === 4) {
      this.setState({
        sky: "Varierande molnighet",
        emoji: "⛅",
      });
    } else if (wsymb2 === 5 || wsymb2 === 6) {
      this.setState({
        sky: "Mulet",
        emoji: "☁️",
      });
    } else if (wsymb2 === 7) {
      this.setState({
        sky: "Dimma",
        emoji: "🌫",
      });
    } else if (
      wsymb2 === 8 ||
      wsymb2 === 9 ||
      wsymb2 === 10 ||
      wsymb2 === 18 ||
      wsymb2 === 19 ||
      wsymb2 === 20
    ) {
      this.setState({
        sky: "Regn",
        emoji: "�",
      });
    } else if (wsymb2 === 11 || wsymb2 === 21) {
      this.setState({
        sky: "Åskväder",
        emoji: "⚡️",
      });
    } else if (
      wsymb2 === 12 ||
      wsymb2 === 13 ||
      wsymb2 === 14 ||
      wsymb2 === 22 ||
      wsymb2 === 23 ||
      wsymb2 === 24
    ) {
      this.setState({
        sky: "Snöblandat regn",
        emoji: "🌨",
      });
    } else if (
      wsymb2 === 15 ||
      wsymb2 === 16 ||
      wsymb2 === 17 ||
      wsymb2 === 25 ||
      wsymb2 === 26 ||
      wsymb2 === 27
    ) {
      this.setState({
        sky: "Snöfall",
        emoji: "❄️",
      });
    }
  }

  render() {

    return (
      <div>
        <div style={this.skyStyle}>{this.state.sky}</div>
        <div style={this.emojiStyle}>
          {" "}
          <img
            src={`http://openweathermap.org/img/wn/${this.state.icon}@4x.png`}
            alt="Weather icon"
          />
        </div>
      </div>
    );
  }

  skyStyle: CSSProperties = {
    fontSize: "3rem",
    textAlign: "center",
  };

  emojiStyle: CSSProperties = {
    textAlign: "center",
    fontSize: "5rem",
  };
}
