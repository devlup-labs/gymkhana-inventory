import React from "react";
import logo from "./../../camera.jpg";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    margin: theme.spacing(5),
  },
  paper: {
    justifyContent: "center",
    textAlign: "center",
    color: theme.palette.text.primary,
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    // display: "flex",
  },
  container: {
    display: "flex",
    flexWrap: "wrap",
    padding: theme.spacing(2),
    justifyContent: "center",
    textAlign: "center",
  },
  button: {
    "& > *": {
      marginTop: theme.spacing(5),
      display: "flex",
      flexWrap: "wrap",
      height: 50,
    },
  },
  formQuantity: {
    "& .MuiTextField-root": {
      // marginTop: theme.spacing(5),
      // margin: theme.spacing(2),
      textAlign: "center",
      display: "flex",
    },
  },
}));

function ItemsPage() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Paper className={classes.paper}>
            <h3>
              Panasonic LUMIX G7 16.00 MP 4K Mirrorless Interchangeable Lens
              Camera Kit with 14-42 mm Lens (Black)
            </h3>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={5}>
          <Paper className={classes.paper}>
            <img src={logo} />
          </Paper>
        </Grid>
        <Grid item xs={12} sm={7}>
          <Paper className={classes.paper}>
            <h3>DESCRIPTION</h3>
            <h4>
              PROFESSIONAL PHOTO AND VIDEO PERFORMANCE: 16 megapixel Micro Four
              Thirds sensor with no low pass filter to confidently capture sharp
              images with a high dynamic range and artifact free performance;
              WiFi enabled
            </h4>
            <h3>SOCIETY : PHOTOGRAPHY</h3>
            <h3>NUMBER OF AVAILABLE EQUIPMENTS:4</h3>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={5}>
          <Paper className={classes.paper}>
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
          </Paper>
        </Grid>
        <Grid item xs={12} sm={7}>
          <Grid item xs={12} sm={12}>
            <form
              className={classes.formQuantity}
              noValidate
              autoComplete="off"
            >
              <TextField
                id="outlined-number"
                label="QUANTITY"
                type="number"
                InputLabelProps={{
                  shrink: true,
                }}
                variant="outlined"
              />
            </form>
          </Grid>
          <Grid item xs={12} sm={12}>
            <div className={classes.button}>
              <Button
                variant="contained"
                color="primary"
                href="#contained-buttons"
              >
                REQUEST
              </Button>
            </div>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}

export default ItemsPage;
