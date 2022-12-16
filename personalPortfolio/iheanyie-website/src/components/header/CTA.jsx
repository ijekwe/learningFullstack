import React from 'react';
import CV from '../../assets/cv.pdf'



const CTA = () => {
  return (
    <div className='CTA'>
      <a href= {CV} download>Download CV</a>
      <a href="#contact">Let's Chat</a>
    </div>
  )
}

export default 'CTA'