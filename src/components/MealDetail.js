import React from "react";

const MealDetail = ({ meal }) => {
  const ingredients = [];
  for (let i = 1; i <= 20; i++) {
    if (meal[`strIngredient${i}`]) {
      ingredients.push(
        `${meal[`strIngredient${i}`]} - ${meal[`strMeasure${i}`]}`
      );
    } else {
      break;
    }
  }
  return (
    <React.Fragment>
      <div className="single-meal mt-5 ">
        <h1 className="text-center">{meal.strMeal}</h1>
        <img
          src={meal.strMealThumb}
          alt={meal.strMeal}
          className="img-fluid "
        />
        <div className="single-meal-info text-center">
          {meal.strCategory ? (
            <div>
              <h4>Category:</h4>
              <p>{meal.strCategory}</p>
            </div>
          ) : (
            ""
          )}
          {meal.strArea ? (
            <div>
              <h4>Country:</h4>
              <p>{meal.strArea}</p>
            </div>
          ) : (
            ""
          )}
        </div>
        <div className="main">
          <h2>Ingredients:</h2>
          <ul>
            {ingredients.map((ingredient, index) => (
              <li key={index}>{ingredient}</li>
            ))}
          </ul>
          <h2>Methods:</h2>
          <p>
            {""}
            {meal.strInstructions} {""}
          </p>
        </div>
      </div>
    </React.Fragment>
  );
};

export default MealDetail;
