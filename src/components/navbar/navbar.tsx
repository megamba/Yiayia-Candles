import React from 'react';
import Link from 'next/link';

interface NavLink {
  name: string;
  path: string;
}

const navLinks: NavLink[] = [
  {
    name: 'about',
    path: '/about'
  },
  {
    name: 'shop',
    path: '/shop'
  },
  {
    name: 'contact',
    path: '/contact'
  },
]

export default function Navbar() {
  return (
    <div>
      <nav>
        <ul className="flex flex-row space-evenly">
          {navLinks.map((link) => (
              <Link href={link.path} key={link.name}>
                <li>{link.name}</li>
              </Link>  
            ))
          }
      </ul>
      </nav>
    </div>
  );
};