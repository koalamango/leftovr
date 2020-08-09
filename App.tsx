import React, { useContext } from "react";
import styled from "styled-components";
import { RecipeContext } from "./context/index";
import { COLORS } from "./components/Constants";
import SearchBar from "./components/SearchBar";
import RecipeList from "./components/RecipeList";
import Placeholder from "./components/Placeholder";
import Pager from "./components/Pager";
import * as Sentry from "@sentry/react";

const SearchResult = styled.div`
  display: block;
  padding: 2rem;
  background: ${COLORS.grayLight};
  margin: 20px 40px;
  border-radius: 4px;
  min-height: 600px;
`;

Sentry.init({
  dsn:
    "https://b3ec69a7c0884c3d8a0e953685e73ed3@o431786.ingest.sentry.io/5383586",
});

function App() {
  const appContext = useContext(RecipeContext);
  const { loading } = appContext;
  return (
    <>
      <SearchBar />
      <SearchResult>
        {loading ? <Placeholder /> : <RecipeList />}
        <Pager />
      </SearchResult>
    </>
  );
}

export default App;
