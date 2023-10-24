import Link from "next/link";
import React from "react";
import TheatersIcon from "@mui/icons-material/Theaters";

const NavBar = () => {
  return (
    <nav className="flex space-x-6 border-b mb-5 px-5 h-14 items-center text-pink-100 ">
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
  );
};

export default NavBar;
