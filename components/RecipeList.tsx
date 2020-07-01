import React, { useContext } from "react";
import styled from "styled-components";
import Recipe from "./Recipe";
import { RecipeContext } from "../context/index";
import { BREAKPOINT } from "../components/Constants";

const Wrapper = styled.div`
  display: block;
  grid-column-gap: 2%;
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

export default function RecipeList() {
  const appContext = useContext(RecipeContext);
  const { recipes } = appContext;
  return (
    <Wrapper>
      {recipes &&
        recipes.map((recipe: { recipe: { uri: string | number | undefined; yield: any; }; }) => {
          return (
            <Recipe
              key={recipe.recipe.uri}
              recipe={recipe.recipe}
            />
          );
        })}
    </Wrapper>
  );
}
