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
import { useGlobalStore } from "../../contextProviders/globalContext";

const useStyles = makeStyles((theme) => ({
  form: {
    minWidth: "lg",
  },
  text: {
    display: "flex",
  },
  margins: {
    marginTop: theme.spacing(2),
  },
  container: {
    display: "inline",
    flexWrap: "wrap",
    marginRight: theme.spacing(0),
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(0),
    width: 200,
  },
  heading4: {
    display: "inline",
    marginLeft: theme.spacing(10),
  },
}));

export default function FormDialog() {
  const classes = useStyles();
  const globalStore = useGlobalStore();

  const data = {
    nameOfEquipment: globalStore.equipmentDetails.title,
    equipmentId: globalStore.equipmentDetails.id,
    image: globalStore.equipmentDetails.url,
    society: globalStore.equipmentDetails.society,
    quantity: globalStore.equipmentDetails.available,
    available: globalStore.equipmentDetails.available > 0,
    Description: globalStore.equipmentDetails.desc,
    deadline: "",
  };

  return (
    <div>
      <DialogTitle id="form-dialog-title">Request Extension</DialogTitle>
      <DialogContent>
        <h2>{data.nameOfEquipment}</h2>
        <p>Equipment ID: {data.equipmentId}</p>
        <p>Belongs to: {data.society}</p>
        <Grid container spacing={3}>
          <Grid item xs={7}>
            <h3>
              Deadline: {data.deadline}
              <h3 className={classes.heading4}>request extension till</h3>
              <form className={classes.container} noValidate>
                <TextField
                  id="date"
                  label="till"
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
