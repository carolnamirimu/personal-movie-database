"use client";
import NavBar from "../components/NavBar";
import MovieData from "../components/MovieData";
export default function Home() {
  return (
    <main className="bg-pink-200 px-5 py-5 ">
      <div className="sticky top-4 bg-indigo-600 px-5 py-5">
        <h1 className="text-align: center text-white text-3xl pd-4  ">
          Personal Movie Database
        </h1>
        <NavBar />
      </div>
      <MovieData />
    </main>
  );
}
