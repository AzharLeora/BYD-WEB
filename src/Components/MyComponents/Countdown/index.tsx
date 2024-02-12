import { useEffect, useState } from 'react';
import './index.css';
import FlipCountdown from '@rumess/react-flip-countdown';
import 'aos/dist/aos.css'
import Aos from 'aos'
const Countdown = () => {

 useEffect(()=>{
    Aos.init({
      duration:1000,
      delay:100,
    })
 },[])
  
  return(

    <>
    <div className="flip-countdown-body d-flex align-items-center justify-content-center flex-column">

    <div className="flip-countdown-title text-center mb-5 ">
     Get Ready To Join With Us On Delightfull Day
    </div>
     <div className="flip-countdown-comp d-md-none"  data-aos='zoom-in-up' data-aos-once="false">
       <FlipCountdown
          hideYear
          size='small'
        
          endAt={'2024-02-26 09:00:00'} 
        /> 
     </div>   
     <div className="flip-countdown-comp d-none d-md-block"  data-aos='zoom-in-up' data-aos-once="false">
       <FlipCountdown
          hideYear
          endAt={'2024-02-26 09:00:00'} 
        /> 
     </div>   
    </div>
    </>
  )
}

export{Countdown}