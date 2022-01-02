import React, { FC, useState, useEffect } from 'react';
import Grid from '@mui/material/Grid';
import ColorType from './ColorType';
import { ChromePicker } from 'react-color'
import { LightenDarkenColor } from 'lighten-darken-color';
import Color from './Color'
import './ThemeChanger.scss'


const ThemeChanger: FC = () => {
  const [color, setColor] = useState('')
  const [currentColorType, setCurrentColorType] = useState(Color.Primary)


  const changeCompleteHandler = (newColor): void => {
    setColor(newColor.hex);
  };

  const choiceColorTypeHandler = (color: Color): void => {
    setCurrentColorType(color)
  }


  useEffect(() => {
    const style = document.documentElement.style

    if (currentColorType === Color.Primary) {
      style.setProperty("--primary-color", color);
    }
    else if (currentColorType === Color.Secondary) {
      style.setProperty("--secondary-color", color);
      style.setProperty("--darken-secondary-color", LightenDarkenColor(color, -15));
    }
    else if (currentColorType === Color.Text) {
      style.setProperty("--text-color", color);
      style.setProperty("--darken-text-color", LightenDarkenColor(color, -15));
    }
  },
    [color])

  return (
    <Grid container justifyContent="center" alignItems="center">
      <Grid item xs={8}>
        <Grid container justifyContent="center">
          <ChromePicker
            className='theme-picker'
            color={color}
            onChange={changeCompleteHandler}
            disableAlpha
          />
        </Grid>
      </Grid>

      <Grid item xs={4}>
        <ColorType currentColorType={currentColorType} choiceColorType={choiceColorTypeHandler}></ColorType>
      </Grid>
    </Grid>
  )
}

export default ThemeChanger