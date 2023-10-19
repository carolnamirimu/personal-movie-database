"use client";
import { Button, TextFieldInput, TextFieldRoot } from "@radix-ui/themes";
import React from "react";

const Searchbar = ({ value, setSearchValue }) => {
  return (
    <div className="flex max-w-xl mb-3">
      <TextFieldRoot>
        <TextFieldInput
          value={value}
          onChange={(event) => setSearchValue(event.target.value)}
          placeholder="Search movie...."
        />
      </TextFieldRoot>
    </div>
  );
};

export default Searchbar;
