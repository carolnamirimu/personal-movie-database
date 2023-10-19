'use client';
import NavBar from '../components/NavBar'
import Searchbar from '../components/Searchbar';
import MovieData from '../components/MovieData';
export default function Home() {
  return (
    <main>
      <h1>
        Personal Movie Database
        
      </h1>
      <NavBar />
        
          <MovieData/>
   </main>
  )
}
