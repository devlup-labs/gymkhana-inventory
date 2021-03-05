import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import { CardMedia } from '@material-ui/core';

const useStyles = makeStyles({
    card: {
        display: 'flex',
        borderRadius: '10px'
    },
    cardDetails: {
        flex: 1,
        maxHeight: '200px'
    },
    cardMedia: {
        width: 175,
        paddingBottom: '0px',
        paddingRight: '15px',
        borderRight: '2px solid #148FD3'
    }
});

const items = [
    {
        id: 1,
        available: 4,
        title: 'A red image',
        society: 'pclub',
        url: 'https://via.placeholder.com/600/92c952',
        desc:
            'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of'
    },
    {
        id: 2,
        available: 0,
        title: 'A blue image',
        society: 'pclub',
        url: 'https://via.placeholder.com/600/771796',
        desc:
            'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of'
    },
    {
        id: 3,
        available: 2,
        title: 'A green image',
        society: 'pclub',
        url: 'https://via.placeholder.com/600/24f355',
        desc:
            'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of'
    },
    {
        id: 4,
        available: 0,
        title: 'A black image',
        society: 'pclub',
        url: 'https://via.placeholder.com/600/d32776',
        desc:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus consectetur quis purus sit amet pellentesque. '
    }
];

function ItemList() {
    const classes = useStyles();
    const listItems = items.map((item) => (
        <Grid
            item
            xs={12}
            md={12}
            key={item.id}
            style={{
                paddingTop: '10px',
                paddingLeft: '50px',
                borderLeft: '2px solid #A9A9A9'
            }}>
            <CardActionArea component="a">
                <Card className={classes.card} elevation={4}>
                    <CardContent>
                        <CardMedia
                            square
                            component="img"
                            src={item.url}
                            className={classes.cardMedia}
                        />
                    </CardContent>
                    <div className={classes.cardDetails}>
                        <CardContent>
                            <Typography
                                variant="h5"
                                style={{ fontWeight: '550', fontStyle: 'italic' }}>
                                {item.title}
                            </Typography>

                            <Typography
                                variant="subtitle1"
                                style={{ color: '#585858', fontStyle: 'italic' }}>
                                Belongs to: {item.society}
                            </Typography>
                            <Typography
                                style={{
                                    fontWeight: '200',
                                    color: item.available > 0 ? '#00B212' : '#ff0000'
                                }}>
                                {' '}
                                Availablity: {item.available > 0 ? 'YES' : 'NO'}
                            </Typography>
                            <Typography
                                variant="subtitle1"
                                paragraph
                                textOverflow="ellipsis"
                                style={{
                                    marginBottom: '0px',
                                    color: '#585858',
                                    overflow: 'hidden',
                                    textOverflow: 'ellipsis'
                                }}>
                                {item.desc}
                            </Typography>
                        </CardContent>
                    </div>
                </Card>
            </CardActionArea>
        </Grid>
    ));

    listItems.push(
        <div>
            <Card elevation={0} style={{ padding: '100px' }}>
                <Typography
                    variant="h6"
                    style={{ fontStyle: 'italic', color: '#585858' }}
                    align="center">
                    {' '}
                    Looks like you have browsed all the results ....{' '}
                </Typography>
            </Card>
        </div>
    );
    return <div>{listItems}</div>;
}

export default ItemList;
