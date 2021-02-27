import React from "react";
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
import IITJ from '../../IITJ.png'
import { Link } from 'react-router-dom';


const useStyles = makeStyles((theme) => ({
 Searchbutton: {
    padding:"10px",
    marginBottom:"3px"
    },
  Gridcontainer:{
    marginTop:"5px"
  }  

  }
));

 function Home(){

    //  -------Fake Data -------

    const data= [
      { 
        id:1,
        name: "Product 1",
        description: "A paragraph is a self-contained unit of discourse in writing dealing with a particular point or idea. A paragraph consists of one or more sentences.",
      },
      { 
        id:2,
        name: "Product 2",
        description: "A paragraph is a self-contained unit of discourse in writing dealing with a particular point or idea. A paragraph consists of one or more sentences.",
      },
      { 
        id:3,
        name: "Product 3",
        description: "A paragraph is a self-contained unit of discourse in writing dealing with a particular point or idea. A paragraph consists of one or more sentences.",
      },
      { 
        id:4,
        name: "Product 4",
        description: "A paragraph is a self-contained unit of discourse in writing dealing with a particular point or idea. A paragraph consists of one or more sentences.",
      }
    ]

    // ---------xxxx--------
     const classes = useStyles();
    return (
      <div className="container home">
        <div className="search-area">
          <div className="texts">
            <h2 id="heading">Search for Equipments</h2>
            <p>Cameras, Microphone, camcoders everything at on place</p>
          </div>
          <div className="search-bar">
            <form>
          <input classname="bar" type="text" placeholder="Search for equipments"/>
          <IconButton type="submit" aria-label="search" className={classes.Searchbutton}>
              <SearchIcon />
          </IconButton>
          </form>
          </div>\
          </div>
          <Grid container spacing={3}>
         {data.map(item => {
            return (
              <Grid item xs={12} sm={6} md={3} className={classes.Gridcontainer}>
              <Card className={classes.root} key={item.id}>
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
                  <Typography variant="body2" color="textSecondary" component="p">
                      {item.description}
                  </Typography>
                  </CardContent>
              </CardActionArea>
              <CardActions>
                  <Button  component={ Link} to="/itempage" size="small" color="primary">
                  Item Page
                  </Button>
                  <Button size="small" color="primary">
                  Request
                  </Button>
              </CardActions>
          </Card>
          </Grid>
            )
         })}
       
       </Grid>
        
      </div>
    );
  }


export default Home;