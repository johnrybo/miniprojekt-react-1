import React from "react";
import { Component } from "react";
import "../App.css";

interface State {
  windDirection: number;
  windSpeed: number;
}
export default class Wind extends Component {
  state: State = {
    windDirection: 0,
    windSpeed: 0,
  };

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

      this.getWind(longitude, latitude);
    };

    const error = (err: any) => {};

    navigator.geolocation.getCurrentPosition(success, error);
  }

  // Hämtar vädret från SMHI:s API
  async getWind(lon: number, lat: number) {
    let url = `https://opendata-download-metfcst.smhi.se/api/category/pmp3g/version/2/geotype/point/lon/${lon}/lat/${lat}/data.json`;
    const response = await fetch(url);
    const result = await response.json();

    let wd;
    let ws;

    // Om temperaturen är på index 1
    if (result.timeSeries[0].parameters[1].name === "t") {
      wd = this.getWindDirection(result.timeSeries[0].parameters[3].values[0]);
      ws = result.timeSeries[0].parameters[4].values[0];

      // Om temperaturen är på index 10
    } else if (result.timeSeries[0].parameters[10].name === "t") {
      wd = this.getWindDirection(result.timeSeries[0].parameters[13].values[0]);
      ws = result.timeSeries[0].parameters[14].values[0];
    }

    this.setState({
      windDirection: wd,
      windSpeed: ws,
    });
  }

  // Hämtar vindriktning och gör om till pil
  getWindDirection = (wd: number) => {
    let west: string = "\u2190";
    let north: string = "\u2191";
    let east: string = "\u2192";
    let south: string = "\u2193";
    let northwest: string = "\u2196";
    let northeast: string = "\u2197";
    let southeast: string = "\u2198";
    let southwest: string = "\u2199";

    if (wd > 337.5 || wd < 22.5) {
      return west;
    } else if (wd > 22.5 && wd < 67.5) {
      return northwest;
    } else if (wd > 67.5 && wd < 112.5) {
      return north;
    } else if (wd > 112.5 && wd < 157.5) {
      return northeast;
    } else if (wd > 157.5 && wd < 202.5) {
      return east;
    } else if (wd > 202.5 && wd < 247.5) {
      return southeast;
    } else if (wd > 247.5 && wd < 292.5) {
      return south;
    } else if (wd > 292.5 && wd < 337.5) {
      return southwest;
    }
  };

  render() {
    return (
      <div>{this.state.windDirection + ' ' + this.state.windSpeed + " m/s"}</div>
    );
  }
}
