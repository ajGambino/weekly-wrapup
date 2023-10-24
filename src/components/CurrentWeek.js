import React from "react";
import Carp from "./Carp";
import Nuts from "./Nuts";
import Recap from "./Recap";
import Projections from "./Projections";
import Sportsbook from "./Sportsbook";
import ImageCarousel from "./ImageCarousel";

function CurrentWeek() {

  const carpImages = [
    'images/five.jpg',
    'images/one.jpg',
    'images/two.jpg',
    'images/three.jpg',
    'images/four.jpg',


  ]

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
        <ImageCarousel images={carpImages} />
      </section>
      <section id="sportsbook">
        <Sportsbook weekNumber="Week8" />
      </section>
    </div>
  );
}

export default CurrentWeek;
