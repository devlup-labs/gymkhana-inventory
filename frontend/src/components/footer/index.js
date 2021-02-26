import React from 'react';
import FavoriteIcon from '@material-ui/icons/Favorite';
import logo from '../../logo.png';

const Footer = () => {
    return (
        <div className="contained">
            <div className="main-footer">
                <div className="column-1">
                    <h3>FIND US AT</h3>
                    <ul className="footer-list">
                        <li>Text 1</li>
                        <li>Text 2</li>
                        <li>Text 3</li>
                    </ul>
                </div>

                <div className="column-2">
                    <img src={logo} alt="Logo here"></img>
                </div>

                <div className="column-3">
                    <h3>INDIAN INSTITUTE OF TECHNOLOGY, JODHPUR</h3>
                    <p>NH 65, Surpura Bypass Rd Karwar, Rajasthan 342037</p>
                </div>
            </div>
            <div className="secondary-footer">
                © {new Date().getFullYear()}, made with{' '}
                <span className="heart">
                    <FavoriteIcon />
                </span>{' '}
                by Devlup Labs.
            </div>
        </div>
    );
};

export default Footer;
