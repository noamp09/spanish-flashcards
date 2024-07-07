import React, { useState, useEffect } from 'react';
import Flashcard from './Flashcard';


export default function FlashcardPage({ topic }) {
  const [randomDoc, setRandomDoc] = useState(null);

  const handleNextWord = () => {
    try {
      if (!topic) {
        throw new Error('Invalid topic');
      }

      const randomIndex = Math.floor(Math.random() * topic.length);
      const randomDoc = topic[randomIndex];
      setRandomDoc(randomDoc);
    } catch (error) {
      console.error('Error loading topic:', error);
    }
  };

  useEffect(() => {
    handleNextWord();
  });

  return (
    <div className="vertical-container">
      {randomDoc ? (
        <Flashcard english={randomDoc.english} spanish={randomDoc.spanish} />
      ) : (
        <div>Loading...</div>
      )}

      <div className='horizontal-container'>
        <button onClick={handleNextWord} className='btn'>
          Next Word
        </button>
        <a href='/#topics'>
          <button className='btn'>
            try another topic
          </button>
        </a>
      </div>


    </div>
  );
}
