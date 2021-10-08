import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

export const Food = ({foodProps, getFoodProps}) => {
  const arrowStyle = {
    border: "solid blue",
    borderWidth: "0 3px 3px 0",
    display: "inline-block",
    padding: "3px",
    transform: "rotate(45deg)",
    WebkitTransform: "rotate(45deg)",
  };

  const food = foodProps;
  const getFood = getFoodProps;

  const handleDelete = (id) => {
    fetch(`http://127.0.0.1:3000/my-fridge/${id}`, {
      method: "DELETE",
      // headers: {
      //   "Content-Type": "application/json",
      // 'Content-Type': 'application/x-www-form-urlencoded',
      // },
      // body: JSON.stringify(newFood),
    })
      .then((response) => response.json())
      .then((data) => console.log(data));
    getFood();
  };

  return (
    <Accordion>
      <AccordionSummary
        expandIcon={<i style={arrowStyle} />}
        aria-controls="panel1a-content"
        id="panel1a-header"
      >
        <Typography>{food.name}</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography>Kcal: {food.kcal}</Typography>
        <Typography>Proteins: {food.proteins}</Typography>
        <Typography>Carbs: {food.carbohydrates}</Typography>
        <Typography>Fat: {food.fat}</Typography>
        <Typography>Mass: {food.mass}</Typography>
      </AccordionDetails>
      <Button variant="outlined" onClick={() => handleDelete(food.id)}>
        Delete
      </Button>
    </Accordion>
  );
};
