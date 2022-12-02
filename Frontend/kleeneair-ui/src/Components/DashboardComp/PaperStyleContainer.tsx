import { Container, Paper, Typography } from "@mui/material";

type ContainerProps = {
    headings: string, 
    children: React.ReactNode;
}

export default function ContentContainer(props:ContainerProps) {
    const paperStyle = {padding: '35px' , margin:'40px' }

    return (
        <Container className="paperEffect" maxWidth={false}>
            <Typography align="left" variant="h6" sx={{ mt: 5, mb: -4, ml: 5 }}>{props.headings}</Typography>
            <Paper elevation={5} style={paperStyle }>
                {props.children}
            </Paper>

        </Container >
       
        ); 

}