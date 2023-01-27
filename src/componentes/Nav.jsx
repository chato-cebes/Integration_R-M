import React from "react";
import SearchBar from "./SearchBar";

export default function Nav({ onSearch }) {
  return (
    <nav>
      <SearchBar onSearch= { onSearch }/>
    </nav>
  ); 
}
