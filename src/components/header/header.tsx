import React from 'react'

// components
import Navbar from '../navbar/navbar'

export default function Header() {
    return (
        // root container of header
      <div className="flex flex-row justify-between p-15">

        <div>Logo</div>

        {/* spacer here */}

        <Navbar />
        
      </div>
    );
  };