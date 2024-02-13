import React,{useEffect} from "react";
import { image } from "@Assets";
import "./index.css";
import 'aos/dist/aos.css'
  import Aos from 'aos'


function BYDInvitation() {
  useEffect(()=>{
    Aos.init({
      duration:1000,
      delay:100,
    });
},[])

  return (
    <>
      <div className="d-flex justify-content-center align-item-center BYDContainer" data-aos='zoom-in-up' data-aos-once="false">
          <img className="image-fluid bodyImage" src={image.bodyInvitation} />
      </div>
    </>
  );
}

export { BYDInvitation };
