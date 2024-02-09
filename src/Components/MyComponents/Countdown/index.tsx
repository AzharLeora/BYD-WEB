// import { useEffect, useState } from 'react';
// import './index.css';
// import FlipCountdown from '@rumess/react-flip-countdown';
// import 'aos/dist/aos.css'
// import Aos from 'aos'
// const Countdown = () => {

//  useEffect(()=>{
//     Aos.init({
//       duration:1000,
//       delay:100,
//     })
//  },[])
  
//   return(

//     <>
//     <div className="flip-countdown-body d-flex align-items-center justify-content-center flex-column" data-aos='zoom-up'>

//     <div className="flip-countdown-title text-center mb-5 ">
//      Get Ready To Join With Us On Delightfull Day
//     </div>
//      <div className="flip-countdown-comp d-md-none">
//        <FlipCountdown
//           hideYear
//           size='small'
        
//           endAt={'2024-04-12 07:00:00'} 
//         /> 
//      </div>   
//      <div className="flip-countdown-comp d-none d-md-block">
//        <FlipCountdown
//           hideYear
//           endAt={'2024-04-12 07:00:00'} 
//         /> 
//      </div>   
//     </div>
//     </>
//   )
// }

// export{Countdown}


import React, { useEffect, useState } from 'react';
import './index.css';
import FlipCountdown from '@rumess/react-flip-countdown';
import 'aos/dist/aos.css';
import Confetti from "react-confetti"
import './PopEffect.css'
import Aos from 'aos';

const Countdown = () => {
  const [shouldRenderPop, setShouldRenderPop] = useState(false);

  const targetDate = new Date('2024-02-09T12:47:00');

  


  useEffect(() => {
    Aos.init({
      duration: 1000,
      delay: 100,
    });

    
  }, [ ]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      // console.log('This will run every second');
      const currentDate = new Date();
      console.log("currentDate",currentDate)

      if (currentDate >= targetDate) {
    
        setShouldRenderPop(true)
      };
    }, 1000);

    // Clean up the interval on component unmount
    return () => clearInterval(intervalId);
  }, []);

  // useEffect(() => {
  
  //   console.log(currentDate)
  //   if (currentDate >= targetDate) {
  
  //     setShouldRenderPop(true);
  //   }
  // });


  return (
    <>
      <div className="flip-countdown-body d-flex align-items-center justify-content-center flex-column" data-aos="zoom-up">
        <div className="flip-countdown-title text-center mb-5 ">
          Get Ready To Join With Us On Delightfull Day
        </div>
        <div className="flip-countdown-comp d-md-none">
          <FlipCountdown hideYear size="small" endAt={'2024-04-12 07:00:00'} />
        </div>
        <div className="flip-countdown-comp d-none d-md-block">
          <FlipCountdown hideYear endAt={'2024-04-12 07:00:00'} />
        </div>
        {shouldRenderPop && <PopComponent />}
      </div>
    </>
  );
};

const PopComponent = () => {
  return (
    <div >
       <Confetti/>
      <p>Love is Composed of a Single Soul Inhabiting into Two Bodies</p>
    </div>
  );
};

export { Countdown };
