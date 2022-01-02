import React from 'react';
import Header from './components/Header';
import { Heading, Title, TitleSection, Subtitle } from './components/Typography';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import './pages/Main.scss'

function App() {
  return (
    <div className="App">
      <Container>
        <Header></Header>

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
          </Grid>
        </Grid>
      </Container>
    </div >
  )
}

export default App;