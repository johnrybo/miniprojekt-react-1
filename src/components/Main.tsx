import { Component } from "react";
import "../App.css";

//import components
import Weather from "./Weather";

export let longitude = 0;
export let latitude = 0;

interface State {
  location: boolean;
}
class Main extends Component {
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
        <main>
          <h1>Your Weather:</h1>
          <Weather />
        </main>
      );
    } else {
      return <p>Turn on location services and reload the page!</p>;
    }
  }
}

export default Main;
