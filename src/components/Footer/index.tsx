import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import SvgIcon from '@mui/material/SvgIcon';
import InstagramIcon from '@mui/icons-material/Instagram';
import './style.scss'

function Copyright() {
  return (
    <Typography variant="body2">
      {'Copyright © '}
      {new Date().getFullYear()}
    </Typography>
  );
}

function VKIcon(props) {
  return (
    <SvgIcon {...props} viewBox="0 0 13 13">
      <path d="m 6.850117,10.385227 0.7185041,0 c 0,0 0.2165012,-0.0235 0.3270018,-0.142 0.1050006,-0.110501 0.1050006,-0.3150022 0.1050006,-0.3150022 0,0 -0.0155,-0.963506 0.4345025,-1.105007 0.4435025,-0.1405 1.0060057,0.930006 1.605509,1.3415082 0.458003,0.314502 0.802505,0.247001 0.802505,0.247001 l 1.605508,-0.022 c 0,0 0.841005,-0.0525 0.443503,-0.7130042 -0.0305,-0.0525 -0.225501,-0.487502 -1.185507,-1.380008 -1.006005,-0.930505 -0.871004,-0.780504 0.338002,-2.393513 0.734504,-0.982506 1.035006,-1.583009 0.937505,-1.838011 -0.083,-0.240001 -0.630003,-0.180501 -0.630003,-0.180501 l -1.80101,0.0155 c 0,0 -0.135001,-0.0155 -0.232501,0.045 -0.0975,0.0595 -0.157001,0.195501 -0.157001,0.195501 0,0 -0.2860018,0.764504 -0.668004,1.410008 -0.8115046,1.364509 -1.1340064,1.439509 -1.2615072,1.349509 -0.3020017,-0.195502 -0.2245012,-0.790005 -0.2245012,-1.216007 0,-1.320508 0.2020011,-1.875011 -0.3905022,-2.017512 -0.1950012,-0.0455 -0.340502,-0.075 -0.8425048,-0.083 -0.6450037,-0.007 -1.1890068,0.005 -1.4975085,0.155501 -0.2025012,0.1015 -0.3600021,0.326001 -0.2695016,0.337501 0.1200007,0.015 0.3895022,0.073 0.532003,0.268502 0.1875011,0.253001 0.1795011,0.818005 0.1795011,0.818005 0,0 0.1055006,1.558009 -0.2470014,1.75151 -0.2475014,0.131 -0.5775033,-0.140001 -1.2975074,-1.378008 -0.3675021,-0.630004 -0.6455037,-1.335008 -0.6455037,-1.335008 0,0 -0.0525,-0.128001 -0.1495008,-0.203001 -0.1135007,-0.0825 -0.2785016,-0.112501 -0.2785016,-0.112501 l -1.7175097,0.015 c 0,0 -0.2550015,0.008 -0.344502,0.120001 -0.0830004,0.0975 -0.008,0.307502 -0.008,0.307502 0,0 1.3430076,3.143518 2.8660162,4.726527 C 5.292108,10.506228 6.875117,10.412727 6.875117,10.412727 l -0.025,-0.0275 z" />
    </SvgIcon>
  );
}

export default function StickyFooter() {
  return (
    <footer className='footer'>
      {/* <Grid container justifyContent="center">
          <Typography variant="button" textAlign="center">
            My sticky footer can be found here
          </Typography>
        </Grid> */}

      <div className="footer__copyright">
        <Copyright />
      </div>

      <div className="footer__icons">
        <Link className="footer__icon" color="inherit" href='https://www.instagram.com/ghg_h_d_j_hd_fj_dc_b_dc_c'>
          <InstagramIcon />
        </Link>

        <Link className="footer__icon" color="inherit" href='https://vk.com/andreifrosh'>
          <VKIcon />
        </Link>
      </div>
    </footer>
  )
}