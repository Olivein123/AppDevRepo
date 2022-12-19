
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export interface CardInformation {
    sitename: string;
    siteid: number; 
    image: string;
    address: string;
    alttext: string; 
}



export default function CardList(props: CardInformation) {
    return (
        <Card sx={{ maxWidth: 250, minWidth: 150,  justifyContent: 'center', display:'inline-block', mr: 2, ml: 2 ,mb: 2 }}>
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

                    <Typography variant="subtitle1" color="text.secondary">
                        Site ID: {props.siteid}
                    </Typography>

                    <Typography variant="body2" color="text.secondary">
                        Address: {props.address}
                    </Typography>
                </CardContent>
                <CardActions>
                
                </CardActions>
            </Card>
    );
}


//<Button size="small" sx={{ ml:2, mt:2, mb:2 , width: "50%", background: '#2656FF' }} variant="contained">Book Now</Button>