
import React from 'react'
import { MdLocalMovies } from 'react-icons/md';

const NavBar = () => {
  return (
      <nav className='flex space-x-6 border-b mb-5 px-5 h-14 items-center '>
          <span><MdLocalMovies classname='logo'/></span>
          <ul className='flex space-x-6'>
              <li>
                  <a href='/'>Select Movies</a>
</li>
             <li><a href='/'>Personal Movie Database</a></li>
              <li><a href='/'>About me</a></li>
          </ul>
          

   </nav>
  )
}

export default NavBar
