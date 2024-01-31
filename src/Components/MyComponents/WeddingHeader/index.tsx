import { useState, useEffect } from "react";
import { image } from "@Assets";
import "./index.css";

const WeddingHeader = () => {
  const [displayImage, setDisplayImage] = useState<number>(0);
  let arr: any[] = [image.h1Img, image.h2Img];
  useEffect(() => {
    let si = setInterval(() => {
      setDisplayImage((pre) => (pre + 1) % arr.length);
    }, 3000);
    return () => clearInterval(si);
  }, [displayImage]);

  return (
    <div
      className="main-banner d-flex align-items-center justify-content-center"
      style={{ height: "100%", width: "100%" }}
    >
      <img
        src={arr[displayImage]}
        alt="img"
        width={"40%"}
        className="headerImg"
      />
    </div>
  );
};
export { WeddingHeader };
