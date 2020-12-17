import React, { useState } from "react";
import "./App.css";
import "./bootstrap.min.css";
import axios from "axios";
import Message from "./components/Message";
import Result from "./components/Result";
import Search from "./components/Search";
import MealDetail from "./components/MealDetail";
import MealList from "./components/MealList";
import { Container } from "react-bootstrap";

const App = () => {
  const [meals, setMeals] = useState([]);
  const [meal, setMeal] = useState([]);
  const [search, setSearch] = useState("");
  const onClick = async (id) => {
    const response = await axios.get(
      `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
    );
    setMeal(response.data.meals[0]);
  };
  const foodSearch = async (searchTerm) => {
    const response = await axios.get(
      `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchTerm}`
    );
    setMeals(response.data.meals);
    setSearch(searchTerm);
    setMeal([]);
  };
  const getRandomMeal = async () => {
    const response = await axios.get(
      `https://www.themealdb.com/api/json/v1/1/random.php`
    );
    setMeal(response.data.meals[0]);
    setMeals([]);
    setSearch("");
  };
  return (
    <React.Fragment>
      <Search foodSearch={foodSearch} getRandomMeal={getRandomMeal} />
      <Container>
        <MealList setMeals={setMeals} />
        {search ? (
          <h2 className="text-center">Search results for {search}:</h2>
        ) : (
          ""
        )}

        {meals === null ? (
          <Message />
        ) : (
          <div className="meals" id="meals">
            {meals.map((meal, index) => (
              <Result
                key={index}
                alt={meal.strMeal}
                onClick={onClick}
                image={meal.strMealThumb}
                index={meal.idMeal}
              />
            ))}
          </div>
        )}
        {meal.length !== 0 ? <MealDetail meal={meal} /> : ""}
      </Container>
    </React.Fragment>
  );
};

export default App;
