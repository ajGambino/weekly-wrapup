import React from "react";
import Carp from "./Carp";
import Nuts from "./Nuts";
import Recap from "./Recap";
import Projections from "./Projections";
import Sportsbook from "./Sportsbook";

function CurrentWeek() {
  return (
    <div className="App body-padding content-container">
        <h1>Week 8</h1>
      <section id="recap">
        <Recap weekNumber="Week8" />
      </section>
      <section id="projections">
        <Projections weekNumber="Week8" />
      </section>
      <section id="nuts">
        <Nuts weekNumber="Week8" />
      </section>
      <section id="carp">
        <Carp weekNumber="Week8" />
      </section>
      <section id="sportsbook">
        <Sportsbook weekNumber="Week8" />
      </section>
    </div>
  );
}

export default CurrentWeek;
