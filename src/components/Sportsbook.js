import React, { useEffect, useState } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { firestore } from '../firebase';
import '../styles.css';

const Sportsbook = () => {
  const [matchups, setMatchups] = useState([]);

  useEffect(() => {
    const fetchMatchupsData = async () => {
      const matchupsCollection = collection(firestore, 'Matchups');
      const matchupsSnapshot = await getDocs(matchupsCollection);

      const matchupsData = [];
      matchupsSnapshot.forEach((doc) => {
        matchupsData.push(doc.data());
      });

      setMatchups(matchupsData);
    };

    fetchMatchupsData();
  }, []);

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
