import { FC } from 'react';
import './TitleSection.scss'

const TitleSection: FC = ({ children }) => (
  <span className='title_section'>
    {children}
  </span>
)

export default TitleSection