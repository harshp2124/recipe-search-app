import React, { useState, useEffect } from "react";
import Recipe from "./components/Recipe/Recipe";
import { getRecipe } from "./api/index";
import style from "./App.module.css";

const App = () => {
  const [recipes, setRecipes] = useState([]);
  const [query, setQuery] = useState("Milk");
  const [from, setFrom] = useState(10);
  const [to, setTo] = useState(20);

  const fetchRecipes = async () => {
    const recipe = await getRecipe(query);
    setRecipes(recipe);
    // console.log(recipe);
  };

  const fetchMoreRecipes = async () => {
    setFrom(from + 10);
    setTo(to + 10);
    const recipe = await getRecipe(query, from, to);
    setRecipes(recipes.concat(recipe));
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
        <button
          className={style.searchButton}
          onClick={() => {
            fetchRecipes();
          }}
        >
          Search
        </button>
      </div>

      <div className={style.recipes}>
        {console.log(recipes)}
        {typeof recipes !== "undefined" ? (
          recipes.map((recipe) =>
            typeof recipe !== "undefined" ? (
              <Recipe
                key={recipe.recipe.label}
                title={recipe.recipe.label}
                image={recipe.recipe.image}
                ingredients={recipe.recipe.ingredients}
              />
            ) : null
          )
        ) : (
          <div>
            <p>Data not found!</p>
          </div>
        )}
      </div>

      {typeof recipes !== "undefined" ? (
        <div className={style.loadMore}>
          <button
            className={style.loadButton}
            onClick={() => {
              fetchMoreRecipes();
            }}
          >
            Load More
          </button>
        </div>
      ) : null}
    </div>
  );
};

export default App;
