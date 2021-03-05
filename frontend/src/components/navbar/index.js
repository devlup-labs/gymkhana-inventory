import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
// import MenuIcon from '@material-ui/icons/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';
import GoogleSocialAuth from './Login';
import Avatar from '@material-ui/core/Avatar';
import logo from '../../logo.png';
import Tooltip from '@material-ui/core/Tooltip';
import { Link } from 'react-router-dom';
import useMediaQuery from '@material-ui/core/useMediaQuery';

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
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('xs'));
    const classes = useStyles();
    const isLoggedIn = false;
    return (
        <div className={classes.root}>
            <AppBar position="static" color="primary">
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
        </div>
    );
}
// import { Link } from 'react-router-dom';
// import logo from '../../logo.png';
// import GoogleSocialAuth from './Login';
// <div><GoogleSocialAuth /></div>
