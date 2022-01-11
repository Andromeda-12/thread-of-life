import React from "react";
import Grid from '@mui/material/Grid';
import { Heading, Title, TitleSection, Subtitle } from '../components/Typography';
import Button from "../components/Button";
import { Link } from 'react-router-dom'

const Main = () => {
  return (
    <Grid container justifyContent="center" alignItems="center">
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

        <Grid container style={{ marginTop: 20 }} justifyContent="center">
          <Link to="/sign-in">
            <Button>Let's start!</Button>
          </Link>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Main