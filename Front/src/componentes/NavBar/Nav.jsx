import React from "react";
import SearchBar from "../SearchBar/SearchBar";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Ul = styled.ul`
  border: 1px solid #e7e7e7;
  background-color: #f3f3f3;
`;

const Li = styled.li`
  display: flex - inline;
  color: white;
  text-align: center;
  padding: 10px 20px;
`;

export default function Nav({ onSearch }) {
  return (
    <nav>
      <Ul>
        <Li>
          <Link to="/home"> Home </Link>
        </Li>
        <Li>
          <Link to="/favorites"> Fav </Link>
        </Li>
        <Li>
          <Link to="/about"> About </Link>
        </Li>
        <Li>
          <SearchBar onSearch={onSearch} />
        </Li>
        <Li>
          <Link to="/"> LOGOUT </Link>
        </Li>
      </Ul>
    </nav>
  );
}
