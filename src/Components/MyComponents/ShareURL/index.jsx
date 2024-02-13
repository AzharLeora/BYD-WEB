import React from "react";
import "./index.css"
import { icons } from '@Assets'
import {

  // whatsapp
  WhatsappShareButton,
  
} from "react-share";


function SharePage() {
  const url = window.location;
  return (
    <div className="d-flex align-items-center justify-content-center">
  
      {/* whatsapp */}
      <div className="whatsapp box">
        <WhatsappShareButton url={url}>
        </WhatsappShareButton>
      </div>
 
    </div>
  );
}

export default SharePage;