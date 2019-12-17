import React, { useContext } from "react";
import RecipeList from "./components/RecipeList";
import { RecipeContext } from "./context/index";
import { createGlobalStyle } from "styled-components";
import { COLORS, ImageAssets } from './components/Constants';

const GlobalStyle = createGlobalStyle`
  * {
  box-sizing: border-box;
  word-wrap: break-word;
  }
  body {
    background: ${COLORS.grayLight};
    color: #1c1a1a;
    font-family: Raleway, "Helvetica Neue", Arial, Helvetica, Verdana, sans-serif;
    font-size: 16px;
    font-weight: normal;
    letter-spacing: .03rem;
    margin: 0 auto;
    background-image: url(${ImageAssets.bg});
    background-attachment: fixed;
    background-position: 50% 50%;
    background-repeat: no-repeat;
    background-size: cover;
  }
  h1, h2, h3, h4, h5, h6 {
    font-family: Oswald, "Helvetica Neue", Arial, Helvetica, Verdana, sans-serif;
  }
  h1 {
    font-size: 4rem;
  }
  h2 {
    font-size: 2.0rem;
  }
  a {
    color: ${COLORS.mustard};
    text-decoration: none;
    cursor: pointer;
  }
  a:hover {
    text-decoration: underline;
  }
  img {
    border: 0px;
    width: 100%;
  }
  img {
    border: 0px;
    width: 100%;
  }
`;

function App() {
  const appContext = useContext(RecipeContext);
  const { loading, search } = appContext;
  return (
    <div>
      <GlobalStyle />
      {loading ? <p>...fetching {search} recipe</p> : <RecipeList />}
    </div>
  );
}

export default App;
