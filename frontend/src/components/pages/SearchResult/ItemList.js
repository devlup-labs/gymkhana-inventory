import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import { CardMedia } from '@material-ui/core';
import {useEquipmentStore} from '../../../contextProviders/equipmentContext';

const useStyles = makeStyles({
    card: {
        display: 'flex',
        borderRadius: '10px',
        alignItems:'center'
    },
    cardDetails: {
        flex: 1,
        height: '300px',
        display:'flex',
        alignItems:'center'
    },
    cardMedia: {
        width: '30%',
        paddingBottom: '0px',
        paddingRight: '15px',
        borderRight: '2px solid #148FD3'
    }
});

// id: 2,
//     available: 0,
//     title: 'A blue image',
//     society: 'pclub',
//     url: 'https://via.placeholder.com/600/771796',
//     desc:


function ItemList() {
    const equipmentStore = useEquipmentStore()
    const classes = useStyles();
    return (
        <div className="search-results">
            {equipmentStore.items.map((item,index) => {
                return(
                    <div className="item-card">
                        <div className="item-image">
                            <img src={item.url}/>
                        </div>
                        <div className="item-details">
                            <h4>{item.title}</h4>
                            <h6>Belongs to : {item.society}</h6>
                            <p>{item.available}</p>
                            <p>{item.desc}</p>
                        </div>
                    </div>
                )
            }
            )}
            <h6>Looks like you have browsed all the results ....</h6>
        </div>
    )
}

export default ItemList;
