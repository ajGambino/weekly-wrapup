import React from "react";
import Navbar from "./Navbar"; 
import Carp from "./components/Carp";
import Nuts from "./components/Nuts";
import Recap from "./components/Recap";
import Sweat from "./components/Sweat";
import Projections from "./components/Projections";

function App() {
  return (
    <div className="App">
      <Navbar /> 
      <h1>Wednesdays Weekly Wrap Up</h1>
      <section id="recap">
        <Recap />
      </section>
      <section id="sweat">
        <Sweat />
      </section>
      <section id="nuts">
        <Nuts />
      </section>
      <section id="carp">
        <Carp />
      </section>
      <section id="carp">
        <Projections />
      </section>
    </div>
  );
}

export default App;
