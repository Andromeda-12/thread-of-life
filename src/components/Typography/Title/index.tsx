import React, { FC } from 'react';
import Typography, { TypographyProps } from '@mui/material/Typography';
import './Title.scss'

const Title: FC<TypographyProps> = ({ children }) => (
  <Typography className='title' variant="h4" gutterBottom>
    {children}
  </Typography>
)

export default Title