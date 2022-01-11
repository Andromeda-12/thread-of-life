import { FC } from "react";
import { Container, Grid } from "@mui/material";
import Header from '../components/Header';
import Footer from '../components/Footer'

const DefayultLayout: FC = ({ children }) => (
  <Container>
    <Header />

    <Grid
      component="main"
      container
      justifyContent="center"
      alignContent="center"
      sx={{ height: `calc(100vh - 190px);` }}
    >
      <Grid item xs={12}>
        {children}
      </Grid>
    </Grid>

    <Footer />
  </Container>
)

export default DefayultLayout