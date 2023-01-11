import React, { useState, useEffect } from "react";

type ContextProps = {
  loading: boolean;
  search: any;
  recipes: any;
  current: number;
  total: number;
  handleSearchChange: any;
  handleSubmit: any;
  handlePager: any;
};

const RecipeContext = React.createContext<Partial<ContextProps>>({});
const apiID = "03285e2e";
const apiKey = "d625c83244be4f5d1d66e7fb47bfcd8f";
const apiUrl = "https://api.edamam.com/search";
const preFetch = `${apiUrl}?q=chicken&app_id=${apiID}&app_key=${apiKey}&from=0&to=8`;

export interface RecipeProps {
  children: React.ReactNode;
}

const RecipeProvider = (props: RecipeProps) => {
  let url = `${apiUrl}?app_id=${apiID}&app_key=${apiKey}`;
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [current, setCurrent] = useState(1);
  const [total, setTotal] = useState(0);

  const fetchRecipe = async () => {
    try {
      const recipeData = await fetch(preFetch);
      const { hits, count } = await recipeData.json();
      setRecipes(hits);
      setTotal(Math.round(parseInt(count || 0, 10) / 8));
      setLoading(false);
    } catch (e) {
      if (e) {
        console.log("Try updating the API key in App.js");
      }
    }
  };
  const handleSubmit = async (e: any) => {
    e.preventDefault();
    try {
      setLoading(true);
      const searchUrl = `${url}&q=${search}&from=0&to=8`;
      const searchedRecipeData = await fetch(searchUrl);
      const { hits, count } = await searchedRecipeData.json();
      setRecipes(hits);
      setTotal(Math.round(parseInt(count || 0, 10) / 8));
      handlePager(1);
      setLoading(false);
    } catch (e) {
      console.log(e);
    }
  };
  const handleSearchChange = (e: any) => {
    setSearch(e.target.value);
  };

  const handlePager = async (e: any) => {
    setCurrent(e);
    setLoading(true);
    const searchUrl = `${url}&q=${search || "chicken"}&from=${(e - 1) *
      8}&to=${(e - 1) * 8 + 8}`;
    const searchedRecipeData = await fetch(searchUrl);
    const { hits } = await searchedRecipeData.json();
    setRecipes(hits);
    setLoading(false);
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
        current,
        total,
        handleSearchChange,
        handleSubmit,
        handlePager,
      }}
    >
      {props.children}
    </RecipeContext.Provider>
  );
};
const RecipeConsumer = RecipeContext.Consumer;
export { RecipeProvider, RecipeConsumer, RecipeContext };
