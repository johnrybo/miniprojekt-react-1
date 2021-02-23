import React from "react";
import { Component } from "react";
import "../App.css";

import Temp from './Temp';
import Wind from './Wind';
import Sky from './Sky';

interface State {
  temp: number,
  windDirection: string,
  windSpeed: number,
  sky: string,
}

class Weather extends Component {
  state: State = {
    temp: 0,
    windDirection: "",
    windSpeed: 0,
    sky: "",
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
    }
  
    const error = (err: any) => {
      console.warn(`ERROR(${err.code}): ${err.message}`);
    }
  
    navigator.geolocation.getCurrentPosition(success, error);
  }

  // Hämtar vädret från SMHI:s API
  async getWeather(lon: number, lat: number) {
    let url = `https://opendata-download-metfcst.smhi.se/api/category/pmp3g/version/2/geotype/point/lon/${lon}/lat/${lat}/data.json`;
    const response = await fetch(url);
    const result = await response.json();

    let temp = result.timeSeries[0].parameters[1].values[0];
    let wd = result.timeSeries[0].parameters[4].values[0];
    let ws = result.timeSeries[0].parameters[4].values[0];
    let wsymb2 = result.timeSeries[0].parameters[18].values[0];
    
    this.setState({
      temp: temp,
      windDirection: this.getWindDirection(wd),
      windSpeed: ws,
      sky: this.getSky(wsymb2)
    })
  }
  
  // Hämtar vindriktning och gör om till pil
  getWindDirection = (wd: number) => {
    let west = '\u2190';
    let north = '\u2191';
    let east = '\u2192';
    let south = '\u2193';
    let northwest = '\u2196';
    let northeast = '\u2197';
    let southeast = '\u2198';
    let southwest = '\u2199';
  
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
  }
  
  // Hämtar typ av väder / himmel och gör om till text
  getSky = (wsymb2: number) => {
    if (wsymb2 === 1) {
      return "Klar himmel";
    } else if (wsymb2 === 2) {
      return "Nästan klar himmel";
    } else if (wsymb2 === 3) {
      return "Varierande molnighet";
    } else if (wsymb2 === 4) {
      return "Halvklar himmel";
    } else if (wsymb2 === 5) {
      return "Molnig himmel";
    } else if (wsymb2 === 6) {
      return "Mulet";
    } else if (wsymb2 === 7) {
      return "Dimma";
    } else if (wsymb2 === 8) {
      return "Lätta regnskurar";
    } else if (wsymb2 === 9) {
      return "Måttliga regnskurar";
    } else if (wsymb2 === 10) {
      return "Kraftiga regnskurar";
    } else if (wsymb2 === 11) {
      return "Åskväder";
    } else if (wsymb2 === 12) {
      return "Lätta skurar av snöblandat regn";
    } else if (wsymb2 === 13) {
      return "Måttligt skurar av snöblandat regn";
    } else if (wsymb2 === 14) {
      return "Kraftiga skurar av snöblandat regn";
    } else if (wsymb2 === 15) {
      return "Lätta snöbyar";
    } else if (wsymb2 === 16) {
      return "Måttliga snöbyar";
    } else if (wsymb2 === 17) {
      return "Kraftiga snöbyar";
    } else if (wsymb2 === 18) {
      return "Duggregn";
    } else if (wsymb2 === 19) {
      return "Måttligt regn";
    } else if (wsymb2 === 20) {
      return "Kraftigt regn";
    } else if (wsymb2 === 21) {
      return "Åska";
    } else if (wsymb2 === 22) {
      return "Lätt snöblandat regn";
    } else if (wsymb2 === 23) {
      return "Måttligt snöblandat regn";
    } else if (wsymb2 === 24) {
      return "Kraftigt snöblandat regn";
    } else if (wsymb2 === 25) {
      return "Lätt snöfall";
    } else if (wsymb2 === 26) {
      return "Måttligt snöfall";
    } else if (wsymb2 === 27) {
      return "Kraftigt snöfall";
    }
  }

  render() {
    return (
      <div className="Weather">
        <Temp text={this.state.temp + ' °C'}/>
        <Wind text={this.state.windDirection + ' ' + this.state.windSpeed + ' m/s'} />
        <Sky text={this.state.sky}/>
      </div>
    );
  }
}

export default Weather;
