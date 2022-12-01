import { Container, Paper, Typography } from "@mui/material";

type ContainerProps = {
    children: React.ReactNode;
}

export default function ContentContainer(props:ContainerProps) {
    const paperStyle = { width:'100%', padding: '65px 50px', margin: "40px", justifyContent: "space-evenly", display: "inline-block" }

    return (
        <Container>
            <Paper elevation={3} style={paperStyle}>
                {props.children}
            </Paper>

        </Container >
       
        ); 

}