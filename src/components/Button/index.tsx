import React, { FC } from 'react';
import MUIButton from '@mui/material/Button';
import { SxProps } from '@mui/system'
import './Button.scss'

interface ButtonProps {
  children: React.ReactNode,
  className?: string,
  fullWidth?: boolean,
  rounded?: boolean,
  text?: boolean,
  type?: "button" | "submit" | "reset" | undefined,
  sx?: SxProps,
}

const Button: FC<ButtonProps> = ({ children, className, fullWidth, rounded, text, type, sx }) => {
  const classes = ['button']

  if (rounded) classes.push('button_rounded')
  if (text) classes.push('button_text')
  if (className) classes.push(className)

  return (
    <MUIButton
      className={classes.join(' ')}
      variant='outlined'
      fullWidth={fullWidth}
      type={type}
      sx={sx}
    >
      {children}
    </MUIButton>
  )
}

export default Button