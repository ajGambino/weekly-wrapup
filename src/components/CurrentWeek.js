import React from "react";
import Carp from "./Carp";
import Nuts from "./Nuts";
import Recap from "./Recap";
import Projections from "./Projections";
import Sportsbook from "./Sportsbook";


function CurrentWeek() {



  return (
    <div className="App body-padding content-container">
        <h1>Week 10</h1>
      <section id="recap">
        <Recap weekNumber="Week10" />
      </section>
      <section id="projections">
        <Projections weekNumber="Week10" />
      </section>
      <section id="nuts">
        <Nuts weekNumber="Week10" />
      </section>
      <section id="carp">
        <Carp weekNumber="Week10" />
        <img src={"../images/bosko.jpg"} alt={"cleve"} />
      </section>
      <section id="sportsbook">
        <Sportsbook weekNumber="Week10" />
      </section>
    </div>
  );
}

export default CurrentWeek;
