import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Navbar } from 'react-bootstrap';
import FlashcardPage from './components/flashcard/FlashcardPage';
import HomePage from './components/homepage/Homepage';
import top_200 from './top_200.json';
import animals from './animals.json'
import colors from './colors.json'

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/top-200' element={<FlashcardPage topic={top_200} />} />
        <Route path='/animals' element={<FlashcardPage topic={animals} />} />
        <Route path='/colors' element={<FlashcardPage topic={colors} />} />
        <Route path='*' element={<div>Page Not Found</div>} />
      </Routes>
    </Router>
  );
}

export default App;
