import React from "react";
import Navbar from "./Navbar"; 
import Carp from "./components/Carp";
import Nuts from "./components/Nuts";
import Recap from "./components/Recap";
import Sweat from "./components/Sweat";
import Projections from "./components/Projections";
import './styles.css';

function App() {
  return ( <>
    <div className="App body-padding">
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
      <section id="projections">
        <Projections />
      </section>
    </div>
    <Navbar /> </>
  );
}

export default App;
