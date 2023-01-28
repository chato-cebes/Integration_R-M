import React from "react";
import SearchBar from "./SearchBar";
import { Link } from "react-router-dom";

export default function Nav({ onSearch }) {
  return (
    <nav>
      <Link to="/home"> Home </Link>
      <Link to="/about"> About </Link>
      <SearchBar onSearch={onSearch} />
    </nav>
  );
}
