import { useState, useEffect } from "react";
import { image } from "@Assets";
import "./index.css";

const WeddingFooter = () => {
  const [displayImage, setDisplayImage] = useState<number>(0);
  let arr :any[]= [image.f1Img, image.f2Img];

  useEffect(() => {
    let si = setInterval(() => {
    setDisplayImage(pre=>(pre+1)%arr.length)
    }, 3000);
    return () => clearInterval(si);
  }, [displayImage]);

  return (
    <>
      <div
        className="footer-banner d-flex align-items-center justify-content-center"
        style={{ height: "97%", width: "100%" }}
      >
        <img src={arr[displayImage]} alt="img" width={"35%"} className="footerImg" />
      </div>
      <div
        className="footer-text px-5 text-white py-1 d-flex justify-content-center"
        style={{  width: "100%" }}
      >
        <div className="d-flex align-items-center">
          <img
            className="my-logo"
            src={image.logo}
            alt="logo"
            height={"40vh"}
            width={"100%"}
          />{" "}
        </div>
        <div className="d-flex align-items-center text-dark">bookyour.day</div>
      </div>
    </>
  );
};

export { WeddingFooter };
