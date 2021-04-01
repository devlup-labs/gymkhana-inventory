import axios from 'axios';

export default {
    getAllSocieties: function () {
        const config = {
            method: 'get',
            url: 'http://127.0.0.1:8000/profile/getallsocieties',
            headers: {}
        };

        const value = axios(config)
        const promise = value.then((res) => res.data)
        return promise
    },
    getEquipment: function (societyName) {
        const data = JSON.stringify({ society: societyName });

        const config = {
            method: 'get',
            url: 'http://127.0.0.1:8000/profile/getequipment',
            headers: {
                'Content-Type': 'application/json'
            },
            data: data
        };

        axios(config)
            .then((response) => {
                console.log(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
    },
    addEquipment: function (equipment) {
        const data = JSON.stringify({
            name: equipment.name,
            description: equipment.description,
            quantity: equipment.quantity,
            society: equipment.society,
            numavail: equipment.availability
        });

        const config = {
            method: 'post',
            url: 'http://127.0.0.1:8000/profile/addequipment',
            headers: {
                'Content-Type': 'application/json'
            },
            data: data
        };

        axios(config)
            .then((response) => {
                console.log(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
    },
    deleteEquipment: function (id) {
        const config = {
            method: 'delete',
            url: 'http://127.0.0.1:8000/profile/deleteequipment/' + id,
            headers: {}
        };

        axios(config)
            .then((response) => {
                console.log(JSON.stringify(response.data));
            })
            .catch((error) => {
                console.log(error);
            });
    },
    // updateEquipment: function(updates){
    //     let data = JSON.stringify({"numavail":"9","name":"lens"});

    //     let config = {
    //     method: 'put',
    //     url: 'http://127.0.0.1:8000/profile/updateequipment/1',
    //     headers: { 
    //             'Content-Type': 'application/json'
    //     },
    //     data : data
    //     };

    //     axios(config)
    //     .then((response) => {
    //     console.log(JSON.stringify(response.data));
    //     })
    //     .catch((error) => {
    //     console.log(error);
    //     });

    // },
    assignrole: function (roles) {
        const data = JSON.stringify({
            current_mail=roles.current,
            assign_mail =roles.assign_mail,
            society_id=roles.id,
            role=roles.role
        })
        const config = {
            method:'post',
            url: 'http://127.0.0.1:8000/accounts/assign-role',
            headers: {},
            data:data
        };

        axios(config)
            .then((response)=> {
                console.log(response.data);
            })
            .catch((error)=> {
                console.log(error);
            });
    },
    searchEquipment: function (text) {
        const data = JSON.stringify({
            searchText= text
        })
        const config = {
            method:'post',
            url: 'http://127.0.0.1:8000/profile/searchequipment',
            headers: {},
            data:data
        };

        axios(config)
            .then((response)=> {
                console.log(response.data);
            })
            .catch((error)=> {
                console.log(error);
            });
    },
    makeRequest: function (request) {
        const data =  JSON.stringify({
            equipmentid=request.equipmentid,
            duration=request.time,
            mailid=request.mailid
        })
        const config = {
            method:'post',
            url: 'http://127.0.0.1:8000/profile/make-request',
            headers: {},
            data:data
        };

        axios(config)
            .then((response)=> {
                console.log(response.data);
            })
            .catch((error)=> {
                console.log(error);
            });
    },
    approveRequest: function(approval){
        const data = JSON.stringify({
            code=approval.code,
            mailid=approval.mailid
        })
        const config = {
            method:'post',
            url: 'http://127.0.0.1:8000/profile/approve-request',
            headers: {},
            data:data
        };

        axios(config)
            .then((response)=> {
                console.log(response.data);
            })
            .catch((error)=> {
                console.log(error);
            });
    },
    declineRequest: function(denial){
        const data = JSON.stringify({
            code=denial.code,
            mailid=denial.mailid
        })
        const config = {
            method:'post',
            url: 'http://127.0.0.1:8000/profile/decline-request',
            headers: {},
            data:data
        };

        axios(config)
            .then((response)=> {
                console.log(response.data);
            })
            .catch((error)=> {
                console.log(error);
            });
    },
    deleteRequest: function(del) {
        const data = JSON.stringify({
            code=del.code,
            mailid=del.mailid
        })
        const config = {
            method:'post',
            url: 'http://127.0.0.1:8000/profile/delete-request',
            headers: {},
            data:data
        };

        axios(config)
            .then((response)=> {
                console.log(response.data);
            })
            .catch((error)=> {
                console.log(error);
            });
    },

    pendingReturns: function(id) {
        const data=JSON.stringify({
            borrower=id
        })
        const config = {
            method:'get',
            url: 'http://127.0.0.1:8000/profile/pendingreturns',
            headers: {},
            data:data
        };

        axios(config)
            .then((response)=> {
                console.log(response.data);
            })
            .catch((error)=> {
                console.log(error);
            });
    }
};
