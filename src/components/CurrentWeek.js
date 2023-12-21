import React from "react";
import Carp from "./Carp";
import Nuts from "./Nuts";
import Recap from "./Recap";
import Playoffs from "./Playoffs";
import Sportsbook from "./Sportsbook";


function CurrentWeek( ) {
  return (
    <div className="App body-padding content-container">
        <h1>Round 2</h1>
   
<section id="recap"  className="recap2">
  <Recap weekNumber="Week16" />
</section>
      <section id="projections">
        <Playoffs weekNumber="Week16" />
      </section>
      <section id="nuts">
        <Nuts weekNumber="Week16" />
      </section>
      <section id="carp" className="carp2">
        <Carp weekNumber="Week16" />
      
      </section>
      <section id="sportsbook">
        <Sportsbook weekNumber="Week16" />
      </section>
    </div>
  );
}

export default CurrentWeek;
