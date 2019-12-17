import React, { useContext } from "react";
import { RecipeContext } from "../context/index";
import styled from "styled-components";

const SearchArea = styled.div`
  max-width: 620px;
  margin: 50px auto 100px;
  color: #fff;
  padding: 0 1%;
  h1 {
    font-size: 2.5rem;
    text-align: center;
    margin-bottom: 0px;
    letter-spacing: 4px;
  }
`;
const SearchBar = styled.input`
  background-color: #fff;
  border-color: #d9d9d9 #ccc #b3b3b3;
  border-radius: 4px;
  border: 1px solid #ccc;
  color: #333;
  cursor: default;
  border-spacing: 0;
  border-collapse: separate;
  height: 60px;
  font-size: 1.2rem;
  overflow: hidden;
  position: relative;
  width: 100%;
  padding: 0 15px;
`;
const Intro = styled.label`
  margin: 0 auto 20px;
  letter-spacing: 3px;
  display: block;
`;
const SearchForm = styled.form`
  position: relative;
  span {
    color: #000;
    position: absolute;
    top: 0;
    left: 0;
    margin-top: 2px;
    margin-left: 3px;
    width: 20px;
    height: 20px;
    border: solid 3px #999;
    border-radius: 100%;
    -webkit-transform: rotate(-45deg);
    transform: rotate(-45deg);
    &:hover {
      border-color: #d0021b;
    }
    &:before {
      content: "";
      position: absolute;
      top: 17px;
      left: 5px;
      height: 9px;
      width: 3px;
      background-color: #999;
    }
    &:after {
      content: "";
      position: absolute;
    }
    &:hover {
      border-color: #d0021b;
      &:before {
        background-color: #d0021b;
      }
  }
`;
const SearchIcon = styled.button`
  position: absolute;
  right: 10px;
  bottom: 10px;
  border: 0;
  width: 36px;
  height: 36px;
  cursor: pointer;
  background-color: transparent;
`;
export default function RecipeSearch() {
  const appContext = useContext(RecipeContext);
  const { handleSubmit, handleSearchChange } = appContext;

  return (
    <SearchArea>
      <SearchForm onSubmit={e => handleSubmit(e)}>
        <Intro htmlFor="search">
          Find recipes based on ingredients that you have on hand.
        </Intro>
        <SearchBar
          data-age="Love"
          onChange={e => handleSearchChange(e)}
          type="text"
          className="form-control"
          id="search"
          placeholder="Enter ingredients"
          name="search"
        />
        <SearchIcon type="submit" className="btn btn-primary">
          <span />
        </SearchIcon>
      </SearchForm>
    </SearchArea>
  );
}
