import React from 'react';
import ItemList from './ItemList';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import { Typography } from '@material-ui/core';
import CardContent from '@material-ui/core/CardContent';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Button from '@material-ui/core/Button';
// import useMediaQuery from "@material-ui/core/useMediaQuery";
// import Divider from '@material-ui/core/Divider';

// import PrimarySearchAppBar from './frontend/src/components/navbar/index.js'

function SearchPage() {
    return (
        <div>
            <Typography variant="h5" style={{ padding: '20px 20px 20px 10px' }}>
                Showing results for camera
            </Typography>
            <Grid container align-item="flex" spacing={4}>
                <Grid xs={12} lg={2} item></Grid>
                <Grid item lg={9} container direction="row" spacing={4}>
                    <Grid item>
                        {' '}
                        <Typography variant="h5" style={{ fontWeight: '600' }}>
                            Sort By:
                        </Typography>{' '}
                    </Grid>
                    <Grid item>
                        {' '}
                        <Button
                            style={{
                                backgroundColor: '#1134A6',
                                color: 'white',
                                borderRadius: '20px',
                                padding: '5px 20px 5px 20px'
                            }}>
                            Option 1
                        </Button>
                    </Grid>
                    <Grid item>
                        <Button
                            style={{
                                backgroundColor: '#1134A6',
                                color: 'white',
                                borderRadius: '20px',
                                padding: '5px 20px 5px 20px'
                            }}>
                            Option 2
                        </Button>
                    </Grid>
                    <Grid item>
                        <Button
                            style={{
                                backgroundColor: '#1134A6',
                                color: 'white',
                                borderRadius: '20px',
                                padding: '5px 20px 5px 20px'
                            }}>
                            Option 3
                        </Button>
                    </Grid>
                </Grid>
                <Grid xs={12} lg={2} item>
                    <Card elevation={0}>
                        <CardContent style={{ paddingLeft: '15px' }}>
                            <Typography style={{ fontWeight: '600' }}>Filters:-</Typography>
                            <Typography>By society</Typography>

                            <List component="nav">
                                <ListItem>
                                    <ListItemText primary="Shutterbugs" />
                                </ListItem>
                                <ListItem>
                                    <ListItemText primary="Pclub" />
                                </ListItem>
                                <ListItem>
                                    <ListItemText primary="Frame-X" />
                                </ListItem>
                            </List>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item lg={9}>
                    <ItemList />
                </Grid>
            </Grid>
        </div>
    );
}

export default SearchPage;
