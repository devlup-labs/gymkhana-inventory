import React from "react";
import "../../../App.css";

export default function User() {
    return (
        <div className="user_profile_page">
            {/* <div className="user_header">
                <p>Header</p>
            </div> */}
            <div className="user_page">
                <div className="personal_info">
                    <img
                        width="200px"
                        src="https://cdn1.iconfinder.com/data/icons/technology-devices-2/100/Profile-512.png"
                    />
                    <div className="user_contact">
                        <p>Contact</p>
                        <p> mo no.</p>
                        <p>Social (if)</p>
                        <button className="btn btn-primary edit_info_btn">Edit</button>
                    </div>
                </div>
                <div className="vl" />
                <div className="main_info">
                    <div className="college_info">
                        <p>Name of Person</p>
                        <p>Roll no.</p>
                        <p>College Address</p>
                    </div>

                    <div className="active_user_items">
                        <p>Active</p>
                        <div className="list_active_user_items">
                            <pre className="tab">Item_name               Issue_date:             Return_date:              Due_date: </pre>
                        </div>
                        <div className="list_active_user_items">
                            <pre className="tab">Item_name               Issue_date:             Return_date:              Due_date: </pre>
                        </div>
                        <div className="list_active_user_items">
                            <pre className="tab">Item_name               Issue_date:             Return_date:              Due_date: </pre>
                        </div>
                        <div className="list_active_user_items">
                            {/* <p>Text</p> */}
                            <pre className="tab">Item_name               Issue_date:             Return_date:              Due_date: </pre>
                        </div>
                    </div>

                    <div className="past_user_items">
                        <p>Past History</p>
                        {/* <div className="list_past_user_items"> */}
                        <div className="list_active_user_items">
                            <pre className="tab">Item_name               Issue_date:             Return_date:              Due_date: </pre>
                        </div>
                        <div className="list_active_user_items">
                            <pre className="tab">Item_name               Issue_date:             Return_date:              Due_date: </pre>
                        </div>
                        <div className="list_active_user_items">
                            <pre className="tab">Item_name               Issue_date:             Return_date:              Due_date: </pre>
                        </div>
                        <div className="list_active_user_items">
                            {/* <p>Text</p> */}
                            <pre className="tab">Item_name               Issue_date:             Return_date:              Due_date: </pre>
                        </div>
                    </div>
                </div>
            </div>

            {/* <div className="user_footer">
                <p>Footer</p>
            </div> */}
        </div>
    );
}