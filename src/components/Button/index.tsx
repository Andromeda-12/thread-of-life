import React, { FC } from 'react';
import MUIButton, { ButtonProps }  from '@mui/material/Button';
import './Button.scss'

const Button: FC<ButtonProps> = ({ children }) => (
  <MUIButton className='button' variant="outlined">
    { children }
  </MUIButton>
)

export default Button