import React from 'react'

// components
import Navbar from '../navbar/navbar'

export default function Header() {
    return (
        // root container of header
      <div className="flex w-full max-w-7xl mx-auto">

        <div className='w-1/4'>yiayia</div>

        <div className='w-1/2'>{/* spacer */}</div>

        <div className='w-1/4'>
            <Navbar />
        </div>

        
        
      </div>
    );
  };