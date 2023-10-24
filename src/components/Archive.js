import React from "react";
import Carp from "./Carp";
import Nuts from "./Nuts";
import Recap from "./Recap";
import Projections from "./Projections";
import Sportsbook from "./Sportsbook";



function Archive() {
  return (
    <div>
       <div className="App body-padding content-container">
        <h1>Week 7</h1>
      <section id="recap">
        <Recap weekNumber="Week7" />
      </section>
      <section id="projections">
        <Projections weekNumber="Week7" />
      </section>
      <section id="nuts">
        <Nuts weekNumber="Week7" />
      </section>
      <section id="carp">
        <Carp weekNumber="Week7" />
      </section>
      <section id="sportsbook">
        <Sportsbook weekNumber="Week7" />
      </section>
    </div>
      <h1>Week 6</h1>
      <div className="App body-padding content-container">
        <section id="recap">
          <Recap weekNumber="Week6" />
        </section>
        <section >
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
      <div className="App body-padding content-container ">
        <section id="recap">
          <Recap weekNumber="Week5" />
        </section>
        <section id="">
          <Projections weekNumber="Week5" />
        </section>
        <section id="nuts">
          <Nuts weekNumber="Week5" />
        </section>
        <section  id="carp">
          <Carp  weekNumber="Week5" />
        </section>
      </div>
    </div>
  );
}

export default Archive;
