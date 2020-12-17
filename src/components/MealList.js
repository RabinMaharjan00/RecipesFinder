import React, { useEffect } from "react";
import axios from "axios";

const MealList = ({ setMeals }) => {
  useEffect(() => {
    const getRandomAlphabet = () => {
      const alphabet = "abcdefghijklmnopqrstuvwxyz";
      return alphabet[Math.floor(Math.random() * alphabet.length)];
    };
    const alphabet = getRandomAlphabet();
    const loadData = async () => {
      const response = await axios.get(
        `https://www.themealdb.com/api/json/v1/1/search.php?f=${alphabet}`
      );
      setMeals(response.data.meals);
    };
    loadData();
  }, [setMeals]);
  return <div></div>;
};

export default MealList;
