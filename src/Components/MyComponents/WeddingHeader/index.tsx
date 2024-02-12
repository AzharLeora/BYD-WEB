import { useState, useEffect } from "react";
import { image } from "@Assets";
import "./index.css";
import { motion } from "framer-motion";

const WeddingHeader = () => {
  const [displayImage, setDisplayImage] = useState<number>(0);
  let arr: any[] = [image.h1Img];

  // useEffect(() => {
  //   let si = setInterval(() => {
  //     setDisplayImage((pre) => (pre + 1) % arr.length);
  //   }, 3000);
  //   return () => clearInterval(si);
  // }, [displayImage]);

  return (
    <div
      className="main-banner d-flex align-items-center justify-content-center"
     
    >
      {/* <motion. */}
      <img
        src={arr[displayImage]}
        alt="img"
        width={"64%"}
        className="headerImg"
        // initial={{ opacity: 0, scale: 0.5 }}
        // animate={{ opacity: 1, scale: 1 }}
        // transition={{
        //   duration: 3,
        //   delay: 0.5,
        //   ease: [0, 0.71, 0.2, 1.0],
        //}}
      />
    </div>
  );
};

export { WeddingHeader };
