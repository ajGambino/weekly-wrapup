import React from "react";
import Navbar from "./Navbar"; 
import Carp from "./components/Carp";
import Nuts from "./components/Nuts";
import Recap from "./components/Recap";
import Sweat from "./components/Sweat";
import Footer from "./Footer";

import Projections from "./components/Projections";
import './styles.css';

function App() {
  return ( <>
  <Navbar />
    <div className="App body-padding content-container">
     {/* <h1>Wednesday's Weekly Wrap-up</h1> */}
      <section id="recap">
        <Recap /> 
      </section>
      <section id="projections">
        <Projections />
      </section>
      <section id="nuts">
        <Nuts />
      </section>
      <section id="carp">
        <Carp />
      </section>
    </div>
       <section id="sweat">
     {/*   <Sweat /> */}
      </section> 
      <Footer />
     </>
  );
}

export default App;
