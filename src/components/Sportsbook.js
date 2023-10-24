import React, { useEffect, useState } from 'react';
import { collection, doc,  getDoc } from 'firebase/firestore'; // Import missing functions
import { firestore } from '../firebase';
import '../styles.css';

const Sportsbook = ({ weekNumber }) => {
  const [matchups, setMatchups] = useState([]);

  useEffect(() => {
    const fetchMatchupsData = async () => {
      const weeksCollection = collection(firestore, 'Weeks');
      const weekDocRef = doc(weeksCollection, weekNumber);

      const weekDoc = await getDoc(weekDocRef); // Use getDoc to fetch a single document
      if (weekDoc.exists()) {
        const weekData = weekDoc.data();
        if (weekData && weekData.matchups) {
          setMatchups(weekData.matchups);
        }
      }
    };

    fetchMatchupsData();
  }, [weekNumber]);

  return (
    <div>
      <h2>Sportsbook</h2>
      <div className="matchups-container">
        {matchups.map((matchup, index) => (
          <div key={index} className="matchup">
            <div className="box1">
              <div className="favorite-box">
                {matchup.favorite}
              </div>
              <div className="spread-box">
                -{matchup.spread}
              </div>
            </div>
            <div className="box2">
              <div className="dog-box">
                {matchup.dog}
              </div>
              <div className="spread-box">
                +{matchup.spread}
              </div>
            </div>
            <div className="box3">
              <div className="total-box">
                Over: {matchup.total}
              </div>
              <div className="total-box">
                Under: {matchup.total}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sportsbook;
