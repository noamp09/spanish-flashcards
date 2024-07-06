import './HomePage.css'
import logo from '../../assets/logo.svg';
import flag from '../../assets/flag.svg'


function HomePage() {
  return (
    <>
  <div id="top">
          <nav id="header">
              <a id='logo' href='/'><img src={logo} alt='logo'/>{' '}Tucabulario</a>
              <a href='/flashcard'><button className='btn'>Go Practicing</button></a>
          </nav>

          {/* <div class="hero">
                  <h2 class="main-text">Welcome to our Spanish Learning Website!</h2>
                  <div class="secondary-text"> Start your journey to expand your Spanish vocabulary with us. Whether you are a beginner 
                    or looking to improve your skills, we have resources for you.</div>
          </div> */}
          <div id='hero'>
            <img id='flag' src={flag} alt='Spanish Flag' />
            <div id='entertaining'>An entertaining and interactive way to expand your vocabulary!</div>
          </div>
      </div>

      <div id="topics">
          <h1>Topics / Temas</h1>
          <div id='horizontal-container'>
            <a href='top-200' className='topic'>top 200</a>
            <a href="animals" className='topic'>animals</a>
            <a href="colors" className='topic'>colors</a>
          </div>
      </div>

          <div id='quote'>
            <h1>stay consistent and see the results</h1>
            <div id='sentence'>La excelencia no es un acto, es un hábito.</div>
          </div>

      </>
  );
}

export default HomePage;
