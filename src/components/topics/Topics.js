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
        </div>

        <a href='/'>
          <button className='btn bottom-left'>to home page</button>
        </a>
    </>
  );
}

export default TopicsPage;