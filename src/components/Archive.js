import React from "react";
import Carp from "./Carp";
import Nuts from "./Nuts";
import Recap from "./Recap";
import Projections from "./Projections";
import Sportsbook from "./Sportsbook";
import ImageCarousel from "./ImageCarousel";



function Archive() {

  const carpImages = [
    'images/five.jpg',
    'images/one.jpg',
    'images/two.jpg',
    'images/three.jpg',
    'images/four.jpg',


  ]

  return (
    <div>
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
       <div className="App body-padding content-container">
        <h1>Week 9</h1>
      <section id="recap">
        <Recap weekNumber="Week9" />
      </section>
      <section id="projections">
        <Projections weekNumber="Week9" />
      </section>
      <section id="nuts">
        <Nuts weekNumber="Week9" />
      </section>
      <section id="carp">
        <Carp weekNumber="Week9" />
        <img src={"../images/image0 (1).jpeg"} alt={"craig"} />
      </section>
      <section id="sportsbook">
        <Sportsbook weekNumber="Week9" />
      </section>
    </div>
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
