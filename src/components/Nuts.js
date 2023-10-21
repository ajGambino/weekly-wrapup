import React, { useEffect, useState } from 'react';
import { doc, getDoc } from 'firebase/firestore';
import { firestore } from '../firebase';

const Nuts = ({ weekNumber }) => {
  const [topPlayers, setTopPlayers] = useState({
    QB: [],
    RB: [],
    WR: [],
    TE: [],
    DST: [],
  });

  // Function to fetch topPlayers data
  const fetchTopPlayersData = async (week) => {
    const weekDoc = doc(firestore, 'Weeks', week);
    try {
      const weekSnapshot = await getDoc(weekDoc);
      if (weekSnapshot.exists()) {
        const weekData = weekSnapshot.data();
        if (weekData.topPlayers) {
          setTopPlayers(weekData.topPlayers);
        }
      }
    } catch (error) {
      console.error(`Error fetching topPlayers data for ${week}:`, error);
    }
  };

  useEffect(() => {
    fetchTopPlayersData(weekNumber);
  }, [weekNumber]);

  return (
    <div className="fantasy-football-table" id="nuts">
      <h2>Top Plays</h2>
      <div className="positions-container">
        {Object.keys(topPlayers).map((position) => (
          <div key={position} className="position">
            <h3>{position}</h3>
            <table className="position-table">
              <thead>
                <tr>
                  <th> </th>
                  <th>fpts</th>
                  <th>Owner</th>
                </tr>
              </thead>
              <tbody>
                {topPlayers[position].map((player, index) => (
                  <tr key={index}>
                    <td>{index + 1}. {player.name}</td>
                    <td>{player.fpts}</td>
                    <td>{player.owner}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Nuts;
