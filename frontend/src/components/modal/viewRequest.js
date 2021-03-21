import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import { Grid } from "@material-ui/core";
import Divider from "@material-ui/core/Divider";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
const useStyles = makeStyles((theme) => ({
  margins: {
    marginTop: theme.spacing(2),
  },
  container: {
    display: "inline",
    flexWrap: "wrap",
    marginLeft: theme.spacing(5),
    marginRight: theme.spacing(5),
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200,
  },
  heading4: {
    display: "inline",
    marginLeft: theme.spacing(10),
  },
}));

export default function FormDialog() {
  const classes = useStyles();
  const data = {
    nameOfEquipment: "NAME OF EQUIPMENT",
    equipmentId: "d4f8j9",
    society: "Frame-X",
    quantity: "5",
    Description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  };
  return (
    <div className="modal">
      <DialogTitle id="form-dialog-title">Make Request</DialogTitle>
      <DialogContent>
        <h2>{data.nameOfEquipment}</h2>
        <p>Equipment ID: {data.equipmentId}</p>
        <p>Belongs to: {data.society}</p>
        <Grid container spacing={3}>
          <Grid item xs={7}>
            <h3>
              Book request from:
              <form className={classes.container} noValidate>
                <TextField
                  id="date"
                  label="FROM"
                  type="date"
                  defaultValue="2017-05-24"
                  className={classes.textField}
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
              </form>
              till:
              <form className={classes.container} noValidate>
                <TextField
                  id="date"
                  label="TO"
                  type="date"
                  defaultValue="2017-05-24"
                  className={classes.textField}
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
              </form>
            </h3>
            <h4>Add a short description for your request</h4>
            <TextField
              autoFocus
              margin="dense"
              id="name"
              label="description"
              type="email"
              fullWidth
            />
            <Divider variant="middle" className={classes.margins} />
            <h3>Institute requesting document</h3>
            <h3 style={{ color: "red" }}>Only for Institute Request</h3>
            <p>
              If you are issuing equipment for any Institute Event you are
              required to add institute requesting document, mentioning
              institute hold the responisblity of handling the equipment and
              agrees to the terms and conditions state by the gymkhana equipment
              lending policies
            </p>
          </Grid>
          <Divider orientation="vertical" flexItem />
          <Grid item xs={4}>
            <div>
              <Button
                variant="contained"
                style={{ backgroundColor: "#148FD3", color: "#fff" }}
                // href="#contained-buttons"
                className="heading1"
              >
                READ T&C
              </Button>
            </div>
            <FormControlLabel
              control={<Checkbox name="checkedC" />}
              label="I have read terms and conditions"
            />
            <FormControlLabel
              control={<Checkbox name="checkedC" />}
              label="Agree to terms and conditions"
            />
          </Grid>
        </Grid>
      </DialogContent>
    </div>
  );
}
