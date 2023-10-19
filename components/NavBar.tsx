import Link from 'next/link';
import link from 'next/link'
import React from 'react'
import { MdLocalMovies } from 'react-icons/md';

const NavBar = () => {
  return (
      <nav className='flex space-x-6 border-b mb-5 px-5 h-14 items-center '>
          <span><MdLocalMovies classname='logo'/></span>
          <ul className='flex space-x-6'>
              <li>
</li>
                  <Link href='/'>Select Movies</Link>
             <li><Link href='/'>Personal Movie Database</Link></li>
              <li><Link href='/'>About me</Link></li>
          </ul>
          

   </nav>
  )
}

export default NavBar
