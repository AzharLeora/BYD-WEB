import React, { useEffect, useState } from 'react';
import './index.css';
import FlipCountdown from '@rumess/react-flip-countdown';
import 'aos/dist/aos.css';
import Confetti from "react-confetti"
import Aos from 'aos';

const Countdown = () => {
  const [shouldRenderPop, setShouldRenderPop] = useState(false);

  const targetDate = new Date('2024-02-26T09:00:00');

  


  useEffect(() => {
    Aos.init({
      duration: 1000,
      delay: 100,
    });

    
  }, [ ]);

  useEffect(() => {
    const intervalId = setInterval(() => {
    
      const currentDate = new Date();
      console.log("currentDate",currentDate)

      if (currentDate >= targetDate) {
    
        setShouldRenderPop(true)
      };
    }, 1000);


    return () => clearInterval(intervalId);
  }, []);




  return (
    <>
    {shouldRenderPop? <PopComponent/>: <div className="flip-countdown-body d-flex align-items-center justify-content-center flex-column" >
        <div className="flip-countdown-title text-center mb-5 ">
          Get Ready To Join With Us On Delightfull Day
        </div>
        <div className="flip-countdown-comp d-md-none" >
          <FlipCountdown hideYear size="small" endAt={'2024-02-26 09:00:00'} />
        </div>
        <div className="flip-countdown-comp d-none d-md-block" >
          <FlipCountdown hideYear endAt={'2024-02-26 09:00:00'} />
        </div>
        
      </div>}
     
    </>
  );
};

const PopComponent = () => {
  return (
    <div >
       <Confetti style={{width:"100%"}}/>
       
      <p className='Wel-Msg'>Thank you for Celebrating our Marriage With us,Your Presence Means Lot!</p>
      
    </div>
  );
};

export { Countdown };