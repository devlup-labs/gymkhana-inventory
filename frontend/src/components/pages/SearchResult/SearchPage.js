import React from "react";
import ItemList from "./ItemList";
import Grid from "@material-ui/core/Grid";
import { useGlobalStore } from "../../../contextProviders/globalContext";
import Divider from "@material-ui/core/Divider";
import Chip from "@material-ui/core/Chip";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    "& > *": {
      margin: theme.spacing(0.5),
    },
  },
}));

function SearchPage() {
  const globalStore = useGlobalStore();
  const classes = useStyles();

  const sortingOption = ["option 1", "option 2", "option 3"];

  return (
    <div className="search">
      <div>
        <h3>
          <i>Showing results for {globalStore.searchText} ...</i>
        </h3>
      </div>
      <div>
        <Grid container spacing={3}>
          <Grid item xs={2}>
            <div className="sort">
              <h4>Filters: </h4>
              <div className="sorting-option">
                {sortingOption.map((el, index) => {
                  return <div key={index}>{el}</div>;
                })}
              </div>
            </div>
          </Grid>
          <Divider orientation="vertical" flexItem />

          <Grid item xs={9}>
            <h3>Sort By:</h3>
            <div className={classes.root}>
              <Chip label="Availability" color="primary" />
              <Chip label="New" color="primary" />
              <Chip label="A-Z" color="primary" />
            </div>
            <ItemList />
          </Grid>
        </Grid>
      </div>

      {/*<Typography variant="h6" style={{ padding: '20px 20px 20px 10px' }}>*/}

      {/*</Typography>*/}
      {/*<div className="search-results">*/}
      {/*<Grid container align-item="flex" spacing={4}>*/}
      {/*    <Grid item lg={9} container direction="row" spacing={4}>*/}
      {/*        <Grid item>*/}
      {/*            <Typography variant="h5" style={{ fontWeight: '600' }}>*/}
      {/*                Sort By :*/}
      {/*            </Typography>*/}
      {/*        </Grid>*/}
      {/*        <Grid item>*/}
      {/*            <Button*/}
      {/*                style={{*/}
      {/*                    backgroundColor: '#1134A6',*/}
      {/*                    color: 'white',*/}
      {/*                    borderRadius: '20px',*/}
      {/*                    padding: '5px 20px 5px 20px'*/}
      {/*                }}>*/}
      {/*                Option 1*/}
      {/*            </Button>*/}
      {/*        </Grid>*/}
      {/*        <Grid item>*/}
      {/*            <Button*/}
      {/*                style={{*/}
      {/*                    backgroundColor: '#1134A6',*/}
      {/*                    color: 'white',*/}
      {/*                    borderRadius: '20px',*/}
      {/*                    padding: '5px 20px 5px 20px'*/}
      {/*                }}>*/}
      {/*                Option 2*/}
      {/*            </Button>*/}
      {/*        </Grid>*/}
      {/*        <Grid item>*/}
      {/*            <Button*/}
      {/*                style={{*/}
      {/*                    backgroundColor: '#1134A6',*/}
      {/*                    color: 'white',*/}
      {/*                    borderRadius: '20px',*/}
      {/*                    padding: '5px 20px 5px 20px'*/}
      {/*                }}>*/}
      {/*                Option 3*/}
      {/*            </Button>*/}
      {/*        </Grid>*/}
      {/*    </Grid>*/}
      {/*    <Grid xs={12} lg={2} item>*/}
      {/*        <Card elevation={0}>*/}
      {/*            <CardContent style={{ paddingLeft: '15px' }}>*/}
      {/*                <Typography style={{ fontWeight: '600' }}>Filters:-</Typography>*/}
      {/*                <Typography>By society</Typography>*/}
      {/*                <List component="nav">*/}
      {/*                    <ListItem>*/}
      {/*                        <ListItemText primary="Shutterbugs" />*/}
      {/*                    </ListItem>*/}
      {/*                    <ListItem>*/}
      {/*                        <ListItemText primary="P club" />*/}
      {/*                    </ListItem>*/}
      {/*                    <ListItem>*/}
      {/*                        <ListItemText primary="Frame-X" />*/}
      {/*                    </ListItem>*/}
      {/*                </List>*/}
      {/*            </CardContent>*/}
      {/*        </Card>*/}
      {/*    </Grid>*/}
      {/*    <Grid item lg={9}>*/}
      {/*        <ItemList />*/}
      {/*    </Grid>*/}
      {/*</Grid>*/}
      {/*</div>*/}
    </div>
  );
}

export default SearchPage;
