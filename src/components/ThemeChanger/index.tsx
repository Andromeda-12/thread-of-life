import { FC, useState, useEffect } from 'react';
import Grid from '@mui/material/Grid';
import ColorType from './ColorType';
import { Button } from '@mui/material';
import { ChromePicker } from 'react-color'
import { LightenDarkenColor } from 'lighten-darken-color';
import { resetTheme } from '../../shared/theme'
import Color from './Color'
import './style.scss'


const ThemeChanger: FC = () => {
  const primaryColor = localStorage.getItem('--primary-color')
  const currentPrimaryColor = !!primaryColor ? primaryColor : ''
  const [color, setColor] = useState(currentPrimaryColor!)
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

      localStorage.setItem("--primary-color", color)
    }
    else if (currentColorType === Color.Secondary) {
      style.setProperty("--secondary-color", color);
      style.setProperty("--darken-secondary-color", LightenDarkenColor(color, -15));

      localStorage.setItem("--secondary-color", color)
      localStorage.setItem("--darken-secondary-color", LightenDarkenColor(color, -15))
    }
    else if (currentColorType === Color.Text) {
      style.setProperty("--text-color", color);
      style.setProperty("--darken-text-color", LightenDarkenColor(color, -15));

      localStorage.setItem("--text-color", color)
      localStorage.setItem("--darken-text-color", LightenDarkenColor(color, -15))
    }
  }, [color]) // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <Grid container justifyContent="center" alignItems="center">
      <Grid item xs={8}>
        <Grid container justifyContent="center">
          <ChromePicker
            className="theme-picker"
            color={color}
            onChange={changeCompleteHandler}
            disableAlpha
          />
        </Grid>
      </Grid>

      <Grid item xs={4}>
        <Grid container>
          <Grid item>
            <Button
              className="theme-button"
              variant="contained"
              onClick={resetTheme}
              style={{ marginBottom: 20 }}
            >
              Reset colors
            </Button>
          </Grid>
        </Grid>

        <Grid container>
          <Grid item>
            <ColorType
              currentColorType={currentColorType}
              choiceColorType={choiceColorTypeHandler}
            ></ColorType>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  )
}

export default ThemeChanger