import React from "react";
import { Component } from "react";
import "../App.css";

import Temp from "./Temp";
import Wind from "./Wind";
import Sky from "./Sky";

// interface WeatherData {

// }
interface State {
  locationServices: boolean;
  weatherData?: any;
}

class Weather extends Component {
  state: State = {
    locationServices: false,
  };

  componentDidMount() {
    this.getUserLocation();
  }

  // Hämtar användarens position (longitud och latitud)
  getUserLocation() {
    const success = (pos: any) => {
      var crd = pos.coords;

      // SMHI:s API funkar endast med fem (eller sex?)decimaler
      const longitude = crd.longitude.toFixed(6);
      const latitude = crd.latitude.toFixed(6);

      this.setState({
        locationServices: true,
      });

      this.getWeatherData(longitude, latitude);
    };

    const error = (err: any) => {
      this.setState({
        locationServices: false,
      });
    };

    navigator.geolocation.getCurrentPosition(success, error);
  }

  async getWeatherData(lon: number, lat: number) {
    let url = `https://opendata-download-metfcst.smhi.se/api/category/pmp3g/version/2/geotype/point/lon/${lon}/lat/${lat}/data.json`;
    const response = await fetch(url);
    const result = await response.json();

    this.setState({ weatherData: result });
  }

  render() {
    if (this.state.locationServices) {
      return (
        <div className="Weather">
          <Temp weatherData={this.state.weatherData}/>
          <Wind weatherData={this.state.weatherData}/>
          <Sky weatherData={this.state.weatherData}/>
        </div>
      );
    } else {

        return(
          <div>Slå på dina platstjänster och ladda om sidan!</div>
        )
    }
  }
}

export default Weather;
