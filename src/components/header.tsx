import React, { CSSProperties } from "react";
import "../App.css";
import Lottie from "lottie-react";
import myAnimation from "./lotties/wind-animation.json";

export default function Header() {
  return (
    <header>
      <Lottie style={myImage} animationData={myAnimation} />
    </header>
  );
}

const myImage: CSSProperties = {
  width: "10.5rem",
};
