import React from 'react'
import "./Featured.scss"
const Featured = () => {
  return (
    <div className='featured'>
      <div className='container'>
        <div className='left'>
          <h1>
            Rent.Relax.Repeat
          </h1>
          <div className='search'>
            <div className='searchInput'>
              <img src='./img/search.png' alt='search icon' />
              <input type='text' placeholder='Search for your dream home' />
            </div>
            <button>Search</button>
          </div>

          <div className='popular'>
            <span>Popular:</span>
            <button>Web Design</button>
            <button>Web Design</button>
            <button>Web Design</button>
            <button>Web Design</button>
          </div>

        </div>
        <div className='right'>
          <img src='./img/man.png' alt=''/>
        </div>
      </div>
    </div>
  )
}

export default Featured
