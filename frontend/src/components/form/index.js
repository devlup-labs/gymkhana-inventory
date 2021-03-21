import React from "react";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(5),
      width: "30%",
    },
  },
  form: {
    marginLeft: theme.spacing(10),

    textAlign: "center",
  },
  button: {
    marginBottom: theme.spacing(5),
  },
}));

export default function ValidationTextFields() {
  const classes = useStyles();

  return (
    <div className={classes.form}>
      <form className={classes.root} noValidate autoComplete="off">
        <div>
          <TextField
            name="firstName"
            variant="outlined"
            fullWidth
            id="Your Name"
            label="Your Name"
            autoFocus
          />
        </div>
        <div>
          <TextField
            name="firstName"
            variant="outlined"
            fullWidth
            id="Email"
            label="Email-ID"
            autoFocus
          />
        </div>
        <div>
          <TextField
            name="firstName"
            variant="outlined"
            fullWidth
            id="equipmentID"
            label="Equipment ID"
            autoFocus
          />
        </div>
        <div>
          <TextField
            name="firstName"
            variant="outlined"
            fullWidth
            id="query"
            label="Enter your Query here"
            autoFocus
          />
        </div>
        <div className={classes.button}>
          <Button
            variant="contained"
            style={{ backgroundColor: "#148FD3", color: "#fff" }}
          >
            SEND
          </Button>
        </div>
      </form>
    </div>
  );
}
