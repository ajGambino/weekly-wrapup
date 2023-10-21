import React from "react";
import Navbar from "./Navbar"; 
import Carp from "./components/Carp";
import Nuts from "./components/Nuts";
import Recap from "./components/Recap";
/* import Sweat from "./components/Sweat"; */
import Footer from "./Footer";
import Projections from "./components/Projections";
import './styles.css';
import Sportsbook from "./components/Sportsbook";

function App() {
  return ( <>
  <Navbar />
    <div className="App body-padding content-container">
      <section id="recap">
        <Recap weekNumber="Week7" /> 
      </section>
      <section id="projections">
        <Projections weekNumber="Week7"/>
      </section>
      <section id="nuts">
        <Nuts  weekNumber="Week7" />
      </section>
      <section id="carp">
        <Carp weekNumber="Week7"/>
      </section>
    </div>
      <section id="sportsbook" >
        <Sportsbook />
      </section>
      <Footer />
     </>
  );
}

export default App;
