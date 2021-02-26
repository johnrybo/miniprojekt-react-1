import React from 'react';
import './App.css';

//import components
import Header from './components/header';
import Weather from './components/Weather';

function App() {
  return (
    <div className="App">
      <Header />
      <Weather />
    </div>
  );
}

export default App;
