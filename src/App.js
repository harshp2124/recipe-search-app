import React, { useState, useEffect } from "react";
import Recipe from "./components/Recipe/Recipe";
import { getRecipe } from "./api/index";
import style from "./App.module.css";

const App = () => {
  const [recipes, setRecipes] = useState([]);
  const [query, setQuery] = useState("Milk");

  const fetchRecipes = async () => {
    const recipe = await getRecipe(query);
    setRecipes(recipe);
  };

  useEffect(() => {
    fetchRecipes();
    // eslint-disable-next-line
  }, []);

  return (
    <div className={style.App}>
      <div className={style.searchForm}>
        <input
          className={style.searchBar}
          type="text"
          id="queryName"
          placeholder={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button className={style.searchButton} onClick={() => fetchRecipes()}>
          Search
        </button>
      </div>
      <div className={style.recipes}>
        {recipes.length !== 0 ? (
          recipes.map((recipe) => (
            <Recipe
              key={recipe.recipe.label}
              title={recipe.recipe.label}
              image={recipe.recipe.image}
              ingredients={recipe.recipe.ingredients}
            />
          ))
        ) : (
          <p>Data not found!</p>
        )}
      </div>
    </div>
  );
};

export default App;
