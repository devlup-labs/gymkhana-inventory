import React, { Component } from "react";
import { Grid, Paper, Avatar} from "@material-ui/core";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import GoogleLogin from "react-google-login";
import axios from "axios";

const googleLogin = async (accesstoken) => {
    let res = await axios.post(
      "http://localhost:8000/rest-auth/google/",
      {
        access_token: accesstoken,
      }
    );
    console.log(res);
    return await res.status;
  };


class GoogleSocialAuth extends Component {
  render() {
    const responseGoogle = async (response) => {
      console.log(response);
      let googleResponse = await googleLogin(response.accessToken, response);
      console.log(googleResponse);
      //
    };
    const paperStyle = {
      padding: 20,
      heignt: "70px",
      width: 280,
      margin: " 20px auto",
      backgroundColor: "#f9f7f7",
    };

    const avatarStyle = {
      backgroundColor: "#3f72af",
    };
    return (
      <Grid>
        <Paper elevation={10} style={paperStyle}>
          <Grid align="center">
            <Avatar style={avatarStyle}>
              <LockOutlinedIcon />
            </Avatar>
            <h2>Sign in</h2>
          </Grid>

          <Grid align="center">
            <GoogleLogin 
              clientId="977939251531-chonan52l45f0u2um7hq6tr1vu8r5fsd.apps.googleusercontent.com"
              buttonText="LOGIN WITH GOOGLE"
              onSuccess={responseGoogle}
              onFailure={responseGoogle}
            />
          </Grid>
        </Paper>
      </Grid>
    );
  }
}

export default GoogleSocialAuth;
