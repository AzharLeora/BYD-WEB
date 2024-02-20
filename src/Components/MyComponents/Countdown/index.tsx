import FlipClockCountdown from "@leenguyen/react-flip-clock-countdown";
import "@leenguyen/react-flip-clock-countdown/dist/index.css";
import { useEffect, useState } from "react";
import "./index.css"

export default function Countdown() {
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });
  const dateTimeString = "2024-02-26T09:00:00";
  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
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
          to={new Date(dateTimeString).getTime()}
          labels={["DAYS", "HOURS", "MINS", "SECS"]}
          digitBlockStyle={{
            width: windowSize.width <= 426 ? 27 : 40,
            height: windowSize.width <= 426 ? 40 : 60,
            fontSize: windowSize.width <= 426 ? 12 : 30,
            fontFamily: "Montserrat , sans-serif",
          }}
          //  dividerStyle={{ color: "red", height: 1 }}
           separatorStyle={{ color: "transparent",size:0 }}
           
          duration={0.5}
        />
      </div>
    </section>
  );
}
export { Countdown };
