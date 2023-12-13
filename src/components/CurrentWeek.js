import React from "react";
import Carp from "./Carp";
import Nuts from "./Nuts";
import Recap from "./Recap";
import Playoffs from "./Playoffs";
import Sportsbook from "./Sportsbook";


function CurrentWeek( ) {



  return (
    <div className="App body-padding content-container">
        <h1>Round 1</h1>
        <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/v993ci5Sm5Q?si=Cmg83DLclfIWJS9s"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        autoPlay
      ></iframe>
<section id="recap"  className="recap2">
  <Recap weekNumber="Week15" />
</section>
      <section id="projections">
        <Playoffs weekNumber="Week15" />
      </section>
      <section id="nuts">
        <Nuts weekNumber="Week15" />
      </section>
      <section id="carp">
        <Carp weekNumber="Week15" />
      </section>
      <section id="sportsbook">
        <Sportsbook weekNumber="Week15" />
      </section>
    </div>
  );
}

export default CurrentWeek;
