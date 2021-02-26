import React from "react";
import { Component } from "react";
import "../App.css";

import Temp from "./Temp";
import Wind, { getWindDirection } from "./Wind";
import Sky, { getSky } from "./Sky";
import ErrorBoundary from "./errorBoundary";

interface State {
  temp: number;
  windDirection: string;
  windSpeed: number;
  sky: string;
  location: boolean;
}

class Weather extends Component {
  state: State = {
    temp: 0,
    windDirection: "",
    windSpeed: 0,
    sky: "",
    location: false,
  };

  // Oklart om detta är korrekt sätt att köra getUserLocation()
  componentDidMount() {
    this.getUserLocation();
  }

  // Hämtar användarens position (longitud och latitud)
  getUserLocation() {
    const success = (pos: any) => {
      var crd = pos.coords;

      // SMHI:s API funkar endast med fem decimaler
      let longitude = crd.longitude.toFixed(5);
      let latitude = crd.latitude.toFixed(5);

      this.getWeather(longitude, latitude);

      this.setState({
      location: true
      });
    };

    const error = (err: any) => {
      this.setState( {
        location: false
      })
    }


    navigator.geolocation.getCurrentPosition(success, error);
  }

  // Hämtar vädret från SMHI:s API
  async getWeather(lon: number, lat: number) {
    
    let url = `https://opendata-download-metfcst.smhi.se/api/category/pmp3g/version/2/geotype/point/lon/${lon}/lat/${lat}/data.json`;
    const response = await fetch(url);
    const result = await response.json();

    console.log(result.timeSeries[0]);

    let temp;
    let wd;
    let ws;
    let wsymb2;

    // Om temperaturen är på index 1
    if (result.timeSeries[0].parameters[1].name === "t") {
      temp = result.timeSeries[0].parameters[1].values[0];
      wd = getWindDirection(result.timeSeries[0].parameters[3].values[0]);
      ws = result.timeSeries[0].parameters[4].values[0];
      wsymb2 = getSky(result.timeSeries[0].parameters[18].values[0]);

      // Om temperaturen är på index 10
    } else if (result.timeSeries[0].parameters[10].name === "t") {
      temp = result.timeSeries[0].parameters[10].values[0];
      wd = getWindDirection(result.timeSeries[0].parameters[13].values[0]);
      ws = result.timeSeries[0].parameters[14].values[0];
      wsymb2 = getSky(result.timeSeries[0].parameters[18].values[0]);
    }

    this.setState({
      temp: temp,
      windDirection: wd,
      windSpeed: ws,
      sky: wsymb2,
    });
  }

  render() {
    if (this.state.location) {
      return (
        <div className="Weather">
          <Temp text={this.state.temp + " °C"} />
          <Wind
            text={this.state.windDirection + " " + this.state.windSpeed + " m/s"}
          />
          <ErrorBoundary>
            <Sky text={this.state.sky} />
          </ErrorBoundary>
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
