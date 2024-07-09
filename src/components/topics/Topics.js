import React from 'react';
import './topics.css'

function TopicsPage() {
  return (
    <>
        <h1>All Topics / Todos Los Temas</h1>
        <div id='all-topics-container'>
          <a href='top-200' className='topic'>200 basic</a>
          <a href="animals" className='topic'>animals</a>
          <a href="colors" className='topic'>colors</a>
          <a href="numbers-to-20" className='topic'>count to 20</a>
          <a href="countries" className='topic'>countries</a>
          <a href="greetings" className='topic'>greetings</a>
          <a href="family" className='topic'>family</a>
          <a href="body-parts" className='topic'>body parts</a>
          <a href="foods" className='topic'>foods</a>
          <a href="weather" className='topic'>weather</a>
          <a href="basic-adjectives" className='topic'>basic adj.</a>
        </div>

        <a href='/'>
          <button className='btn bottom-left'>to home page</button>
        </a>
    </>
  );
}

export default TopicsPage;