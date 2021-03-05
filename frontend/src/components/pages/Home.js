import React from 'react';
import SearchIcon from '@material-ui/icons/Search';
import IconButton from '@material-ui/core/IconButton';
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

const useStyles = makeStyles((theme) => ({
    Searchbutton: {
        padding: '10px',
        marginBottom: '3px'
    },
    Gridcontainer: {
        marginTop: '50px'
    }
}));

function Home() {
    //  -------Fake Data -------

    const data = [
        {
            id: 1,
            name: 'Product 1',
            description:
                'A paragraph is a self-contained unit of discourse in writing dealing with a particular point or idea. A paragraph consists of one or more sentences.'
        },
        {
            id: 2,
            name: 'Product 2',
            description:
                'A paragraph is a self-contained unit of discourse in writing dealing with a particular point or idea. A paragraph consists of one or more sentences.'
        },
        {
            id: 3,
            name: 'Product 3',
            description:
                'A paragraph is a self-contained unit of discourse in writing dealing with a particular point or idea. A paragraph consists of one or more sentences.'
        },
        {
            id: 4,
            name: 'Product 4',
            description:
                'A paragraph is a self-contained unit of discourse in writing dealing with a particular point or idea. A paragraph consists of one or more sentences.'
        }
    ];

    // ---------xxxx--------
    const classes = useStyles();
    return (
        <div className="container home">
            <div className="search-area">
                <div className="texts">
                    <h2 id="heading">Search for Equipments</h2>
                    <p>Everything at one place</p>
                </div>

                <form>
                    <div className="search-bar">
                        <input
                            className="bar"
                            type="text"
                            id="search-input"
                            placeholder="Search for equipments"
                        />
                        <IconButton
                            component={Link}
                            to="/SearchPage"
                            type="submit"
                            aria-label="search"
                            className={classes.Searchbutton}>
                            <SearchIcon />
                        </IconButton>
                    </div>
                </form>
            </div>
            <div className="sep">
                <i>Every moment is a fresh beginning. – T.S Eliot</i>
            </div>
            <div className="Grid-container">
                <Grid container spacing={7} className={classes.Grid}>
                    {data.map((item) => {
                        return (
                            <Grid
                                key={item.id}
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
                                            height="140"
                                            image={IITJ}
                                            title="Contemplative Reptile"
                                        />
                                        <CardContent>
                                            <Typography gutterBottom variant="h5" component="h2">
                                                {item.name}
                                            </Typography>
                                            <Typography
                                                variant="body2"
                                                color="textSecondary"
                                                component="p">
                                                {item.description}
                                            </Typography>
                                        </CardContent>
                                    </CardActionArea>
                                    <CardActions>
                                        <Button
                                            component={Link}
                                            to="/itempage"
                                            size="small"
                                            color="primary">
                                            Item Page
                                        </Button>
                                        <Button size="small" color="primary">
                                            Request
                                        </Button>
                                    </CardActions>
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
            <div className="rules">
                <h3>Gymkhana Equipment Lending Policies</h3>
                <p id="lorem">
                    <i>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                        consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                        cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
                        non proident, sunt in culpa qui officia deserunt mollit anim id est
                        laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit
                        esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                        cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
                        est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit
                        esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                        cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
                        est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit
                        esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                        cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
                        est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit
                        esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                        cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
                        est laborum.
                    </i>
                </p>
            </div>
            <div className="sep sep2">
                <i>Write your query</i>
            </div>
            <div className="form-container">
                <form className="forms">
                    <div className="row">
                        <div className="labels">
                            <label htmlFor="name">Name :</label>
                        </div>
                        <div className="field">
                            <input type="text" id="name" placeholder="Enter your name" />
                        </div>
                    </div>
                    <div className="row">
                        <div className="labels">
                            <label htmlFor="email">Email :</label>
                        </div>
                        <div className="field">
                            <input type="email" id="email" placeholder="Enter your Email" />
                        </div>
                    </div>
                    <div className="row equipment">
                        {/* <p className="text">
              Is your query related to a particular equipment{" "}
            </p> */}
                        <div className="question">
                            If your query related to a particular equipment
                        </div>
                        <div className="labels">
                            <label htmlFor="equipment-id">Equipment Id :</label>
                        </div>
                        <div className="field">
                            <input type="text" id="equipment-id" placeholder="Enter ID" />
                        </div>
                    </div>
                    <div className="row">
                        <div className="labels">
                            <label htmlFor="description">Description :</label>
                        </div>
                        <div className="field">
                            <textarea
                                id="description"
                                name="subject"
                                placeholder="Enter your query"></textarea>
                        </div>
                    </div>
                    <div className="row button">
                        <Button
                            variant="contained"
                            type="submit"
                            color="primary"
                            startIcon={<SendIcon />}>
                            Send
                        </Button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Home;
