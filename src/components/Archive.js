import React from "react";
import Carp from "./Carp";
import Nuts from "./Nuts";
import Recap from "./Recap";
import Projections from "./Projections";
function Archive() {
  return (
    <div>
      <h1>Week 6</h1>
      <div className="App body-padding content-container">
        <section id="recap">
          <Recap weekNumber="Week6" />
        </section>
        <section id="projections">
          <Projections weekNumber="Week6" />
        </section>
        <section id="nuts">
          <Nuts weekNumber="Week6" />
        </section>
        <section id="carp">
          <Carp weekNumber="Week6" />
        </section>
      </div>
      <h1>Week 5</h1>
      <div className="App body-padding content-container">
        <section id="recap">
          <Recap weekNumber="Week5" />
        </section>
        <section id="projections">
          <Projections weekNumber="Week5" />
        </section>
        <section id="nuts">
          <Nuts weekNumber="Week5" />
        </section>
        <section id="carp">
          <Carp weekNumber="Week5" />
        </section>
      </div>
    </div>
  );
}

export default Archive;
