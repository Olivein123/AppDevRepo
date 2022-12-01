import { Container, Paper, Typography } from "@mui/material";

type ContainerProps = {
    children: React.ReactNode;
}

export default function ContentContainer(props:ContainerProps) {
    const paperStyle = { padding: '25px' , margin:'40px'}

    return (
        <Container>
            <Paper elevation={3} style={paperStyle}>
                {props.children}
            </Paper>

        </Container >
       
        ); 

}