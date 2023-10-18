import React, { useEffect, useState } from 'react';
import { collection, doc, getDoc } from 'firebase/firestore';
import { firestore } from '../firebase'; 
const Recap = () => {
  const [recapContent, setRecapContent] = useState('');

  useEffect(() => {
    
    const weekNumber = 'Week7'; 

    const weeksCollection = collection(firestore, 'Weeks'); 
    const week7Doc = doc(weeksCollection, weekNumber); 
    
    getDoc(week7Doc)
      .then((doc) => {
        if (doc.exists()) {
          setRecapContent(doc.data().recap);
        } else {
          setRecapContent('Recap not found');
        }
      })
      .catch((error) => {
        console.error('Error getting Recap content:', error);
        setRecapContent('Error fetching Recap content');
      });
  }, []);

  return (
    <div id="recap">
      <h2> Recap</h2>
      <p>{recapContent}</p>
    </div>
  );
};

export default Recap;
