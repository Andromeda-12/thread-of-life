import React from "react";
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import { Heading, Title, TitleSection, Subtitle } from '../components/Typography';
import Button from "../components/Button";

export default () => {
  return (
    <Container>
      <Grid container sx={{ height: '70vh' }} justifyContent="center" alignItems="center">
        <Grid item textAlign="center">
          <Heading>
            Thread of life
          </Heading>

          <Title>
            Show your <TitleSection>life</TitleSection>
          </Title>

          <Subtitle>
            These are web applications where you can save, describe and share your best moments from your life!
          </Subtitle>

          <Grid container style={{marginTop: 20}} justifyContent="center">
            <Button>Let's start!</Button>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};