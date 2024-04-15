import React from 'react'

// components
import Navbar from '../navbar/navbar'
import Logo from '../logo/logo';

export default function Header() {
    return (
        // root container of header
      <div className="border-black border-2 flex w-full max-w-7xl pt-1 pb-1">

        <div className='w-1/4'>
          <Logo />
        </div>

        <div className='w-1/2'>{/* spacer */}</div>

        <div className='w-1/3'>
            <Navbar />
        </div>

        
        
      </div>
    );
};