import { Container } from "@mui/material";
import React, { FC } from "react";
import ThemeChanger from '../components/ThemeChanger'

const Settings: FC = () => (
  <Container sx={{ minHeight: 'calc(100vh - 189px);' }}>
    <ThemeChanger />
  </Container>
)

export default Settings