import React, { useState, useEffect } from "react";
const RecipeContext = React.createContext();
const apiID = "03285e2e";
const apiKey = "d625c83244be4f5d1d66e7fb47bfcd8f";
const apiUrl = "https://api.edamam.com/search";
const preFetch = `${apiUrl}?q=chicken&app_id=${apiID}&app_key=${apiKey}&from=0&to=8`;

const RecipeProvider = props => {
  let url = `${apiUrl}?app_id=${apiID}&app_key=${apiKey}`;
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");

  const fetchRecipe = async () => {
    try {
      const recipeData = await fetch(preFetch);
      const { hits } = await recipeData.json();
      setRecipes(hits);
      setLoading(false);
    } catch (e) {
      if (e) {
        console.log(e.message, "Try updating the API key in App.js");
      }
    }
  };
  const handleSubmit = async e => {
    e.preventDefault();
    try {
      setLoading(true);
      const searchUrl = `${url}&q=${search}&from=0&to=12`;
      const searchedRecipeData = await fetch(searchUrl);
      const { hits } = await searchedRecipeData.json();
      setRecipes(hits);
      setLoading(false);
    } catch (e) {
      console.log(e);
    }
  };
  const handleSearchChange = e => {
    setSearch(e.target.value);
  };

  useEffect(() => {
    fetchRecipe();
  }, []);

  return (
    <RecipeContext.Provider
      value={{
        loading,
        search,
        recipes,
        handleSearchChange,
        handleSubmit
      }}
    >
      {props.children}
    </RecipeContext.Provider>
  );
};
const RecipeConsumer = RecipeContext.Consumer;
export { RecipeProvider, RecipeConsumer, RecipeContext };
