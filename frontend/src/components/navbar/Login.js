import React, { Component } from 'react';
import { Grid, Button } from '@material-ui/core';
// import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import GoogleLogin from 'react-google-login';
import axios from 'axios';

const googleLogin = async (accesstoken) => {
    const res = await axios.post('http://localhost:8000/rest-auth/google/', {
        access_token: accesstoken
    });
    console.log(res);
    return await res.status;
};

class GoogleSocialAuth extends Component {
    render() {
        const responseGoogle = async (response) => {
            console.log(response);
            const googleResponse = await googleLogin(response.accessToken, response);
            console.log(googleResponse);
        };
        return (
            <Grid>
                <GoogleLogin
                    clientId="977939251531-chonan52l45f0u2um7hq6tr1vu8r5fsd.apps.googleusercontent.com"
                    render={(renderProps) => (
                        <Button variant="contained" color="secondary" onClick={renderProps.onClick}>
                            LogIn
                        </Button>
                    )}
                    buttonText="LOGIN"
                    onSuccess={responseGoogle}
                    onFailure={responseGoogle}
                />
            </Grid>
        );
    }
}

export default GoogleSocialAuth;
