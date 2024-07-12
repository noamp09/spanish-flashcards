import React, { useState, useEffect } from 'react';
import Flashcard from './Flashcard';
import addToLocalStorageJSON from '../../utils/addToLocalStorageJSON';
import getRandomWordFromLocalStorage from '../../utils/getWordsFromLocalStorage ';
import star from '../../assets/star.svg'

export default function FlashcardPage({ topic }) {
  const [randomDoc, setRandomDoc] = useState(null);

  const handleNextWord = () => {
    try {
      let newWord;

      if (topic === 'localstorage') {
        const randomWord = getRandomWordFromLocalStorage();
        if (!randomWord) {
          throw new Error('No words found in local storage');
        }
        newWord = randomWord;
      } else {
        if (!topic || topic.length === 0) {
          throw new Error('Invalid topic');
        }
        const randomIndex = Math.floor(Math.random() * topic.length);
        const randomDoc = topic[randomIndex];
        newWord = randomDoc;
      }

      // Check if the new word is already on the screen
      if (!randomDoc || newWord.english !== randomDoc.english) {
        setRandomDoc(newWord);
      } else {
        handleNextWord(); // Retry to get a different word
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
      
      <a id="fav-link" href='favorites'><img alt='favorites' src={star}></img></a>
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
      </div>
    </div>
  );
}