import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Grid } from '@mui/material';

export interface CardInformation {
    sitename: string; 
    image: string;
    address: string;
    alttext: string; 
}



export default function CardList(props: CardInformation) {
    return (
            <Card  sx={{ maxWidth: 265, minWidth: 150,  justifyContent: 'center', display:'inline-block', mr: 2, ml: 2 ,mb: 2 }}>
                <CardMedia
                    component="img"
                    height="140"
                    image={props.image}
                    alt={props.alttext}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {props.sitename}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {props.address}
                    </Typography>
                </CardContent>
                <CardActions>
                <Button size="small" sx={{ ml:2, mt:2, mb:2 , width: "50%", background: '#2656FF' }} variant="contained">Book Now</Button>
                </CardActions>
            </Card>
    );
}