import React from "react";
import { Component } from "react";
import "../App.css";

import Temp from "./Temp";
import Wind from "./Wind";
import Sky from "./Sky";

export let longitude = 0;
export let latitude = 0;
interface State {
  location: boolean;
}

class Weather extends Component {
  state: State = {
    location: false,
  };

  componentDidMount() {
    this.getUserLocation();
  }

  // Hämtar användarens position (longitud och latitud)
  getUserLocation() {
    const success = (pos: any) => {
      var crd = pos.coords;

      // SMHI:s API funkar endast med fem (eller sex?)decimaler
      longitude = crd.longitude.toFixed(6);
      latitude = crd.latitude.toFixed(6);

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

        return(
          <div>Slå på dina platstjänster och ladda om sidan!</div>
        )
    }
  }
}

export default Weather;
