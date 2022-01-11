import { Grid } from "@mui/material";
import { FC } from "react";
import ThemeChanger from '../components/ThemeChanger'

const Settings: FC = () => (
  <Grid container justifyContent="center" alignContent="center" sx={{ height: 'calc(100vh - 190px);' }}>
    <Grid item xs={8}>
      <ThemeChanger />
    </Grid>
  </Grid>
)

export default Settings