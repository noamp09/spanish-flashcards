import React, { useState } from 'react';

export default function Flashcard({ english, spanish }) {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleCardClick = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div className={`flip-card ${isFlipped ? 'is-flipped' : ''}`} onClick={handleCardClick}>
      <div className="flip-card-inner">
        <div className="flip-card-front">
          {spanish}
        </div>
        <div className="flip-card-back">
          {english}
        </div>
      </div>
    </div>
  );
}
