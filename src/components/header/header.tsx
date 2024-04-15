import React from 'react'

// components
import Navbar from '../navbar/navbar'
import Logo from '../logo/logo';

export default function Header() {
    return (
        // root container of header
      <div className="border-black border-2 flex w-full max-w-7xl mx-auto pt-3 pb-3">

        <div className='w-1/4 text-3xl'>yiayia</div>

        <div className='w-1/4'>
          <Logo />
        </div>

        <div className='w-1/4'>{/* spacer */}</div>

        <div className='w-1/4'>
            <Navbar />
        </div>

        
        
      </div>
    );
};