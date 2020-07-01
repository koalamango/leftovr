import React, { useContext } from "react";
import styled from "styled-components";
import { RecipeContext } from "../context/index";
import { COLORS } from "./Constants";

const Wrapper = styled.div`
  max-width: 620px;
  margin: 20px auto 50px;
  color: #fff;
  padding: 0 1%;
  h1 {
    font-size: 2.5rem;
    text-align: center;
    margin-bottom: 0px;
    letter-spacing: 4px;
  }
`;
const SearchForm = styled.form`
  position: relative;
  label {
    margin: 0 auto 20px;
    letter-spacing: 2px;
    display: block;
    font-size: 18px;
    text-align: center;
  }
  input {
    background-color: ${COLORS.white};
    border-radius: 4px;
    border: 1px solid ${COLORS.gray};
    color: ${COLORS.grayMedium};
    cursor: default;
    border-spacing: 0;
    border-collapse: separate;
    height: 60px;
    font-size: 1.2rem;
    overflow: hidden;
    position: relative;
    width: 100%;
    padding: 0 15px;
  }
  button {
    position: absolute;
    right: 10px;
    bottom: 10px;
    border: 0;
    width: 36px;
    height: 36px;
    cursor: pointer;
    background-color: transparent;
  }
  span {
    color: ${COLORS.black};
    position: absolute;
    top: 0;
    left: 0;
    margin-top: 2px;
    margin-left: 3px;
    width: 20px;
    height: 20px;
    border: solid 3px ${COLORS.gray};
    border-radius: 100%;
    -webkit-transform: rotate(-45deg);
    transform: rotate(-45deg);
    &:hover {
      border-color: ${COLORS.coral};
    }
    &:before {
      content: "";
      position: absolute;
      top: 17px;
      left: 5px;
      height: 9px;
      width: 3px;
      background-color: ${COLORS.gray};
    }
    &:after {
      content: "";
      position: absolute;
    }
    &:hover {
      border-color: ${COLORS.coral};
      &:before {
        background-color: ${COLORS.coral};
      }
  }
`;

export default function SearchBar() {
  const appContext = useContext(RecipeContext);
  const { handleSubmit, handleSearchChange } = appContext;

  return (
    <Wrapper>
      <SearchForm onSubmit={e => handleSubmit(e)}>
        <label htmlFor="search">
          Find recipes based on ingredients that you have on hand.
        </label>
        <input
          data-age="Love"
          onChange={e => handleSearchChange(e)}
          type="text"
          id="search"
          placeholder="Enter ingredients"
          name="search"
        />
        <button type="submit">
          <span />
        </button>
      </SearchForm>
    </Wrapper>
  );
}
