import "./index.css";

import React, { useEffect, useState } from "react";

// import { Progress } from "antd";

const Countdown = ({  }) => {

  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const updateCountdown = () => {
      const now = new Date().getTime();

      const difference = targetDate - now;

      if (difference <= 0) {
        clearInterval(intervalId);
        alert("Countdown expired");
        return;
      }

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      setDays(days);
      setHours(hours);
      setMinutes(minutes);
      setSeconds(seconds);
    };

    const intervalId = setInterval(updateCountdown, 1000);

    return () => clearInterval(intervalId);
  }, [targetDate]);
  return (
    <>
        <div className="text-center text-dark-emphasis timer-bg d-flex flex-column justify-content-around" >
        <div className="CountDown-Msg pt-5">Get Ready To Join With Us On Delightfull Day</div>
        <div className="row countdown-setup m-0">

          {/* days */}
          <div className="col-3  InputNum d-flex align-items-center justify-content-center">
            <div className="  box-shaddow  row d-flex align-items-center justify-content-center">

            <div className="countown-num col-12 d-flex align-items-end justify-content-center" style={{height:'60% ',fontWeight:'bold'}}>
             {days}
            </div>
            <div className="countown-title col-12  d-flex align-items-center justify-content-center" style={{height:'40%'}}>
             <small>Days</small>
            </div>
          </div>

         
          </div>
        {/* hours */}
      <div className="col-3 d-flex InputNum d-flex align-items-center justify-content-center" >
        <div className="box-shaddow row  d-flex align-items-center justify-content-center" >

     
          <div className="countown-num col-12 d-flex align-items-end justify-content-center" style={{height:'60%', fontWeight:'bold'}}>
             {hours}
          </div>
          <div className="countown-title col-12  d-flex align-items-center justify-content-center" style={{height:'40%'}}>
             <small>Hours</small>
             </div>
        </div>
      </div>
      {/* minutes */}
      <div className="col-3 InputNum d-flex align-items-center justify-content-center">
        <div className="box-shaddow  row d-flex align-items-center justify-content-center" >
          
     
           <div className="countown-num col-12 d-flex align-items-end justify-content-center" style={{height:'60%',fontWeight:'bold'}}>
             {minutes}
          </div>
          <div className="countown-title col-12  d-flex align-items-center justify-content-center" style={{height:'40%'}}>
             <small>Minutes</small>
             </div>
        </div>
      </div>
      {/* seconds */}
      <div className="col-3 InputNum  d-flex align-items-center justify-content-center">
        <div className="box-shaddow  row d-flex align-items-center justify-content-center " >
 
           <div className="countown-num col-12 d-flex align-items-end justify-content-center" style={{height:'60%',fontWeight:'bold'}}>
            {seconds}
          </div>
          <div className="countown-title col-12  d-flex align-items-center justify-content-center" style={{height:'40%'}}>
             <small>Seconds</small>
             </div>
        </div>
      </div>
      </div>
      </div>


     {/* <div className="countdown-body text-center container-fluid">
      <div className="container countown-msg">
        Get Ready To Join With Us On Delightfull Day
      </div>
      <div className="row timer-desk">
        <div className="col-3 timer-desk-cell d-flex flex-column border">
          <div className="timer-num border p-3 ">
            {seconds}
          </div>
          <div className="timer-period border">
            Seconds
          </div>
        </div>
        <div className="col-3 timer-desk-cell"></div>
        <div className="col-3 timer-desk-cell"></div>
        <div className="col-3 timer-desk-cell"></div>
      </div>
      </div>   */}


    </>
  );
};
const targetDate=new Date('2024-04-21').getTime()
const App =()=> <Countdown targetDate={targetDate}/>
export { Countdown };