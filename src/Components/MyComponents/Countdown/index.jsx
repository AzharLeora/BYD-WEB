import './index.css';
import FlipCountdown from '@rumess/react-flip-countdown';
const Countdown = () => {
  return(
    <>
    <div className="flip-countdown-body d-flex align-items-center justify-content-center flex-column">

    <div className="flip-countdown-title  mb-5 ">
    Get Ready To Join With Us On Delightfull Day
    </div>
     <div className="flip-countdown-comp">
       <FlipCountdown
          hideYear
          theme="light"
          endAt={'2024-04-12 07:00:00'} 
        /> 
     </div>   
    </div>
    </>
  )
}

export{Countdown}