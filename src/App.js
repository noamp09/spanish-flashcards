import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import FlashcardPage from './components/flashcard/FlashcardPage';
import TopicsPage from './components/topics/Topics';

import HomePage from './components/homepage/Homepage';
import top_200 from './json/top_200.json';
import animals from './json/animals.json';
import colors from './json/colors.json';
import numbers_to_20 from './json/numbers_to_20.json';
import countries from './json/countries.json';
import greetings from './json/greetings.json';
import family from './json/family.json';
import body_parts from './json/body_parts.json';
import foods from './json/foods.json';
import weather from './json/weather.json';
import basic_adjectives from './json/basic_adjectives.json';
import daily_routines from './json/daily_routines.json';
import music from './json/music.json';
import time from './json/time.json';
import house_stuff from './json/house_stuff.json';
import sports from './json/sports.json';
import clothes from './json/clothes.json';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/top-200' element={<FlashcardPage topic={top_200} />} />
        <Route path='/animals' element={<FlashcardPage topic={animals} />} />
        <Route path='/colors' element={<FlashcardPage topic={colors} />} />
        <Route path='/numbers-to-20' element={<FlashcardPage topic={numbers_to_20} />} />
        <Route path='/countries' element={<FlashcardPage topic={countries} />} />
        <Route path='/greetings' element={<FlashcardPage topic={greetings} />} />
        <Route path='/family' element={<FlashcardPage topic={family} />} />
        <Route path='/body-parts' element={<FlashcardPage topic={body_parts} />} />
        <Route path='/foods' element={<FlashcardPage topic={foods} />} />
        <Route path='/weather' element={<FlashcardPage topic={weather} />} />
        <Route path='/basic-adjectives' element={<FlashcardPage topic={basic_adjectives} />} />
        <Route path='/daily-routines' element={<FlashcardPage topic={daily_routines} />} />
        <Route path='/music' element={<FlashcardPage topic={music} />} />
        <Route path='/time' element={<FlashcardPage topic={time} />} />
        <Route path='/house-stuff' element={<FlashcardPage topic={house_stuff} />} />
        <Route path='/sports' element={<FlashcardPage topic={sports} />} />
        <Route path='/clothes' element={<FlashcardPage topic={clothes} />} />
        <Route path='/favorites' element={<FlashcardPage topic="localstorage" />} />
        <Route path='/topics' element={<TopicsPage />} />
        <Route path='*' element={<div>Page Not Found</div>} />
      </Routes>
    </Router>
  );
}

export default App;
