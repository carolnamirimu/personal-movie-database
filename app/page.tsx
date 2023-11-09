"use client";
import NavBar from "../components/NavBar";
import MovieData from "../components/MovieData";
import Footer from "../components/Footer";
export default function Home() {
  return (
    <main className="bg-gradient-to-t from-gray-500 to-gray-900">
      <div className="sticky top-0 bg-black px-5 py-5 z-50">
        <h1 className="text-align: center text-white text-3xl pd-4  ">
          Personal Movie Database
        </h1>
        <NavBar />
      </div>
      <div className="p-4">
        <MovieData />
      </div>

      <Footer />
    </main>
  );
}
