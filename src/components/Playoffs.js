import React, { useEffect, useState } from 'react';
import {  doc, getDoc } from 'firebase/firestore';
import { firestore } from '../firebase';

const Playoffs = ({ weekNumber }) => {
  const [projectionData, setProjectionData] = useState([]);
  useEffect(() => {
   
    const weekDocRef = doc(firestore, 'Weeks', weekNumber);

    const fetchData = async () => {
      try {
        const docSnapshot = await getDoc(weekDocRef);
        if (docSnapshot.exists()) {
          const data = docSnapshot.data().projectionData;
          setProjectionData(data);
        } else {
          console.log('No data found for the specified week.');
        }
      } catch (error) {
        console.error('Error fetching projection data:', error);
      }
    };

    fetchData();
  }, [weekNumber]);

  return (
    <div className="projection-table" id="projections">
      <h2>Projections</h2>
      <div className="projections-container">
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Champion Odds</th>
              <th>Futures <span>NEW</span></th>
            </tr>
          </thead>
          <tbody>
            {projectionData.map((player, index) => (
              <tr key={index}>
                <td>{player.name}</td>
                <td>{player.champion}</td>
                <td>{player.line}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Playoffs;
