import React, { Component } from "react";
import "../App.css";

interface State {
  sky: number;
}

export default class Sky extends Component {
  state: State = {
    sky: 0,
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

      this.getSky(longitude, latitude);
    };

    const error = (err: any) => {};

    navigator.geolocation.getCurrentPosition(success, error);
  }

  // Hämtar vädret från SMHI:s API
  async getSky(lon: number, lat: number) {
    let url = `https://opendata-download-metfcst.smhi.se/api/category/pmp3g/version/2/geotype/point/lon/${lon}/lat/${lat}/data.json`;
    const response = await fetch(url);
    const result = await response.json();

    let wsymb2;

    // Om temperaturen är på index 1
    if (result.timeSeries[0].parameters[1].name === "t") {
      wsymb2 = this.getWsymb2(result.timeSeries[0].parameters[18].values[0]);

      // Om temperaturen är på index 10
    } else if (result.timeSeries[0].parameters[10].name === "t") {
      wsymb2 = this.getWsymb2(result.timeSeries[0].parameters[18].values[0]);
    }

    this.setState({
      sky: wsymb2,
    });
  }

  // Hämtar typ av väder / himmel och gör om till text
  getWsymb2(wsymb2: number) {
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
    return <div>{this.state.sky}</div>;
  }
}
