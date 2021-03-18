import axios from 'axios';

export default {
    getAllSocieties: function () {
        const config = {
            method: 'get',
            url: 'http://127.0.0.1:8000/profile/getallsocieties',
            headers: {}
        };

        axios(config)
            .then((response) => {
                console.log(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
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
    }
};
