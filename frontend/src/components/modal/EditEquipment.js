import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
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
    marginLeft: theme.spacing(2),
  },
}));

export default function FormDialog() {
  const classes = useStyles();
  const [quantity, setQuantity] = React.useState("");
  const [quantityn, setQuantityn] = React.useState("");
  const [value, setValue] = React.useState("");
  const [space, setspace] = React.useState(
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
  );
  const data = {
    nameOfEquipment: "NAME OF EQUIPMENT",
    equipmentId: "d4f8j9",
    society: "Frame-X",
    quantity: "5",
    Description: "",
  };

  return (
    <div>
      <DialogTitle id="form-dialog-title">Edit Equipment Details</DialogTitle>
      <DialogContent>
        <h2>{data.nameOfEquipment}</h2>
        <p>Equipment ID: {data.equipmentId}</p>
        <p>Belongs to: {data.society}</p>
        <p>
          Quantity: {quantityn}{" "}
          <div className={classes.heading4}>
            <TextField
              id="standard-number"
              label="Number"
              type="number"
              InputLabelProps={{
                shrink: true,
              }}
              value={quantity}
              onChange={(e) => setQuantity(e.target.value)}
            />
          </div>
          <div className={classes.heading4}>
            <Button
              variant="contained"
              style={{ backgroundColor: "#148FD3", color: "#fff" }}
              value={quantityn}
              onClick={() => setQuantityn(quantity)}
            >
              save
            </Button>
          </div>
        </p>
        <h3>DESCRIPTION: </h3>
        <p>{space}</p>
        <TextField
          id="standard-multiline-static"
          label="Multiline"
          multiline
          rows={4}
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <div className={classes.heading4}>
          <Button
            variant="contained"
            style={{ backgroundColor: "#148FD3", color: "#fff" }}
            value={space}
            onClick={() => setspace(value)}
          >
            save
          </Button>
        </div>
        <div>
          <h3>Change equipment image</h3>
          <Button
            variant="contained"
            style={{ backgroundColor: "#148FD3", color: "#fff" }}
            value={space}
            onClick={() => setspace(value)}
          >
            upload
          </Button>
        </div>
      </DialogContent>
    </div>
  );
}
