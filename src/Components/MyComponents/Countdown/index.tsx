import FlipClockCountdown from "@leenguyen/react-flip-clock-countdown";
import "@leenguyen/react-flip-clock-countdown/dist/index.css";
import { useEffect, useState } from "react";

export default function Countdown() {
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });
  const [givenDateTime,setGivenDateTime]=useState("2024-03-18T11:50:00")

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };
    const addDates = (dates,days) =>{
      const result = new Date(dates);
      result.setDate(result.getDate()+days);
      return result
    }
    const now = new Date();
    function getCurrentDateTime() {
      const now = new Date();
      const initialDate = new Date(givenDateTime)

      if(now>=initialDate){
        const updateDate = addDates(initialDate,10);
        const updateDateToString = updateDate.toISOString()
        setGivenDateTime(updateDateToString);
      }
    }
    const interval = setInterval(getCurrentDateTime, 1000);

    console.log(getCurrentDateTime(), "current date and time");

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize)
    };
  }, []);
  return (
    <section className="flex flex-col  justify-center items-center h-screen md:w-screen md:h-screen">
      <div className="bg-black/70 absolute w-full h-full"></div>
      {/* <img className="w-full h-full object-cover" src={Back} alt="" /> */}

      <div className="absolute flex flex-col items-center text-center">
        {/* <h1 className="text-[2rem] mb-[1rem]">Launching Soon</h1>
                <h3 className="font-light max-w-[300px] md:max-w-[450px] mb-[3rem]">Leave your email and we'll get across to you once we launch!!!</h3> */}

        <FlipClockCountdown
          labelStyle={{
            fontSize: windowSize.width < 425 ? 10 : 13,
            fontWeight: windowSize.width < 425 ? "bold" : "bolder",
            textTransform: "uppercase",
            color: " #801743 ",
          }}
          to={new Date(givenDateTime).getTime()}
          labels={["DAYS", "HOURS", "MINS", "SECS"]}
          digitBlockStyle={{
            width: windowSize.width <= 426 ? 20 : 40,
            height: windowSize.width <= 426 ? 40 : 60,
            fontSize: windowSize.width <= 426 ? 12 : 30,
            fontFamily: "Montserrat , sans-serif",
          }}
          // dividerStyle={{ color: "red", height: 1 }}
          //  separatorStyle={{ color: "grey", size: "6px" }}
          duration={0.5}
        />
      </div>
    </section>
  );
}
export { Countdown };
