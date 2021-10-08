import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";

export const Food = (props) => {
  const arrowStyle = {
    border: "solid blue",
    borderWidth: "0 3px 3px 0",
    display: "inline-block",
    padding: "3px",
    transform: "rotate(45deg)",
    WebkitTransform: "rotate(45deg)",
  };

  const {food} = props;

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
      </AccordionDetails>
    </Accordion>
  );
};
