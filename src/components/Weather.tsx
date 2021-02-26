import React from "react";
import { Component } from "react";
import "../App.css";

import Temp from "./Temp";
import Wind from "./Wind";
import Sky from "./Sky";

interface State {
  location: boolean;
}

export const latitude: number = 0;
export const longitude: number = 0;
class Weather extends Component {
  state: State = {
    location: false,
  };

  longitude: any;
  latitude: any;

  componentDidMount() {
    this.getUserLocation();
  }

  // Hämtar användarens position (longitud och latitud)
  getUserLocation() {
    const success = (pos: any) => {

      var crd = pos.coords;

      // SMHI:s API funkar endast med fem decimaler
      this.longitude = crd.longitude.toFixed(5);
      this.latitude = crd.latitude.toFixed(5);

      this.setState({
        location: true,
      });
    };

    const error = (err: any) => {
      this.setState({
        location: false,
      });
    };

    navigator.geolocation.getCurrentPosition(success, error);
  }

  render() {
    if (this.state.location) {
      return (
        <div className="Weather">
          <Temp />
          <Wind />
          <Sky />
        </div>
      );
    } else {
      return <div>Slå på dina platstjänster och ladda om sidan!</div>;
    }
  }
}

export default Weather;
