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
            <div className="favorite-box">
              {matchup.favorite} -{matchup.spread}
            </div>
            <div className="dog-box">
              {matchup.dog} +{matchup.spread}
            </div>
            <div className="total-box">
              O/U: {matchup.total}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sportsbook;
