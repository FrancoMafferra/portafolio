import React from 'react';

const Header = () => {
  return (
  <header className='py-8'>
     <div className='container mx-auto'>
       <div className='flex justify-between items-center'>
        <a href='#'>
          <div className='text-2xl font-bold'
            style={{
            background: 'linear-gradient(to right, #C636E0, #FF00CC)',
            WebkitBackgroundClip: 'text',
            color: 'transparent',
            textShadow: '0px 2px 4px rgba(255, 0, 204, 0.4)',
            }}>
            Franco
          </div>
        <div className='text-white-500 text-2xl font-bold'>Mafferra</div>
      </a>
      <button className='btn btn-sm'>Work with me</button>
      </div>
    </div>
  </header>
    )
  }
export default Header;
