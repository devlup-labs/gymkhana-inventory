import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
// import camera from './../../camera.jpg';
import Button from "@material-ui/core/Button";
import Divider from "@material-ui/core/Divider";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import EditEquipment from "./../modal/EditEquipment";
import MakeRequest from "../modal/MakeRequest";
import ValidationTextFields from "../form";

import { useGlobalStore } from "../../contextProviders/globalContext";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    margin: theme.spacing(10),
    marginTop: theme.spacing(20),
  },
  heading4: {
    fontWeight: "normal",
    display: "inline",
  },
  button: {
    "& > *": {
      marginTop: theme.spacing(5),
    },
  },
}));

function ItemsPage() {
  const globalStore = useGlobalStore();
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const viewerUser = globalStore.loginType === "user";

  const maxWidth = React.useState("md");

  const data = {
    nameOfEquipment: globalStore.equipmentDetails.title,
    equipmentId: globalStore.equipmentDetails.id,
    image: globalStore.equipmentDetails.url,
    society: globalStore.equipmentDetails.society,
    quantity: globalStore.equipmentDetails.available,
    available: globalStore.equipmentDetails.available > 0,
    Description: globalStore.equipmentDetails.desc,
  };

  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div id="item_page">
      <div className={classes.root}>
        <Grid container spacing={3} className="image">
          <Grid item xs={5} className="image">
            <img src={data.image} width="75%" />
          </Grid>

          <Divider orientation="vertical" flexItem />

          <Grid item xs={6} className="equipment">
            <div>
              <div className="heading1">
                <h1>{data.nameOfEquipment}</h1>
              </div>
              <h4>
                Equipment ID :{" "}
                <p className={classes.heading4}>{data.equipmentId}</p>
              </h4>
              <h4>
                Belongs to : <p className={classes.heading4}>{data.society}</p>
              </h4>
              <h4>
                Total Quantity :{" "}
                <p className={classes.heading4}>{data.quantity}</p>
              </h4>
              {data.available ? (
                <h3 style={{ color: "green" }}>AVAILABLE : YES</h3>
              ) : (
                <h3 style={{ color: "red" }}>AVAILABLE : NO</h3>
              )}
              <h4>
                DESCRIPTION :{" "}
                <p className={classes.heading4}>{data.Description}</p>
              </h4>
              {viewerUser ? (
                data.available ? (
                  <div className={classes.button}>
                    <Button
                      variant="contained"
                      style={{ backgroundColor: "#148FD3", color: "#fff" }}
                      href="#contained-buttons"
                      // className="heading1"
                      onClick={handleOpen}
                    >
                      MAKE REQUEST
                    </Button>
                    <Dialog
                      open={open}
                      onClose={handleClose}
                      aria-labelledby="form-dialog-title"
                      maxWidth={maxWidth}
                    >
                      <MakeRequest />
                      <DialogActions>
                        <Button
                          onClick={handleClose}
                          color="primary"
                          style={{ backgroundColor: "#CF1F1F", color: "#fff" }}
                        >
                          Cancel
                        </Button>
                        <Button
                          onClick={handleClose}
                          variant="contained"
                          style={{ backgroundColor: "#148FD3", color: "#fff" }}
                        >
                          Confirm
                        </Button>
                      </DialogActions>
                    </Dialog>
                  </div>
                ) : (
                  <Button
                    variant="contained"
                    style={{ backgroundColor: "#148FD3", color: "#fff" }}
                    href="#contained-buttons"
                    // className="heading1"
                  >
                    NOTIFY WHEN AVAILABLE
                  </Button>
                )
              ) : (
                <div className={classes.button}>
                  <Button
                    variant="contained"
                    style={{ backgroundColor: "#148FD3", color: "#fff" }}
                    href="#contained-buttons"
                    // className="heading1"
                    onClick={handleOpen}
                  >
                    EDIT EQUIPMENT DETAILS
                  </Button>
                  <Dialog
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="form-dialog-title"
                    maxWidth={maxWidth}
                  >
                    <EditEquipment />
                    <DialogActions>
                      <Button
                        onClick={handleClose}
                        style={{ backgroundColor: "#CF1F1F", color: "#fff" }}
                      >
                        Cancel
                      </Button>
                      <Button
                        onClick={handleClose}
                        style={{ backgroundColor: "#148FD3", color: "#fff" }}
                        variant="contained"
                      >
                        Confirm
                      </Button>
                    </DialogActions>
                  </Dialog>
                </div>
              )}
            </div>
          </Grid>
        </Grid>
      </div>
      <div className="sep sep2">
        <i>Write your query</i>
      </div>
      <ValidationTextFields />
    </div>
  );
}

export default ItemsPage;
