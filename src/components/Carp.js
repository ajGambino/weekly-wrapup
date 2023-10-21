import React, { useEffect, useState } from 'react';
import { collection, doc, getDoc } from 'firebase/firestore';
import { firestore } from '../firebase';

const Carp = ({ weekNumber }) => {
  const [crownContent, setCrownContent] = useState('');

  useEffect(() => {
    const weeksCollection = collection(firestore, 'Weeks');
    const weekDoc = doc(weeksCollection, weekNumber);

    getDoc(weekDoc)
      .then((doc) => {
        if (doc.exists()) {
          setCrownContent(doc.data().crown);
        } else {
          setCrownContent("Carp's Crown not found");
        }
      })
      .catch((error) => {
        console.error('Error getting Crown content:', error);
        setCrownContent('Error fetching Crown content');
      });
  }, [weekNumber]);

  return (
    <div id="">
      <h2>Carp's Crown</h2>
      <p>{crownContent}</p>
    </div>
  );
};

export default Carp;
