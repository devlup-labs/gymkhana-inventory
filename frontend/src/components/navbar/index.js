import React ,{useState}from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import AccountCircle from '@material-ui/icons/AccountCircle';
import GoogleSocialAuth from './Login';
import Avatar from '@material-ui/core/Avatar';
import logo from '../../logo.png';
import Tooltip from '@material-ui/core/Tooltip';
import { Link, useLocation } from 'react-router-dom';
import useMediaQuery from '@material-ui/core/useMediaQuery';

import {useGlobalStore} from '../../contextProviders/globalContext';
import shadows from '@material-ui/core/styles/shadows';


const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        backgroundImage: `linear-gradient(rgba(0,0,0,0.25),rgba(0,0,0,0.25)), url('https://cdn.pixabay.com/photo/2021/02/13/13/02/red-lighthouse-6011477_1280.jpg')`,
        backgroundRepeat:`no-repeat`,
        backgroundSize: `cover`,
        backgroundPosition:'center'
    },
    menuButton: {
        marginRight: theme.spacing(2)
    },
    title: {
        flex: 1,
        fontFamily: 'Open Sans'
    },
    large: {
        width: theme.spacing(7),
        height: theme.spacing(7)
    },
    SearchButton: {
        padding: '10px',
        backgroundColor: "#148FD3",
        color:"#FFF",
    },
    toolbar:{
        display:"flex",
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"space-between"
    }
}));

export default function ButtonAppBar() {
    const location = useLocation();
    const searchAreaHeight = location.pathname === '/' ? '70vh' : '35vh';
    const navBackgroundColor = location.pathname === '/' ? 'rgba(0,0,0,0)' : '#FFF';
    const brandFont = location.pathname === '/' ? '#FFF' : '#222';
    const shadow = location.pathname === '/' ? 'none' : '0px 2px 15px 1px #777';


    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('xs'));
    const classes = useStyles();
    const isLoggedIn = false;

    const [value, setValue] = useState("")
    const [searchDisable, setSearchDisable] = useState(false)
    const globalStore = useGlobalStore()

    return (
        <div className={classes.root} >
            <AppBar position="static" style={{ backgroundColor: `${navBackgroundColor}`, boxShadow:`${shadow}`}} >
                <Toolbar className={classes.toolbar}>
                    <div className="navbar-brand">
                        <IconButton
                            component={Link}
                            to="/"
                            edge="start"
                            className={classes.menuButton}
                            color="inherit"
                            aria-label="home-logo">
                        <Avatar alt="semy Sharp" src={logo} />
                        </IconButton>
                        <div>
                            {isMobile ? null : (
                                <Typography variant="h6" className={classes.title}>
                                    <span className="main-title" style={{color:`${brandFont}`}}>Gymkhana-Inventory</span>
                                </Typography>
                            )}
                        </div>
                    </div>
                    {isLoggedIn ? (
                        <div className="login-button">
                            <Button className={classes.SearchButton} variant="contained">
                                Logout
                            </Button>
                            <Tooltip title="Profile">
                                <IconButton
                                    component={Link}
                                    to="/profile"
                                    aria-label="account of current user"
                                    aria-controls="menu-appbar"
                                    aria-haspopup="true"
                                    color="inherit">
                                    <AccountCircle />
                                </IconButton>
                            </Tooltip>
                        </div>
                    ) : (
                        <GoogleSocialAuth />
                    )}
                </Toolbar>
            </AppBar>
            {
                location.pathname ==='/' || location.pathname ==='/SearchPage'  ? (
                    <div
                        className="search-area"
                        style={{
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'center',
                            height: `${searchAreaHeight}`,
                            alignItems: 'center',
                            width: '100%',
                            backgroundRepeat: 'no-repeat',
                            backgroundSize: 'cover',
                            backgroundPosition: 'center'
                        }}>
                        {location.pathname === '/' ? (
                                <div className="texts" style={{ textAlign: 'center', color: 'white' }}>
                                    <h2 id="heading" style={{ textAlign: 'center' }}>
                                        Search for Equipments
                                    </h2>
                                    <p>Everything at one place</p>
                                </div>
                            ) :
                            null
                        }
                        <form className="search-bar-form">
                            <div className="search-bar">
                                <input
                                    className="bar"
                                    type="text"
                                    id="search-input"
                                    placeholder="Search for anything"
                                    style={{
                                        border: 'none',
                                        backgroundColor: 'white',
                                        outline: '0',
                                        // fontSize: '18px',
                                    }}
                                    onChange={(e)=> {
                                        setValue(e.target.value);
                                        if(e.target.value !== ""){
                                            setSearchDisable(false)
                                        }
                                    }}
                                    value={value}
                                />
                                <Button
                                    component={Link}
                                    to="/SearchPage"
                                    type="submit"
                                    aria-label="search"
                                    className={classes.SearchButton}
                                    style={{
                                        backgroundColor: '#148FD3',
                                        borderRadius: '0px 5px 5px 0px',
                                        textTransform: 'none'
                                    }}

                                    disabled={searchDisable}
                                    onClick={()=>{
                                        if(value !== ""){
                                            globalStore.searchfunction(value)
                                            console.log(value)
                                            setValue("")
                                        }
                                    }}
                                >
                                    Lets Search
                                </Button>
                            </div>
                        </form>
                    </div>
                ) : null
            }

        </div>
    );
}
