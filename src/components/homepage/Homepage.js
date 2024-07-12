import './HomePage.css'
import logo from '../../assets/logo.svg';
import flag from '../../assets/flag.jpg'


function HomePage() {
  return (
    <>
  <div id="top">
          <nav id="header">
              <a id='logo' href='/'><img src={logo} alt='logo'/>{' '}Tucabulario</a>
              <a href='#topics'><button className='btn'>Go Practicing</button></a>
          </nav>

          <div id='hero'>
            <img id='flag' src={flag} alt='Spanish Flag' />
            <div id='entertaining'>An entertaining and interactive way to expand your vocabulary!</div>
          </div>
      </div>

      <div id="topics">
          <h1>Topics / Temas</h1>
          <div id='horizontal-container'>
            <a href="animals" className='topic'>animals</a>
            <a href="colors" className='topic'>colors</a>
            <a href="countries" className='topic'>countries</a>
          </div>
          <a href='/topics'>
            <button className='btn'>see all topics</button>
          </a>
      </div>

          <div id='quote'>
            <h1>stay consistent and see the results</h1>
            <div id='sentence'>La excelencia no es un acto, es un hábito.</div>
          </div>

      </>
  );
}

export default HomePage;