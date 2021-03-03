import { Component, CSSProperties } from "react";
import "../App.css";
import { IconContext } from "react-icons";
interface Props {
  windDirection: any;
  windSpeed: any;
}
export default class Wind extends Component<Props> {
  render() {
    return (
      <div style={windStyle}>
        <IconContext.Provider value={{size: '2rem'}}>
          <div>{this.props.windDirection}</div>
        </IconContext.Provider>
        <h2>{this.props.windSpeed + " m/s"}</h2>
      </div>
    );
  }
}

const windStyle: CSSProperties = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
};
