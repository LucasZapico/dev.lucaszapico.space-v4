import { Global } from '@emotion/react';
import React from 'react';

const Fonts = () => { 
  return (
    
      <Global
      styles={`
   
      @font-face {
        font-family: 'Montserrat';
        src: url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700&display=swap');
        font-weight: 400;
        font-weight: 500;
        font-weight: 600;
        
      }
      @font-face {
        font-family: 'Rampart One';
        src: url('https://fonts.googleapis.com/css2?family=Rampart+One&display=swap');
        font-weight: 400;
        font-weight: 500;
        font-weight: 600;
        font-weight: 700;
         
      }
      @font-face {
        font-family: 'Open Sans';
        src: url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@500;800&display=swap');
        font-weight: 500;
      }`}
      />
  )
}

export default Fonts;
