import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import FlashcardPage from './components/flashcard/FlashcardPage';
import HomePage from './components/homepage/Homepage';
import top_200 from './top_200.json';
import animals from './animals.json'
import colors from './colors.json'
import numbers_to_20 from './numbers_to_20.json'
import countries from './countries.json'
import TopicsPage from './components/topics/Topics';
import greetings from './greetings.json'
import family from './family.json'
import body_parts from './body_parts.json'
import foods from './foods.json'
import weather from './weather.json'
import basic_adjectives from './basic_adjectives.json'

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
        <Route path='/topics' element={<TopicsPage />} />
        <Route path='*' element={<div>Page Not Found</div>} />
      </Routes>
    </Router>
  );
}

export default App;
