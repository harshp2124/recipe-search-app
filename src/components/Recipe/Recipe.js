import React from "react";
import style from "./Recipe.module.css";

function Recipe(props) {
  return (
    <div className={style.recipe}>
      <h1>{props.title}</h1>
      <ul className={style.ingredients}>
        {props.ingredients.map((ingredient) => (
          <li>{ingredient.text}</li>
        ))}
      </ul>
      <img className={style.image} src={props.image} alt={props.title} />
    </div>
  );
}

export default Recipe;
