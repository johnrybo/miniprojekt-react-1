import React, { Component } from "react";
import "../App.css";

import Temp from "./Temp";
import Wind from "./Wind";
import Sky from "./Sky";

import {
  BsArrowDownLeft,
  BsArrowDownRight,
  BsArrowDown,
  BsArrowUp,
  BsArrowLeft,
  BsArrowRight,
  BsArrowUpLeft,
  BsArrowUpRight,
} from "react-icons/bs";

interface State {
  locationServices: boolean | null;
  position: string;
  temp: number;
  windDirection: number;
  windSpeed: number;
  sky: string;
  description: string;
  icon: any;
  time: number;
}
export default class Weather extends Component {
  state: State = {
    locationServices: null,
    position: "",
    temp: 0,
    windDirection: 0,
    windSpeed: 0,
    sky: "",
    description: "",
    icon: "",
    time: 0,
  };

  componentDidMount() {
    this.getUserLocation();
  }

  getUserLocation() {
    const success = (pos: any) => {
      var crd = pos.coords;
      let longitude = crd.longitude;
      let latitude = crd.latitude;
      this.getWeather(longitude, latitude);

      this.setState({
        locationServices: true,
      });
    };

    const error = () => {
      this.setState({
        locationServices: false,
      });
    };

    navigator.geolocation.getCurrentPosition(success, error);
  }

  async getWeather(lon: number, lat: number) {
    let APIKey = "c2a3479cf7f0d7dd2b48b2f371689e02";
    let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${APIKey}&units=metric`;
    const response = await fetch(url);
    const result = await response.json();

    this.setState({
      position: result.name,
      temp: result.main.temp.toFixed(0),
      windDirection: this.getWindDirection(result.wind.deg),
      windSpeed: result.wind.speed.toFixed(1),
      sky: result.weather[0].main,
      description: this.capitalizeFirstLetter(result.weather[0].description),
      icon: this.getWeatherIcon(
        result.weather[0].main,
        result.weather[0].description
      ),
    });
  }

  capitalizeFirstLetter(string: string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  getWindDirection = (wd: number) => {
    if (wd > 337.5 || wd < 22.5) {
      return <BsArrowLeft />;
    } else if (wd > 22.5 && wd < 67.5) {
      return <BsArrowUpLeft />;
    } else if (wd > 67.5 && wd < 112.5) {
      return <BsArrowUp />;
    } else if (wd > 112.5 && wd < 157.5) {
      return <BsArrowUpRight />;
    } else if (wd > 157.5 && wd < 202.5) {
      return <BsArrowRight />;
    } else if (wd > 202.5 && wd < 247.5) {
      return <BsArrowDownRight />;
    } else if (wd > 247.5 && wd < 292.5) {
      return <BsArrowDown />;
    } else if (wd > 292.5 && wd < 337.5) {
      return <BsArrowDownLeft />;
    }
  };

  getWeatherIcon(sky: any, description: any) {
    let date = new Date();
    let hour = date.getHours();
    this.setState({ time: hour });

    if (sky === "Clear" && this.state.time >= 7 && this.state.time <= 19) {
      return "01d";
    } else if (
      (sky === "Clear" && this.state.time < 7) ||
      (sky === "Clear" && this.state.time > 19)
    ) {
      return "01n";
    } else if (sky === "Thunderstorm") {
      return "11d";
    } else if (sky === "Drizzle") {
      return "09d";
    } else if (
      sky === "Rain" &&
      this.state.time >= 7 &&
      this.state.time <= 19
    ) {
      return "10d";
    } else if (
      (sky === "Rain" && this.state.time < 7) ||
      (sky === "Rain" && this.state.time > 19)
    ) {
      return "10n";
    } else if (sky === "Snow") {
      return "13d";
    } else if (sky === "Clouds" && description !== "few clouds") {
      return "03d";
    } else if (
      sky === "Clouds" &&
      description === "few clouds" &&
      this.state.time >= 7 &&
      this.state.time <= 19
    ) {
      return "02d";
    } else if (
      (sky === "Clouds" &&
        description === "few clouds" &&
        this.state.time < 7) ||
      (sky === "Clouds" && description === "few clouds" && this.state.time > 19)
    ) {
      return "02n";
    } else {
      return "50d"; // Atmosphere
    }
  }

  render() {
    console.log(this.state.locationServices);
    if (this.state.locationServices) {
      return (
        <div className="Weather">
          <h1>{this.state.position}</h1>
          <Temp temp={this.state.temp} />
          <Wind
            windDirection={this.state.windDirection}
            windSpeed={this.state.windSpeed}
          />
          <Sky sky={this.state.description} icon={this.state.icon} />
        </div>
      );
    } else if (this.state.locationServices === false) {
      return (
        <div>
          <h2 className="locationText">
            Please turn on your location services and reload the page
          </h2>
        </div>
      );
    } else {
      return (
        <div>
          <h2 className="locationText">Loading...</h2>
        </div>
      );
    }
  }
}
