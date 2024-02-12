import { useEffect, useState } from 'react';
import './index.css';
import FlipCountdown from '@rumess/react-flip-countdown';
import 'aos/dist/aos.css'
import Aos from 'aos'
const Countdown = () => {

 useEffect(()=>{
    Aos.init()
 },[])
  
  return(

    <>
    <div className="flip-countdown-body d-flex align-items-center justify-content-center flex-column" data-aos='zoom-in-up'>

    <div className="flip-countdown-title text-center mb-5 ">
     Get Ready To Join With Us On Delightfull Day
    </div>
     <div className="flip-countdown-comp d-md-none">
       <FlipCountdown
          hideYear
          size='small'
        
          endAt={'2024-04-12 07:00:00'} 
        /> 
     </div>   
     <div className="flip-countdown-comp d-none d-md-block">
       <FlipCountdown
          hideYear
          endAt={'2024-04-12 07:00:00'} 
        /> 
     </div>   
    </div>
    </>
  )
}

export{Countdown}