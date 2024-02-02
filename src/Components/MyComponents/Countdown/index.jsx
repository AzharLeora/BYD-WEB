// // import "./index.css";

// // import React, { useEffect, useState } from "react";

// // import { Progress } from "antd";

// // const Countdown = () => {
// //   const targetDate= new Date('2024-02-29')   
// //   const [days, setDays] = useState(0);
// //   const [hours, setHours] = useState(0);
// //   const [minutes, setMinutes] = useState(0);
// //   const [seconds, setSeconds] = useState(0);

// //   useEffect(() => {
// //     const updateCountdown = () => {
// //       const now = new Date().getTime();

// //       const difference = targetDate - now;

// //       if (difference <= 0) {
// //         clearInterval(intervalId);
// //         alert("Countdown expired");
// //         return;
// //       }

// //       const days = Math.floor(difference / (1000 * 60 * 60 * 24));
// //       const hours = Math.floor(
// //         (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
// //       );
// //       const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
// //       const seconds = Math.floor((difference % (1000 * 60)) / 1000);

// //       setDays(days);
// //       setHours(hours);
// //       setMinutes(minutes);
// //       setSeconds(seconds);
// //     };

// //     const intervalId = setInterval(updateCountdown, 1000);

// //     return () => clearInterval(intervalId);
// //   }, [targetDate]);
// //   return (
// //     <>
// //         <div className="bg-dark" style={{height:"100vh" ,width:"100%"}} >
// //         <div className="CountDown-Msg">Get Ready To Join With Us On Delightfull Day</div>
// //         <div className="row">
// //           <div className="col-3  InputNum d-flex align-items-center justify-content-center">
// //             <div className="  box-shaddow row d-flex align-items-center justify-content-center"  style={{width:'15vw',height:"20vh",borderRadius:"25px"}}>
// //             <div className="countown-num col-12 d-flex align-items-end justify-content-center" style={{height:'60% ',fontWeight:'bold'}}>
// //              {days}
// //             </div>
// //             <div className="countown-title col-12  d-flex align-items-center justify-content-center" style={{height:'40%'}}>
// //              <small>Days</small>
// //             </div>
// //           </div>

         
// //           </div>
        
// //       <div className="col-3 d-flex InputNum d-flex align-items-center justify-content-center" >
// //         <div className="box-shaddow row  d-flex align-items-center justify-content-center" style={{width:'15vw',height:"20vh",borderRadius:"25px"}}>
// //           <div className="countown-num col-12 d-flex align-items-end justify-content-center" style={{height:'60%', fontWeight:'bold'}}>
// //              {hours}
// //           </div>
// //           <div className="countown-title col-12  d-flex align-items-center justify-content-center" style={{height:'40%'}}>
// //              <small>Hours</small>
// //              </div>
// //         </div>
// //       </div>
// //       <div className="col-3 InputNum d-flex align-items-center justify-content-center">
// //         <div className="box-shaddow row d-flex align-items-center justify-content-center" style={{width:'15vw',height:"20vh",borderRadius:"25px"}}>

// //            <div className="countown-num col-12 d-flex align-items-end justify-content-center" style={{height:'60%',fontWeight:'bold'}}>
// //              {minutes}
// //           </div>
// //           <div className="countown-title col-12  d-flex align-items-center justify-content-center" style={{height:'40%'}}>
// //              <small>Minutes</small>
// //              </div>
// //         </div>
// //       </div>
// //       <div className="col-3 InputNum d-flex align-items-center justify-content-center">
// //         <div className="box-shaddow row d-flex align-items-center justify-content-center" style={{width:'15vw',height:"20vh",borderRadius:"25px"}}>

// //            <div className="countown-num col-12 d-flex align-items-end justify-content-center" style={{height:'60%',fontWeight:'bold'}}>
// //              {seconds}
// //           </div>
// //           <div className="countown-title col-12  d-flex align-items-center justify-content-center" style={{height:'40%'}}>
// //              <small>Seconds</small>
// //              </div>
// //         </div>
// //       </div>
// //       </div>
// //       </div>
// //     </>
// //   );
// // };
// // const targetDate= new Date('2024-02-29').getTime()
// // const App =()=> <Countdown targetDate={targetDate}/>
// // export { Countdown }
// // CountdownComponent.jsx

// import React, { useState, useEffect } from 'react';
// import './index.scss'; // Make sure to import your SASS file

// const Countdown = () => {
//   const [days, setDays] = useState(0);
//   const [hours, setHours] = useState(0);
//   const [minutes, setMinutes] = useState(0);
//   const [seconds, setSeconds] = useState(0);

//   useEffect(() => {
//     const calculateTimeRemaining = () => {
//       const now = new Date().getTime();
//       const difference = new Date(targetDate).getTime() - now;

//       const days = Math.floor(difference / (1000 * 60 * 60 * 24));
//       const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
//       const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
//       const seconds = Math.floor((difference % (1000 * 60)) / 1000);

//       setDays(days);
//       setHours(hours);
//       setMinutes(minutes);
//       setSeconds(seconds);
//     };

//     const interval = setInterval(() => {
//       calculateTimeRemaining();
//     }, 1000);

//     return () => clearInterval(interval);
//   }, [targetDate]);

//   return (
//     <div className="tick-flip">
//       <div className="tick-flip-card">
//         <div className="tick-flip-panel-front">
//           <div className="tick-flip-panel-text-wrapper">{days} Days</div>
//         </div>
//         <div className="tick-flip-panel-front">
//           <div className="tick-flip-panel-text-wrapper">{hours} Hours</div>
//         </div>
//         <div className="tick-flip-panel-front">
//           <div className="tick-flip-panel-text-wrapper">{minutes} Minutes</div>
//         </div>
//         <div className="tick-flip-panel-front">
//           <div className="tick-flip-panel-text-wrapper">{seconds} Seconds</div>
//         </div>
//       </div>
//     </div>
//   );
// };

// const targetDate= new Date('2024-02-29').getTime()
// const App =()=> <Countdown targetDate={targetDate}/>
// export  {Countdown};
import React, { Component } from 'react';


import FlipCountdown from '@rumess/react-flip-countdown';

const Countdown = ()=>{

  return(
    <>
        <FlipCountdown
          hideYear
          theme="light"
          endAt={'2024-12-12 01:26:58'} // Date/Time
        /> 
    </>
  )
}

export {Countdown}