import Link from "next/link";
import React from "react";
import TheatersIcon from "@mui/icons-material/Theaters";

const NavBar = () => {
  return (
    <div>
      <nav className="flex space-x-6 border-b mb-6 px-5 h-14 items-center text-gray-400 ">
        <span>
          <TheatersIcon />
        </span>
        <ul className="flex space-x-6">
          <li></li>
          <Link title="Selected Movies" href="#">
            Select Movies
          </Link>
          <li>
            <Link title="My favorite Movies" href="#favoriteMoviesList">
              My favorite movie
            </Link>
          </li>
          <li>
            <Link title="About project" href="#about">
              About project
            </Link>
          </li>
        </ul>
      </nav>
      <h2
        id="favoriteMoviesList"
        className="text-white text-2xl  top-40 bg-gray-500 p-5 mt-3"
      >
        Search and Select favorite movies
      </h2>
    </div>
  );
};

export default NavBar;
