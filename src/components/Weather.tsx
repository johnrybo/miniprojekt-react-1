import React from "react";
import "../App.css";

// import Temp from "./Temp";
// import Wind from "./Wind";
// import Sky from "./Sky";

function Weather() {
  // Såhär ska man nog inte göra :)
  getUserLocation();

  return (
    <div className="Weather">
      <span id="temp"></span>
      <span id="wind"></span>
      <span id="sky"></span>
    </div>
    // <div>
    //   <Temp />
    //   <Wind />
    //   <Sky />
    // </div>
  );
}

function getUserLocation() {
  function success(pos: any) {
    var crd = pos.coords;

    // SMHI:s API funkar endast med fem decimaler
    let longitude = crd.longitude.toFixed(5);
    let latitude = crd.latitude.toFixed(5);

    getWeather(longitude, latitude);
  }

  function error(err: any) {
    console.warn(`ERROR(${err.code}): ${err.message}`);
  }

  navigator.geolocation.getCurrentPosition(success, error);
}

async function getWeather(long: number, lat: number) {
  let url = `https://opendata-download-metfcst.smhi.se/api/category/pmp3g/version/2/geotype/point/lon/${long}/lat/${lat}/data.json`;
  const response = await fetch(url);
  const data = await response.json();

  let temp = data.timeSeries[0].parameters[1].values[0];
  let wd = data.timeSeries[0].parameters[3].values[0];
  let ws = data.timeSeries[0].parameters[4].values[0];
  let wsymb2 = data.timeSeries[0].parameters[18].values[0];

  // Såhär ska man inte göra :)
  let tempDiv = document.getElementById("temp");
  getTemp(tempDiv, temp);

  let windDiv = document.getElementById("wind");
  getWind(wd, ws, windDiv);

  let skyDiv = document.getElementById("sky");
  getWsymb2(wsymb2, skyDiv);
}

// Hämtar temperatur
function getTemp(tempDiv: any, temp: number) {
  tempDiv.innerHTML = temp + " °C";
}

// Hämtar vindriktning
function getWind(wd: number, ws: number, windDiv: any) {
  let west = "&#8592";
  let north = "&#8593";
  let east = "&#8594";
  let south = "&#8594";
  let northwest = "&#8598";
  let northeast = "&#8599";
  let southeast = "&#8600";
  let southwest = "&#8601";

  if (wd > 337.5 || wd < 22.5) {
    windDiv.innerHTML = west + " " + ws + " m/s";
  } else if (wd > 22.5 && wd < 67.5) {
    windDiv.innerHTML = northwest + " " + ws + " m/s";
  } else if (wd > 67.5 && wd < 112.5) {
    windDiv.innerHTML = north + " " + ws + " m/s";
  } else if (wd > 112.5 && wd < 157.5) {
    windDiv.innerHTML = northeast + " " + ws + " m/s";
  } else if (wd > 157.5 && wd < 202.5) {
    windDiv.innerHTML = east + " " + ws + " m/s";
  } else if (wd > 202.5 && wd < 247.5) {
    windDiv.innerHTML = southeast + " " + ws + " m/s";
  } else if (wd > 247.5 && wd < 292.5) {
    windDiv.innerHTML = south + " " + ws + " m/s";
  } else if (wd > 292.5 && wd < 337.5) {
    windDiv.innerHTML = southwest + " " + ws + " m/s";
  }
}

// Hämtar typ av väder / himmel
function getWsymb2(wsymb2: number, skyDiv: any) {
  if (wsymb2 === 1) {
    skyDiv.innerText = "Klar himmel";
  } else if (wsymb2 === 2) {
    skyDiv.innerText = "Nästan klar himmel";
  } else if (wsymb2 === 3) {
    skyDiv.innerText = "Varierande molnighet";
  } else if (wsymb2 === 4) {
    skyDiv.innerText = "Halvklar himmel";
  } else if (wsymb2 === 5) {
    skyDiv.innerText = "Molnig himmel";
  } else if (wsymb2 === 6) {
    skyDiv.innerHTML = "Mulet";
  } else if (wsymb2 === 7) {
    skyDiv.innerText = "Dimma";
  } else if (wsymb2 === 8) {
    skyDiv.innerText = "Lätta regnskurar";
  } else if (wsymb2 === 9) {
    skyDiv.innerText = "Måttliga regnskurar";
  } else if (wsymb2 === 10) {
    skyDiv.innerText = "Kraftiga regnskurar";
  } else if (wsymb2 === 11) {
    skyDiv.innerText = "Åskväder";
  } else if (wsymb2 === 12) {
    skyDiv.innerText = "Lätta skurar av snöblandat regn";
  } else if (wsymb2 === 13) {
    skyDiv.innerText = "Måttligt skurar av snöblandat regn";
  } else if (wsymb2 === 14) {
    skyDiv.innerText = "Kraftiga skurar av snöblandat regn";
  } else if (wsymb2 === 15) {
    skyDiv.innerText = "Lätta snöbyar";
  } else if (wsymb2 === 16) {
    skyDiv.innerText = "Måttliga snöbyar";
  } else if (wsymb2 === 17) {
    skyDiv.innerText = "Kraftiga snöbyar";
  } else if (wsymb2 === 18) {
    skyDiv.innerText = "Duggregn";
  } else if (wsymb2 === 19) {
    skyDiv.innerText = "Måttligt regn";
  } else if (wsymb2 === 20) {
    skyDiv.innerText = "Kraftigt regn";
  } else if (wsymb2 === 21) {
    skyDiv.innerText = "Åska";
  } else if (wsymb2 === 22) {
    skyDiv.innerText = "Lätt snöblandat regn";
  } else if (wsymb2 === 23) {
    skyDiv.innerText = "Måttligt snöblandat regn";
  } else if (wsymb2 === 24) {
    skyDiv.innerText = "Kraftigt snöblandat regn";
  } else if (wsymb2 === 25) {
    skyDiv.innerText = "Lätt snöfall";
  } else if (wsymb2 === 26) {
    skyDiv.innerText = "Måttligt snöfall";
  } else if (wsymb2 === 27) {
    skyDiv.innerText = "Kraftigt snöfall";
  }
}

export default Weather;
