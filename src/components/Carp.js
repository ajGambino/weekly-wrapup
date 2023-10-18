import React, { useEffect, useState } from 'react';
import { collection, doc, getDoc } from 'firebase/firestore';
import { firestore } from '../firebase'; 
const Carp = () => {
  const [crownContent, setCrownContent] = useState('');

  useEffect(() => {
    
    const weekNumber = 'Week7'; 

    const weeksCollection = collection(firestore, 'Weeks'); 
    const week7Doc = doc(weeksCollection, weekNumber); 
    
    getDoc(week7Doc)
      .then((doc) => {
        if (doc.exists()) {
          setCrownContent(doc.data().crown);
        } else {
          setCrownContent('Carps Crown not found');
        }
      })
      .catch((error) => {
        console.error('Error getting Crown content:', error);
        setCrownContent('Error fetching Crown content');
      });
  }, []);

  return (
    <div id="carp">
      <h1>Carp's Crown</h1>
      <p>{crownContent}</p>
    </div>
  );
};

export default Carp;
