import React from "react";
import Carp from "./Carp";
import Nuts from "./Nuts";
import Recap from "./Recap";
import Playoffs from "./Playoffs";
import Sportsbook from "./Sportsbook";


function CurrentWeek( ) {
  return (
    <div className="App body-padding content-container">
        <h1>Championship Week</h1>
   
<section id="recap"  className="recap2">
  <Recap weekNumber="Week17" />
</section>
      <section id="projections">
        <Playoffs weekNumber="Week17" />
      </section>
      <section id="nuts">
        <Nuts weekNumber="Week17" />
      </section>
      <section id="carp" className="carp2">
        <Carp weekNumber="Week17" />
        <img src={"../images/carp.jpg"} alt={"craig"} />
      </section>
      <section id="sportsbook">
        <Sportsbook weekNumber="Week17" />
      </section>
    </div>
  );
}

export default CurrentWeek;
