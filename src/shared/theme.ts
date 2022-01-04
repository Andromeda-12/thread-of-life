const defaultPrimaryColor = '#221c35'
const defaultSecondaryColor = '#ad24fd'
const defaultTextColor = '#fff'
const style = document.documentElement.style

const setTheme = () => {
  let color = localStorage.getItem("--primary-color")
  color ? style.setProperty("--primary-color", color) : style.setProperty("--secondary-color", defaultPrimaryColor)

  color = localStorage.getItem("--secondary-color")
  color ? style.setProperty("--secondary-color", color) : style.setProperty("--secondary-color", defaultSecondaryColor)

  color = localStorage.getItem("--darken-secondary-color")
  if (color) style.setProperty("--darken-secondary-color", color)


  color = localStorage.getItem("--text-color")
  color ? style.setProperty("--text-color", color) : style.setProperty("--text-color", defaultTextColor)

  color = localStorage.getItem("--darken-text-color")
  if (color) style.setProperty("--darken-text-color", color)
}

const resetTheme = () => {
  localStorage.removeItem('--primary-color')
  localStorage.removeItem('--secondary-color')
  localStorage.removeItem('--darken-secondary-color')
  localStorage.removeItem('--text-color')
  localStorage.removeItem('--darken-text-color')

  style.setProperty("--primary-color", defaultPrimaryColor);
  style.setProperty("--secondary-color", defaultSecondaryColor);
  style.setProperty("--darken-secondary-color", '');
  style.setProperty("--text-color", defaultTextColor);
  style.setProperty("--darken-text-color", '');
}

export { setTheme, resetTheme }