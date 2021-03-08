import React, { useState } from 'react';
import { Button, Grid } from '@material-ui/core';

function User() {
    const [contact, setContact] = useState('contact');

    // Donot touch this
    const [edit, setEdit] = useState('edit');
    const [save, setSave] = useState('save');
    console.log(save);
    function editButton() {
        if (edit === 'edit') {
            setEdit('save');
            setSave('edit');
        } else {
            setEdit('edit');
            setSave('save');
        }
    }

    function changeContact(e) {
        setContact(e.target.value);
    }

    return (
        <React.Fragment>
            <Grid className="user_profile_page">
                <Grid className="user_profile">
                    <Grid>
                        <img
                            src="https://library.elementor.com/wp-content/uploads/2017/06/3-4.png"
                            alt="Images"
                        />
                    </Grid>
                    <Grid className="user_information">
                        <Grid className={save}>
                            <p className="user_inf">
                                Name: <span>Elon Musk</span>
                            </p>
                            <p className="user_inf">
                                Email: <span>elonmusk@tesla.com</span>
                            </p>
                            <p className="user_inf">
                                Contact: <span>{contact}</span>
                            </p>
                            <p className="user_inf">
                                Role: <span>Student</span>
                            </p>
                        </Grid>
                    </Grid>
                    <Grid className={edit}>
                        <form>
                            <input
                                type="text"
                                placeholder={`type new contact`}
                                onChange={changeContact.bind()}></input>
                        </form>
                    </Grid>
                    <Button className="edit_info_btn" onClick={editButton}>
                        {edit}
                    </Button>
                </Grid>
                <Grid className="user_transactions">
                    <Grid className="user_trans_heading">
                        <span>Active Request</span>
                    </Grid>
                    <Grid className="user_request_content">
                        <Grid className="user_active_request">
                            <Grid className="imges">
                                <img
                                    src="https://i.pcmag.com/imagery/reviews/05KU5NmyTcDrIOcF9n5F2vz-30..1569479607.jpg"
                                    alt="Photos"
                                />
                            </Grid>
                            <Grid className="user_item_info">
                                <h2 className="heading">Nikkon Cameron</h2>
                                <p className="item-details">
                                    Belongs to: <span>Shutterbugs</span>
                                </p>
                                <p className="item-details">
                                    Issuees on: <span>30/02/2021</span>
                                </p>
                                <p className="item-details">
                                    Description:
                                    <span>Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum</span>
                                </p>
                                <p className="item-details">
                                    <b>
                                        Deadline: <span>30/02/2022</span>
                                    </b>
                                </p>
                                <button type="button">Request Extension</button>
                            </Grid>
                        </Grid>
                        <Grid className="user_active_request">
                            <Grid className="imges">
                                <img
                                    src="https://cdn.mos.cms.futurecdn.net/vpfqJBE9TjGpsbjdNBurQX.jpg"
                                    alt="Photos"
                                />
                            </Grid>
                            <Grid className="user_item_info">
                                <h2 className="heading">Nikkon Cameron</h2>
                                <p className="item-details">
                                    Belongs to: <span>Shutterbugs</span>
                                </p>
                                <p className="item-details">
                                    Issuees on: <span>30/02/2021</span>
                                </p>
                                <p className="item-details">
                                    Description:
                                    <span>
                                        Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum
                                        Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum
                                        Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum
                                    </span>
                                </p>
                                <p className="item-details">
                                    <b>
                                        Deadline: <span>30/02/2022</span>
                                    </b>
                                </p>
                                <button type="button">Request Extension</button>
                            </Grid>
                        </Grid>
                        <Grid className="user_active_request">
                            <Grid className="imges">
                                <img
                                    src="https://images.livemint.com/rf/Image-621x414/LiveMint/Period2/2018/08/24/Photos/Technology/z7-ksgF--621x414@LiveMint.PNG"
                                    alt="Photos"
                                />
                            </Grid>
                            <Grid className="user_item_info">
                                <h2 className="heading">Nikkon Cameron</h2>
                                <p className="item-details">
                                    Belongs to: <span>Shutterbugs</span>
                                </p>
                                <p className="item-details">
                                    Issuees on: <span>30/02/2021</span>
                                </p>
                                <p className="item-details">
                                    Description:
                                    <span>Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem</span>
                                </p>
                                <p className="item-details">
                                    <b>
                                        Deadline: <span>30/02/2022</span>
                                    </b>
                                </p>
                                <button type="button">Request Extension</button>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </React.Fragment>
    );
}

export default User;
