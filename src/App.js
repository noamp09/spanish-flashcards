import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Navbar } from 'react-bootstrap';
import FlashcardPage from './components/flashcard/FlashcardPage';
import HomePage from './components/homepage/Homepage';  // Assume you have a HomePage component

function App() {
  return (
    <Router>
      <Navbar />
      <div className='content'>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/flashcard' element={<FlashcardPage />} />
          <Route path='*' element={<div>Page Not Found</div>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
