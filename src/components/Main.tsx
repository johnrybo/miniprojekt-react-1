import React from "react";
import "../App.css";

//import components
import Weather from "./Weather";

function Main() {
  return (
    <main>
      <h1>Vädret hos dig:</h1>
      <div>
        <h3>☀️</h3>
      </div>
      <Weather />
    </main>
  );
}

export default Main;
