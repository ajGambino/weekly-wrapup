import React from 'react';
import { collection, doc, setDoc } from 'firebase/firestore';
import { firestore } from '../firebase';


const projectionData = [
  { name: 'Det', projRecord: '10-4', playoffOdds: '98%', rankChange: '--', champion: '22%' },
  { name: 'Fajt', projRecord: '9-5', playoffOdds: '95%', rankChange: "--", champion:'15%'  },
  { name: 'Deez', projRecord: '8-6', playoffOdds: '88%', rankChange: "--", champion: '14%' },
  { name: 'AJ', projRecord: '7-7', playoffOdds: '82%', rankChange: "+3", champion: '24%' },
  { name: 'Cleve', projRecord: '7-7', playoffOdds: '82%', rankChange: "-1", champion: '13%'  },
  { name: 'Craig', projRecord: '7-7', playoffOdds: '57%', rankChange: "-1", champion: '5%' },
  { name: 'B', projRecord: '6-8', playoffOdds: '37%', rankChange: "+1", champion: '3%' },
  { name: 'G $', projRecord: '6-8', playoffOdds: '32%', rankChange: "+1", champion: '3%' },
  { name: 'Wildman', projRecord: '6-8', playoffOdds: '29%', rankChange: "-3", champion: '1%' },
  { name: 'Na$$ty', projRecord: '3-11', playoffOdds: '3%', rankChange: "--", champion: '<1%' },
];

const weekNumber = 'Week7'; 

const saveProjectionData = async (data, week) => {
  
  const weekCollection = collection(firestore, 'Weeks');

 
  const weekDoc = doc(weekCollection, week);

  // Set the data for the document with merge: true to keep existing fields
  setDoc(weekDoc, { projectionData: data }, { merge: true })
    .then(() => {
      console.log(`Projection data added to ${week}`);
    }) 
    .catch((error) => {
      console.error(`Error adding projection data to ${week}:`, error);
    });
};

const Projections = () => {
  const handleSaveData = () => {
    
    saveProjectionData(projectionData, weekNumber);
  };

  return (
    <div className="projection-table" id="projections">
      <h2>Projections</h2>
      <button onClick={handleSaveData}>Save Data to Firestore for {weekNumber}</button> 
      <div className="projections-container">
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Proj. Record</th>
              <th>Playoff Odds</th>
              <th>Rank Change</th>
              <th>Champion</th>
            </tr>
          </thead>
          <tbody>
            {projectionData.map((player, index) => (
              <tr key={index}>
                <td>{player.name}</td>
                <td>{player.projRecord}</td>
                <td>{player.playoffOdds}</td>
                <td>{player.rankChange}</td>
                <td>{player.champion}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Projections;
