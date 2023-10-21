import React, { useEffect, useState } from 'react';
import { collection, doc, getDoc } from 'firebase/firestore';
import { firestore } from '../firebase';

const Recap = ({ weekNumber }) => {
  const [recapContent, setRecapContent] = useState('');

  useEffect(() => {
    const fetchRecapData = async () => {
      const weeksCollection = collection(firestore, 'Weeks');
      const weekDoc = doc(weeksCollection, weekNumber); // Use the prop value

      try {
        const docSnapshot = await getDoc(weekDoc);
        if (docSnapshot.exists()) {
          setRecapContent(docSnapshot.data().recap);
        } else {
          setRecapContent('Recap not found');
        }
      } catch (error) {
        console.error('Error getting Recap content:', error);
        setRecapContent('Error fetching Recap content');
      }
    };

    fetchRecapData();
  }, [weekNumber]); // Listen for changes in the weekNumber prop

  return (
    <div id="recap">
     
      <p>{recapContent}</p>
    </div>
  );
};

export default Recap;
