import React from "react";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";

const Footer = () => {
  return (
    <div>
      <h2 className="text-white text-2xl sticky top-40 bg-indigo-600 p-5 mb-2">
        About project
      </h2>
      <div className="flex space-x-6 px-5 h-14 items-center text-pink-100 ">
        This project was coded by Carol Namirimu and its
        <a
          className="font-bold"
          target="_blank"
          href="https://github.com/carolnamirimu/personal-movie-database
"
        >
          open source
        </a>
      </div>
      <div className="self-center  text-pink-100 px-5 pb-20">
        <ul className="flex space-x-6 ">
          <li>
            <a
              title="Linkedin profile"
              href="https://www.linkedin.com/in/carol-namirimu-50b660127/"
            >
              <LinkedInIcon className=" hover:bg-indigo-600  text-green-50 " />
            </a>
          </li>
          <li>
            <a title="Github profile" href="https://github.com/carolnamirimu">
              <GitHubIcon className=" hover:bg-indigo-600  text-green-50 rounded-xl" />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;