import React from "react";
import "./search-box.styles.css";

export const SearchBox = ({ placeholder, handleOnchange }) => {
  return (
    <input
      className="search"
      type="search"
      onChange={handleOnchange}
      placeholder={placeholder}
    />
  );
};
