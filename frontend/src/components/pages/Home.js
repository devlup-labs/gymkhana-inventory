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

const useStyles = makeStyles((theme) => ({
    Searchbutton: {
        padding: '10px',
        marginBottom: '3px'
    },
    Gridcontainer: {
        marginTop: '5px',
        padding: '5px'
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

                <div className="search-bar">
                    <form>
                        <input className="bar" type="text" placeholder="Search for equipments" />
                        <IconButton
                            component={Link}
                            to="/SearchPage"
                            type="submit"
                            aria-label="search"
                            className={classes.Searchbutton}>
                            <SearchIcon />
                        </IconButton>
                    </form>
                </div>
            </div>
            <div className="sep">
                <i>Every moment is a fresh beginning. – T.S Eliot</i>
            </div>
            <Grid container>
                {data.map((item) => {
                    return (
                        <Grid
                            key={item.id}
                            item
                            xs={12}
                            sm={6}
                            md={3}
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
            <div className="separator">
                <div className="septext">View more</div>
            </div>
            <div className="quotes">
                <h3>
                    <i>“Believe you can and you’re halfway there.” -Theodore Roosevelt</i>
                </h3>
            </div>
            <div className="rules">
                <h3>Rules to Follow</h3>
                <p>
                    <i>
                        Contrary to popular belief, Lorem Ipsum is not simply random text. It has
                        roots in a piece of classical Latin literature from 45 BC, making it over
                        2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney
                        College in Virginia, looked up one of the more obscure Latin words,
                        consectetur, from a Lorem Ipsum passage, and going through the cites of the
                        word in classical literature, discovered the undoubtable source. Lorem Ipsum
                        comes from sections 1.10.32 and 1.10.33 of de Finibus Bonorum et Malorum
                        (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a
                        treatise on the theory of ethics, very popular during the Renaissance. The
                        first line of Lorem Ipsum, Lorem ipsum dolor sit amet.., comes from a line
                        in section 1.10.32. The standard chunk of Lorem Ipsum used since the 1500s
                        is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from
                        de Finibus Bonorum et Malorum by Cicero are also reproduced in their exact
                        original form, accompanied by English versions from the 1914 translation by
                        H. Rackham.
                    </i>
                </p>
            </div>
            <div className="sep sep2">
                <i>Write your query</i>
            </div>
        </div>
    );
}

export default Home;
