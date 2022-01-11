import { FC } from "react";
import Container from '@mui/material/Container';
import { Link } from 'react-router-dom'
import Button from "../components/Button";

const NoMatch: FC = () => (
  <Container component="main" sx={{ height: 'calc(100vh - 190px)' }}>
    <div style={{ textAlign: 'center' }}>
      <h2>Nothing to see here!</h2>
      <p>
        <Link to="/">
          <Button>Go to the home page</Button>
        </Link>
      </p>
    </div>
  </Container >
)

export default NoMatch