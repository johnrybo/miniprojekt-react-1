import { Component } from "react";
import "../App.css";

import Temp from "./Temp";
import Wind from "./Wind";
import Sky from "./Sky";
import ErrorBoundary from './errorBoundary';

class Weather extends Component {

  render() {
      return (
        <div className="Weather">
          <ErrorBoundary>
              <Temp />
              <Wind />
              <Sky />
          </ErrorBoundary>
        </div>
      );
  }
}

export default Weather;
