import React from 'react';
import FavoriteIcon from '@material-ui/icons/Favorite';
import logo from '../../logo.png';
import Grid from '@material-ui/core/Grid';

const Footer = () => {
    return (
        <Grid container direction="column" className="contained">
            <Grid container item className="main-footer">
                <Grid item xs={12} md={4} sm={4} className="column-1">
                    <h4>FIND US AT</h4>
                    <ul className="footer-list">
                        <li>Text 1</li>
                        <li>Text 2</li>
                        <li>Text 3</li>
                    </ul>
                </Grid>
                <Grid item xs={12} md={4} sm={4} className="column-2">
                    <img id="logo-image" src={logo} alt="logo"></img>
                </Grid>
                <Grid item md={4} sm={4} xs={12} className="column-3">
                    <h4>INDIAN INSTITUTE OF TECHNOLOGY, JODHPUR</h4>
                    <p>NH 65, Surpura Bypass Rd Karwar, Rajasthan 342037</p>
                </Grid>
                <Grid container item className="secondary-footer" xs={12} md={12} sm={12}>
                    © {new Date().getFullYear()}, made with{' '}
                    <span className="heart">
                        <FavoriteIcon />
                    </span>{' '}
                    by Devlup Labs.
                </Grid>
            </Grid>
        </Grid>
    );
};

export default Footer;
