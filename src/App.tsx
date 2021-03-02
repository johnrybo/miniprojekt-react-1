import React from "react";
import "./App.css";

// import components
import Header from "./components/header";
import Main from "./components/Main";
import Footer from "./components/Footer";

function setBackgroundColor() {
  var d = new Date();
  var n = d.getHours();

  if (n > 7 && n < 20) {
    return "#3066BE";
  } else {
    return "#2E294E";
  }
}

export default function App() {
  return (
      <div className="App" style={{ backgroundColor: setBackgroundColor() }}>
        <Header />
        <Main />
        <Footer />
      </div>
  );
}
