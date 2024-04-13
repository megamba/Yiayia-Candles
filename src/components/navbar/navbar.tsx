import React from 'react';
import Link from 'next/link';

const navLinks = [
  {
    name: 'about',
    path: 'src/app/about'
  },
  {
    name: 'shop',
    path: 'src/app/shop'
  },
  {
    name: 'contact',
    path: 'src/app/contact'
  },
]

const Navbar = () => {
  return (
    <div>
      <nav>
        {navLinks.map((link, index) => {
          return (
            <ul>
              <Link href={link.path}>
                <li key={index}>{link.name}</li>
              </Link>
            </ul>
          );
        })}
      </nav>
    </div>
  );
};

export default Navbar;