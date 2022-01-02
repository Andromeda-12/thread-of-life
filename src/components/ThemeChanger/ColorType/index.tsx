import React, { FC, useState, useEffect } from 'react';
import ButtonGroup from '@mui/material/ButtonGroup';
import Button from '@mui/material/Button';
import Color from '../Color'

interface IColorTypeProps {
  currentColorType: string,
  choiceColorType: (choisedColor: Color) => void;
}

const ColorType: FC<IColorTypeProps> = ({ currentColorType, choiceColorType }) => {
  return (
    <ButtonGroup size="large" variant="outlined" orientation="vertical">
      <Button
        className="theme-button"
        variant={currentColorType === Color.Primary ? "contained" : 'outlined'}
        onClick={() => choiceColorType(Color.Primary)}
      >
        Primary
      </Button>

      <Button
        className="theme-button"
        variant={currentColorType === Color.Secondary ? "contained" : 'outlined'}
        onClick={() => choiceColorType(Color.Secondary)}
      >
        Secondary
      </Button>

      <Button
        className="theme-button"
        variant={currentColorType === Color.Text ? "contained" : 'outlined'}
        onClick={() => choiceColorType(Color.Text)}
      >
        Text
      </Button>
    </ButtonGroup>
  )
}

export default ColorType