import React, { useState, useEffect } from 'react';
import Flashcard from './Flashcard';

export default function FlashcardPage() {
  const [randomDoc, setRandomDoc] = useState(null);

  const handleNextWord = () => {
    import('../../top_200.json')
      .then(module => {
        const top_200 = module.default;
        const randomIndex = Math.floor(Math.random() * top_200.length);
        setRandomDoc(top_200[randomIndex]);
      })
      .catch(error => console.error('Error loading JSON:', error));
  };

  useEffect(() => {
    handleNextWord(); // Initial load of a random word
  }, []);

  return (
    <div className="app-container">
      {randomDoc ? (
        <Flashcard
          english={randomDoc.english}
          spanish={randomDoc.spanish}
        />
      ) : (
        <div>Loading...</div>
      )}
      <button onClick={handleNextWord} className='btn'>
        Next Word
      </button>
    </div>
  );
}