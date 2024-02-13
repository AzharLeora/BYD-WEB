import React from "react";
import "./index.css"
import { icons } from '@Assets'
import {

  WhatsappIcon,
  // whatsapp
  WhatsappShareButton,
  
} from "react-share";
import { Button } from "@Components//Core";


function SharePage() {
  const url = window.location;
  return (
    <div className="d-flex align-items-center justify-content-center">
  
      {/* whatsapp */}
      <div className="whatsapp d-flex align-items-center justify-content-center">
        <WhatsappShareButton url={url}>
          
          <img src={icons.forward} className="forward-icon" style={{border:'none',outline:'none'}} />
        </WhatsappShareButton>
      </div>
 
    </div>
  );
}

export default SharePage;