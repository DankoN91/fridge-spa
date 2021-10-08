import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import { Meal } from "./meal";

export const Meals = () => {
  const [meals, setMeals] = useState(null);
  const [singleMeal, setSingleMeal] = useState("");

  const getMeals = () => {
    fetch("http://127.0.0.1:3000/meals", {
      headers: {
        "client-request-id": localStorage.getItem("userId"),
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
    })
      .then((response) => response.json())
      .then((data) => setMeals(data));
  };

  const getSingleMeal = () => {
    console.log(singleMeal);
    fetch(`http://127.0.0.1:3000/meals?name=${singleMeal}`, {
      headers: {
        "client-request-id": localStorage.getItem("userId"),
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
    })
      .then((response) => response.json())
      .then((data) => setMeals(data));
  };

  const handleChange = (e) => {
    setSingleMeal(e.target.value);
  };

  useEffect(() => {
    if (singleMeal.length >= 3) {
      getSingleMeal();
    }
  }, [singleMeal]);

  return localStorage.getItem("userId") ? (
    <>
      <br />
      <Button variant="contained" onClick={() => getMeals()}>
        Get all meals
      </Button>
      <br></br>
      {meals ? meals.map((element) => <Meal meal={element}></Meal>) : null}
      <br />
      <h4>Search for a single meal</h4>
      <label for="name">Meal name:</label>

      <input
        value={singleMeal}
        onChange={handleChange}
        type="text"
        id="name"
        name="name"
        size="40"
      ></input>
    </>
  ) : null;
};
