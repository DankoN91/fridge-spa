import React, { useEffect, useState } from "react";

export const Fridge = () => {
  const [food, setFood] = useState([
    {
      name: "egg",
      id: 12345,
      kcal: 70,
      proteins: 20,
      carbohydrates: 20,
      fat: 20,
      mass: 90,
    },
    {
      name: "milk",
      id: 123222,
      kcal: 70,
      proteins: 20,
      carbohydrates: 20,
      fat: 20,
      mass: 90,
    },
  ]);

  return (
    <>
      {food.map((element) => (
        <h1>{element.name}</h1>
      ))}
    </>
  );
};
