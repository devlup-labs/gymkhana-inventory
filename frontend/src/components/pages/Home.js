import { React, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import IITJ from '../../IITJ.png';
import { Link } from 'react-router-dom';
import SendIcon from '@material-ui/icons/Send';

import Api from '../../api/Api';
import {useSocietyStore} from '../../contextProviders/societyContext';
import {useGlobalStore} from '../../contextProviders/globalContext';
import ValidationTextFields from '../form';

const useStyles = makeStyles((theme) => ({
    Searchbutton: {
        padding: '10px',
        marginBottom: '3px',
        backgroundColor: "#148FD3",
        color:"#FFF"
    },
    Gridcontainer: {
        marginTop: '50px'
    }
}));

function Home() {

    const societyStore = useSocietyStore()
    const globalStore = useGlobalStore()

    // useEffect(() => {
    //     Api.getAllSocieties();
    // }, []);
    //  -------Fake Data -------



    const classes = useStyles();
    return (
        <div className="container home">
            <div className="sep">
                <i>Every moment is a fresh beginning. – T.S Eliot</i>
            </div>
            <div className="Grid-container society-cards-container">
                <Grid container spacing={7} className={classes.Grid}>
                    {societyStore.society.map((item,index) => {
                        return (
                            <Grid
                                key={index}
                                item
                                xs={12}
                                sm={6}
                                md={4}
                                className={classes.Gridcontainer}>
                                <Card className={classes.root}>
                                    <CardActionArea>
                                        <CardMedia
                                            component="img"
                                            alt="Contemplative Reptile"
                                            height="200"
                                            image={item.image}
                                            title="Contemplative Reptile"
                                        />
                                        <CardContent>
                                            <Typography gutterBottom variant="h5" component="h2">
                                                {item.name}
                                            </Typography>
                                        </CardContent>
                                    </CardActionArea>

                                </Card>
                            </Grid>
                        );
                    })}
                </Grid>
            </div>
            <div className="separator">
                <div className="septext">View more</div>
            </div>
            <div className="quotes">
                <h3>
                    <i>
                        &ldquo;It matters little how much equipment we use; it matters much that we
                        be masters of all we do use&ldquo;
                    </i>
                </h3>
            </div>
            <div className="rules-container">
                <h1>Gymkhana Equipment Lending Policies</h1>
                <p className="rules">
                    <i>
                        {globalStore.rules}
                    </i>
                </p>
            </div>
            <div className="sep sep2">
                <i>Write your query</i>
            </div>
            <ValidationTextFields/>
            {/*<div className="form-container">*/}
            {/*    <form className="forms">*/}
            {/*        <div className="row">*/}
            {/*            <div className="labels">*/}
            {/*                <label htmlFor="name">Name :</label>*/}
            {/*            </div>*/}
            {/*            <div className="field">*/}
            {/*                <input type="text" id="name" placeholder="Enter your name" />*/}
            {/*            </div>*/}
            {/*        </div>*/}
            {/*        <div className="row">*/}
            {/*            <div className="labels">*/}
            {/*                <label htmlFor="email">Email :</label>*/}
            {/*            </div>*/}
            {/*            <div className="field">*/}
            {/*                <input type="email" id="email" placeholder="Enter your Email" />*/}
            {/*            </div>*/}
            {/*        </div>*/}
            {/*        <div className="row equipment">*/}

            {/*            <div className="question">*/}
            {/*                If your query related to a particular equipment*/}
            {/*            </div>*/}
            {/*            <div className="labels">*/}
            {/*                <label htmlFor="equipment-id">Equipment Id :</label>*/}
            {/*            </div>*/}
            {/*            <div className="field">*/}
            {/*                <input type="text" id="equipment-id" placeholder="Enter ID" />*/}
            {/*            </div>*/}
            {/*        </div>*/}
            {/*        <div className="row">*/}
            {/*            <div className="labels">*/}
            {/*                <label htmlFor="description">Description :</label>*/}
            {/*            </div>*/}
            {/*            <div className="field">*/}
            {/*                <textarea*/}
            {/*                    id="description"*/}
            {/*                    name="subject"*/}
            {/*                    placeholder="Enter your query"></textarea>*/}
            {/*            </div>*/}
            {/*        </div>*/}
            {/*        <div className="row button">*/}
            {/*            <Button*/}
            {/*                variant="contained"*/}
            {/*                type="submit"*/}
            {/*                color="primary"*/}
            {/*                startIcon={<SendIcon />}>*/}
            {/*                Send*/}
            {/*            </Button>*/}
            {/*        </div>*/}
            {/*    </form>*/}
            {/*</div>*/}
        </div>
    );
}

export default Home;
