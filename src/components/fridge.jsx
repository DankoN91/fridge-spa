import React, { useEffect, useState } from "react";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogActions from "@mui/material/DialogActions";
import Button from "@mui/material/Button";
import Autocomplete, { createFilterOptions } from "@mui/material/Autocomplete";
import { Food } from "./food";

const filter = createFilterOptions();

export const Fridge = () => {
  const [food, setFood] = useState(null);

  const [value, setValue] = React.useState(null);
  const [open, toggleOpen] = React.useState(false);

  const getFood = () => {
    fetch("http://127.0.0.1:3000/food")
      .then((response) => response.json())
      .then((data) => setFood(data));
  };

  useEffect(() => {
    getFood();
  }, []);

  const handleClose = () => {
    setDialogValue({
      name: "",
      kcal: "",
      proteins: "",
      carbohydrates: "",
      fat: "",
    });

    toggleOpen(false);
  };

  const [dialogValue, setDialogValue] = React.useState({
    name: "",
    kcal: "",
    proteins: "",
    carbohydrates: "",
    fat: "",
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    setValue({
      name: dialogValue.name,
      kcal: parseInt(dialogValue.kcal, 10),
      proteins: dialogValue.proteins,
      carbohydrates: dialogValue.carbohydrates,
      fat: dialogValue.fat,
    });
    const newFood = {
      name: dialogValue.name,
      kcal: parseInt(dialogValue.kcal, 10),
      proteins: dialogValue.proteins,
      carbohydrates: dialogValue.carbohydrates,
      fat: dialogValue.fat,
    };
    
    fetch("http://127.0.0.1:3000/food", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: JSON.stringify(newFood),
    })
      .then((response) => response.json())
      .then((data) => console.log(data));
    getFood();
    handleClose();
  };

  return (
    <>
      {food ? food.map((element) => <Food food={element}></Food>) : null}
      <br />
      <React.Fragment>
        <Autocomplete
          value={value}
          onChange={(event, newValue) => {
            if (typeof newValue === "string") {
              setTimeout(() => {
                toggleOpen(true);
                setDialogValue({
                  name: newValue,
                  kcal: "",
                  proteins: "",
                  carbohydrates: "",
                  fat: "",
                });
              });
            } else if (newValue && newValue.inputValue) {
              toggleOpen(true);
              setDialogValue({
                name: newValue.inputValue,
                kcal: "",
                proteins: "",
                carbohydrates: "",
                fat: "",
              });
            } else {
              setValue(newValue);
            }
          }}
          filterOptions={(options, params) => {
            const filtered = filter(options, params);

            if (params.inputValue !== "") {
              filtered.push({
                inputValue: params.inputValue,
                name: `Add "${params.inputValue}"`,
              });
            }

            return filtered;
          }}
          id="free-solo-dialog-demo"
          options={food}
          getOptionLabel={(option) => {
            // e.g value selected with enter, right from the input
            if (typeof option === "string") {
              return option;
            }
            if (option.inputValue) {
              return option.inputValue;
            }
            return option.name;
          }}
          selectOnFocus
          clearOnBlur
          handleHomeEndKeys
          renderOption={(props, option) => <li {...props}>{option.name}</li>}
          sx={{ width: 300 }}
          freeSolo
          renderInput={(params) => (
            <TextField {...params} label="Dive into the fridge" />
          )}
        />
        <Dialog open={open} onClose={handleClose}>
          <form onSubmit={handleSubmit}>
            <DialogTitle>Add more food</DialogTitle>
            <DialogContent>
              <DialogContentText>Let's fill the fridge!</DialogContentText>
              <TextField
                autoFocus
                margin="dense"
                id="name"
                value={dialogValue.name}
                onChange={(event) =>
                  setDialogValue({
                    ...dialogValue,
                    name: event.target.value,
                  })
                }
                label="Food name"
                type="text"
                variant="standard"
              />
              <TextField
                margin="dense"
                id="kcal"
                value={dialogValue.kcal}
                onChange={(event) =>
                  setDialogValue({
                    ...dialogValue,
                    kcal: event.target.value,
                  })
                }
                label="Kcal"
                type="number"
                variant="standard"
              />
              <TextField
                autoFocus
                margin="dense"
                id="protein"
                value={dialogValue.proteins}
                onChange={(event) =>
                  setDialogValue({
                    ...dialogValue,
                    proteins: event.target.value,
                  })
                }
                label="Protein"
                type="text"
                variant="standard"
              />
              <TextField
                autoFocus
                margin="dense"
                id="carbs"
                value={dialogValue.carbohydrates}
                onChange={(event) =>
                  setDialogValue({
                    ...dialogValue,
                    carbohydrates: event.target.value,
                  })
                }
                label="Carbohydrates"
                type="text"
                variant="standard"
              />
              <TextField
                autoFocus
                margin="dense"
                id="fat"
                value={dialogValue.fat}
                onChange={(event) =>
                  setDialogValue({
                    ...dialogValue,
                    fat: event.target.value,
                  })
                }
                label="Fat"
                type="text"
                variant="standard"
              />
            </DialogContent>
            <DialogActions>
              <Button onClick={handleClose}>Cancel</Button>
              <Button type="submit">Add</Button>
            </DialogActions>
          </form>
        </Dialog>
      </React.Fragment>
    </>
  );
};
