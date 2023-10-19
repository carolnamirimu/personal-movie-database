"use client";
import { TextFieldInput, TextFieldRoot } from "@radix-ui/themes";
import SearchIcon from "@mui/icons-material/Search";
import React from "react";

const Searchbar = ({ value, setSearchValue }) => {
  return (
    <div className="max-w-xl px-5 py-5  ">
      <TextFieldRoot>
        <TextFieldInput
          className="p-5 text-indigo-600"
          value={value}
          onChange={(event) => setSearchValue(event.target.value)}
          placeholder="Search movie...."
        />
        <SearchIcon className="pt-1 text-4xl " />
      </TextFieldRoot>
    </div>
  );
};

export default Searchbar;
