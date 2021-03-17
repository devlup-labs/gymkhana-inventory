import React from 'react';
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
import Background from '../../star.jpg';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1
    },
    menuButton: {
        marginRight: theme.spacing(2)
    },
    title: {
        flexGrow: 1,
        fontFamily: 'Open Sans'
    },
    large: {
        width: theme.spacing(7),
        height: theme.spacing(7)
    }
}));

export default function ButtonAppBar() {
    const location = useLocation();
    const searchAreaHeight = location.pathname === '/' ? '50vh' : '22vh';
    const navBackgroundColor = location.pathname === '/' ? 'rgba(0,0,0,0)' : '#148FD3';

    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('xs'));
    const classes = useStyles();
    const isLoggedIn = false;
    return (
        <div className={classes.root} style={{ backgroundImage: `url(${Background})` }}>
            <AppBar position="static" style={{ backgroundColor: `${navBackgroundColor}` }}>
                <Toolbar>
                    <IconButton
                        component={Link}
                        to="/"
                        edge="start"
                        className={classes.menuButton}
                        color="inherit"
                        aria-label="home-logo">
                        <Avatar alt="semy Sharp" src={logo} />
                    </IconButton>
                    {isMobile ? (
                        <Typography variant="h6" className={classes.title}>
                            ...
                        </Typography>
                    ) : (
                        <Typography variant="h6" className={classes.title}>
                            <span className="main-title">Gymkhana-Inventory</span>
                        </Typography>
                    )}
                    {isLoggedIn ? (
                        <>
                            <Button color="secondary" variant="contained">
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
                        </>
                    ) : (
                        <GoogleSocialAuth />
                    )}
                </Toolbar>
            </AppBar>
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
                ) : (
                    <div></div>
                )}

                <form>
                    <div
                        className="search-bar"
                        style={{
                            backgroundColor: 'white',
                            width: 'max-content',
                            borderRadius: '5px'
                        }}>
                        <input
                            className="bar"
                            type="text"
                            id="search-input"
                            placeholder="Search for anything"
                            style={{
                                border: 'none',
                                backgroundColor: 'none',
                                outline: '0',
                                fontSize: '18px'
                            }}
                        />
                        <Button
                            component={Link}
                            to="/SearchPage"
                            type="submit"
                            aria-label="search"
                            className={classes.Searchbutton}
                            style={{
                                backgroundColor: '#148FD3',
                                borderRadius: '0px 5px 5px 0px',
                                textTransform: 'none'
                            }}>
                            Lets Search
                        </Button>
                    </div>
                </form>
            </div>
        </div>
    );
}
// import { Link } from 'react-router-dom';
// import logo from '../../logo.png';
// import GoogleSocialAuth from './Login';
// <div><GoogleSocialAuth /></div>
