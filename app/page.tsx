"use client";
import NavBar from "../components/NavBar";
import MovieData from "../components/MovieData";
import Footer from "../components/Footer";
export default function Home() {
  return (
    <main className='bg-gradient-to-t from-purple-600 to-pink-300'>
      <div className="sticky top-0 bg-indigo-600 px-5 py-5">
        <h1 className="text-align: center text-white text-3xl pd-4  ">
          Personal Movie Database
        </h1>
        <NavBar />
      </div>
      <MovieData />
      <Footer/>
    </main>
  );
}
