import React, { useState, useEffect } from "react";
import Recipe from "./components/Recipe/Recipe";
import { getRecipe } from "./api/index";
import "./App.css";

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
    <div className="App">
      <div>
        <input
          className="search-bar"
          type="text"
          id="queryName"
          placeholder={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button className="search-button" onClick={() => fetchRecipes()}>
          Search
        </button>
      </div>
      <div>
        {recipes.length !== 0 ? (
          recipes.map((recipe) => (
            <Recipe
              key={recipe.recipe.label}
              title={recipe.recipe.label}
              calories={recipe.recipe.calories}
              image={recipe.recipe.image}
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
