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
        <ul className="border-slatte-50 border-2 flex flex-row justify-between">
          {navLinks.map((link) => (
              <Link href={link.path} key={link.name} className='text-xl'>
                <li>{link.name}</li>
              </Link>
            ))
          }
      </ul>
      </nav>
    </div>
  );
};