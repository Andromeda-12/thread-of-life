import React, { FC } from 'react';
import './TitleSection.scss'

interface TitleSectionProps {
  children: React.ReactNode,
}

const TitleSection: FC<TitleSectionProps> = ({ children }) => (
  <span className='title_section'>
    {children}
  </span>
)

export default TitleSection