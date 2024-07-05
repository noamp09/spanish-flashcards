import './HomePage.css'

function HomePage() {
  return (
    <div className='vertical-container'>
      <h1>Welcome to our Spanish Learning Website!</h1>
      <p>
        Start your journey to expand your Spanish vocabulary with us. Whether you are a beginner
        or looking to improve your skills, we have resources for you.
      </p>
      <p>Ready to get started? {' '}
        <a href='/flashcard'>Go To Flashcards</a>
      </p>
    </div>
  );
}

export default HomePage;