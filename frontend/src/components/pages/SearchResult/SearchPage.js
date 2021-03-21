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
import { useGlobalStore } from '../../../contextProviders/globalContext';

function SearchPage() {

    const globalStore = useGlobalStore()

    const sortingOption = ['option 1','option 2', 'option 3']


    return (
        <div className="search">
            <div>
                <h5>
                    Showing results for {globalStore.searchText} ...
                </h5>
            </div>
            <div>
                <Grid container spacing={3}>
                    <Grid item xs={12}>
                        <div className="sort">
                            <h4>Sort by: </h4>
                            <div className="sorting-option">
                                {sortingOption.map((el,index)=>{
                                    return(
                                        <div key={index}>{el}</div>
                                    )
                                })}
                            </div>
                        </div>
                    </Grid>
                    <ItemList/>

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
