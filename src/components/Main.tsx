import React from "react";
import "../App.css";

//import components
import Weather from "./Weather";

export let mainBoolean: boolean;

function Main() {

    return (
      <main>
        <h1>Vädret hos dig:</h1>
        <Weather />
      </main>
    );
}

export default Main;
