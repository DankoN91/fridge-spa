import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";

export const Meal = (props) => {
  const arrowStyle = {
    border: "solid blue",
    borderWidth: "0 3px 3px 0",
    display: "inline-block",
    padding: "3px",
    transform: "rotate(45deg)",
    WebkitTransform: "rotate(45deg)",
  };

  const { meal } = props;

  return (
    <Accordion>
      <AccordionSummary
        expandIcon={<i style={arrowStyle} />}
        aria-controls="panel1a-content"
        id="panel1a-header"
      >
        <Typography>{meal.name}</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography>Description: {meal.description}</Typography>
        <Typography>Difficulty: {meal.difficulty}</Typography>
      </AccordionDetails>
    </Accordion>
  );
};
