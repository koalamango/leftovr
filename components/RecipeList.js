import React, { useContext } from "react";
import Recipe from "./Recipe";
import RecipeSearch from "./RecipeSearch";
import { RecipeContext } from "../context/index";
import styled from "styled-components";
import { BREAKPOINT, COLORS } from '../components/Constants';

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  overflow: hidden;
`;
const Logo = styled.div`
  font-size: 2.5rem;
  font-family: "Contrail One", sans-serif;
  border: 8px double ${COLORS.white};
  border-radius: 100%;
  height: 160px;
  width: 160px;
  padding-top: 50px;
  box-shadow: 2px 2px 8px ${COLORS.black};
  margin: auto;
  text-align: center;
  color: ${COLORS.white};
  margin-top: 15px;
`;
const SearchResults = styled.div`
  display: block;
  grid-column-gap: 2%;
  padding: 2rem;
  background: ${COLORS.grayLight};
  margin: 20px 40px;
  border-radius: 4px;
  @media (min-width: ${BREAKPOINT.mobile}) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
  }
  @media (min-width: ${BREAKPOINT.tablet}) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media (min-width: ${BREAKPOINT.desktop}) {
    grid-template-columns: repeat(4, 1fr);
  }
`;
const Footer = styled.div`
  margin: 30px 0 15px;
  text-align: center;
  color: ${COLORS.white};
`;

export default function RecipeList() {
  const appContext = useContext(RecipeContext);
  const { recipes } = appContext;
  return (
    <Container>
      <Logo>Leftovr</Logo>
      <RecipeSearch />
      <SearchResults>
        {recipes &&
          recipes.map(recipe => {
            return (
              <Recipe
                key={recipe.recipe.uri}
                recipe={recipe.recipe}
                serving={recipe.recipe.yield}
              />
            );
          })}
      </SearchResults>
      <Footer>
        <p>Copyright &copy; 2019. All rights reserved.</p>
      </Footer>
    </Container>
  );
}
