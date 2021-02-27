import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import PublishSharpIcon from '@material-ui/icons/PublishSharp';
import { Input } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        color: theme.palette.text.primary
    },
    textField: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
        width: '25ch'
    }
}));

export default function LayoutTextFields() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <div>
                <h1>Adding equipment to Respective Society</h1>
                <TextField
                    id="outlined-full-width"
                    label="Product Name"
                    style={{ margin: 8 }}
                    placeholder="Enter Your Product Here"
                    fullWidth
                    margin="normal"
                    InputLabelProps={{
                        shrink: true
                    }}
                    variant="outlined"
                />
                <TextField
                    id="outlined-full-width"
                    label="Model"
                    style={{ margin: 8 }}
                    placeholder="Enter Model of Your Product Here"
                    fullWidth
                    margin="normal"
                    InputLabelProps={{
                        shrink: true
                    }}
                    variant="outlined"
                />
                <TextField
                    id="outlined-full-width"
                    label="Description"
                    style={{ margin: 8 }}
                    placeholder="Description"
                    fullWidth
                    margin="normal"
                    InputLabelProps={{
                        shrink: true
                    }}
                    variant="outlined"
                />
                <TextField
                    id="outlined-full-width"
                    label="Quantity"
                    style={{ margin: 8 }}
                    placeholder="Quantity"
                    margin="normal"
                    InputLabelProps={{
                        shrink: true
                    }}
                    variant="outlined"
                />
                <TextField
                    id="outlined-full-width"
                    label="Type"
                    style={{ margin: 8 }}
                    placeholder="Type"
                    InputLabelProps={{
                        shrink: true
                    }}
                    variant="outlined"
                />
                <br />
                <Input
                    type="file"
                    style={{ margin: 10 }}
                    label="Upload file"
                    large
                    startAdornment={<PublishSharpIcon fontSize="large" />}
                />
            </div>
        </div>
    );
}
