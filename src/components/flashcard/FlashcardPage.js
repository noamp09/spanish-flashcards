import React, { useState, useEffect } from 'react';
import Flashcard from './Flashcard';
import addToLocalStorageJSON from '../../utils/addToLocalStorageJSON';
import getRandomWordFromLocalStorage from '../../utils/getWordsFromLocalStorage ';
import star from '../../assets/star.svg'

export default function FlashcardPage({ topic }) {
  const [randomDoc, setRandomDoc] = useState(null);

  const handleNextWord = () => {
    try {
      if (topic === 'localstorage') {
        const randomWord = getRandomWordFromLocalStorage();
        if (!randomWord) {
          throw new Error('No words found in local storage');
        }
        setRandomDoc(randomWord);
      } else {
        if (!topic || topic.length === 0) {
          throw new Error('Invalid topic');
        }
        const randomIndex = Math.floor(Math.random() * topic.length);
        const randomDoc = topic[randomIndex];
        setRandomDoc(randomDoc);
      }
    } catch (error) {
      console.error('Error loading topic:', error);
    }
  };

  useEffect(() => {
    handleNextWord();
  }, []); // Make sure to pass an empty array as the dependency array

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
        <a href='/topics'>
          <button className='btn'>
            Try Another Topic
          </button>
        </a>
        <button className='btn' onClick={() => addToLocalStorageJSON(randomDoc?.spanish, randomDoc?.english)}>
          Add to Favourites
        </button>
        <a className='top-right' href='favorites'><img alt='favorites' src={star}></img></a>
      </div>
    </div>
  );
}
