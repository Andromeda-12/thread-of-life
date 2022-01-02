import React, { FC } from 'react';
import Typography, { TypographyProps } from '@mui/material/Typography';
import './Heading.scss'

const Heading: FC<TypographyProps> = ({ children }) => (
  <Typography className='heading' variant="h3" gutterBottom>
    {children}
  </Typography>
)

export default Heading