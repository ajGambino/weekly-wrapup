import React from 'react';
import {  doc, setDoc } from 'firebase/firestore';
import { firestore } from '../firebase';

const Nuts = () => {
  
  const topPlayers = {
    QB: [
      { name: 'D. Prescott', fpts: 24.88, owner: 'Brandon' },
      { name: 'T. Tagovailoa', fpts: 22.48, owner: 'Greg' },
      { name: 'J. Goff', fpts: 22.42, owner: 'Craig' },
    ],
    RB: [
      { name: 'R. Mostert', fpts: 34.2, owner: 'Brandon' },
      { name: 'T. Etienne', fpts: 23.3, owner: 'Greg' },
      { name: 'K. Williams', fpts: 21.8, owner: 'Brian' },
    ],
    WR: [
      { name: 'A. St-Brown', fpts: 30.4, owner: 'Det' },
      { name: 'A. Thielan', fpts: 28.5, owner: 'Wilding' },
      { name: 'T. Hill', fpts: 28.3, owner: 'Deez' },
    ],
    TE: [
      { name: 'T. Kelce', fpts: 21.4, owner: 'AJ' },
      { name: 'D. Schultz', fpts: 16.1, owner: 'Greg' },
      { name: 'K. Pitts', fpts: 14.3, owner: 'Greg' },
    ],
    DST: [
      { name: 'Vikings', fpts: 22, owner: 'FA' },
      { name: 'Chiefs', fpts: 16, owner: 'AJ' },
      { name: 'Ravens', fpts: 13, owner: 'Fajt' },
    ],
  };

 

  const weekNumber = 'Week7'; 

  const saveTopPlayersData = async (week, data) => {
   
    const weekDoc = doc(firestore, 'Weeks', week);

 
    setDoc(weekDoc, { topPlayers: data }, { merge: true })
      .then(() => {
        console.log(`Top plays data added to ${week}`);
      })
      .catch((error) => {
        console.error(`Error adding top plays data to ${week}:`, error);
      });
  };

 /* const handleSaveData = () => {

    saveTopPlayersData(weekNumber, topPlayers);
  };
*/
  return (
    <div className="fantasy-football-table" id="nuts">
      <h2>Top Plays</h2>
     {/*  <button onClick={handleSaveData}>Save Data to Firestore</button>*/}
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
