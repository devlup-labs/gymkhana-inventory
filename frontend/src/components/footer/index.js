import React from "react";
import FavoriteIcon from "@material-ui/icons/Favorite";
import logo from "../../logo.png";
import Grid from "@material-ui/core/Grid";

const Footer = () => {
  return (
    <Grid container direction="column" className="contained">
      <Grid container item className="main-footer">
        <Grid item xs={12} md={12} sm={12}>
          <div style={{ textAlign: "center" }}>
            <img id="logo-image" src={logo} alt="logo" />
          </div>
        </Grid>

        <Grid item xs={12} md={4} sm={4} className="column-1">
          <ul className="footer-list">
            <li>Gymkhana Site</li>
            <li>IIT Jodhpur Site</li>
            <li>Devlup Labs</li>
          </ul>
        </Grid>
        <Grid item xs={12} md={4} sm={4} className="column-2">
          <div>
            <div style={{ alignContent: "center" }}>
              <p>Students Gymkhana IIT Jodhpur</p>
            </div>
          </div>
        </Grid>
        <Grid item md={4} sm={4} xs={12} className="column-3">
          <p>
            <div>Indian Institute of Technology, </div>Jodhpur,Rajasthan
          </p>
        </Grid>
        <Grid
          container
          item
          className="secondary-footer"
          xs={12}
          md={12}
          sm={12}
        >
          © {new Date().getFullYear()}, made with{" "}
          <span className="heart">
            <FavoriteIcon />
          </span>{" "}
          by Devlup Labs.
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Footer;
