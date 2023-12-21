import React from "react";
import Carp from "./Carp";
import Nuts from "./Nuts";
import Recap from "./Recap";
import Projections from "./Projections";
import Sportsbook from "./Sportsbook";
import ImageCarousel from "./ImageCarousel";
import Playoffs from "./Playoffs";


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
        <h1>Round 1</h1>
     <div className="video-container">   <iframe
        width="280"
        height="154"
        src="https://www.youtube.com/embed/v993ci5Sm5Q?si=Cmg83DLclfIWJS9s"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        autoPlay
      ></iframe></div>
<section id="recap"  className="recap2">
  <Recap weekNumber="Week15" />
</section>
      <section id="projections">
        <Playoffs weekNumber="Week15" />
      </section>
      <section id="nuts">
        <Nuts weekNumber="Week15" />
      </section>
      <section id="carp" className="carp2">
        <Carp weekNumber="Week15" />
        <img  src="https://i.ibb.co/p454wFg/Untitled-design-removebg-preview.png" alt="brandon" />
      </section>
      <section id="sportsbook">
        <Sportsbook weekNumber="Week15" />
      </section>
    </div>
       <div className="App body-padding content-container">
        <h1>Week 14</h1>
      <section id="recap">
        
        <Recap weekNumber="Week14" />
      </section>
      <section id="projections">
        <Projections weekNumber="Week14" />
      </section>
      <section id="nuts">
        <Nuts weekNumber="Week14" />
      </section>
      <section id="carp">
        <Carp weekNumber="Week14" />
    
      </section>
      <section id="sportsbook">
        <Sportsbook weekNumber="Week14" />
      </section>
    </div>
       <div className="App body-padding content-container">
        <h1>Week 13</h1>
      <section id="recap">
        <Recap weekNumber="Week13" />
      </section>
      <section id="projections">
        <Projections weekNumber="Week13" />
      </section>
      <section id="nuts">
        <Nuts weekNumber="Week13" />
      </section>
      <section id="carp">
        <Carp weekNumber="Week13" />
        <img src={"../images/craig.jpeg"} alt={"craig"} />
      </section>
      <section id="sportsbook">
        <Sportsbook weekNumber="Week13" />
      </section>
    </div>
 <div className="App body-padding content-container">
        <h1>Week 12</h1>
      <section id="recap">
        <Recap weekNumber="Week12" />
      </section>
      <section id="projections">
        <Projections weekNumber="Week12" />
      </section>
      <section id="nuts">
        <Nuts weekNumber="Week12" />
      </section>
      <section id="carp">
        <Carp weekNumber="Week12" />
        
      </section>
      <section id="sportsbook">
        <Sportsbook weekNumber="Week12" />
      </section>
    </div>
<div className="App body-padding content-container">
        <h1>Week 11</h1>
      <section id="recap">
        <Recap weekNumber="Week11" />
      </section>
      <section id="projections">
        <Projections weekNumber="Week11" />
      </section>
      <section id="nuts">
        <Nuts weekNumber="Week11" />
      </section>
      <section id="carp">
        <Carp weekNumber="Week11" />
        <img src={"../images/wilding.jpeg"} alt={"wilding"} />
      </section>
      <section id="sportsbook">
        <Sportsbook weekNumber="Week11" />
      </section>
    </div>
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
