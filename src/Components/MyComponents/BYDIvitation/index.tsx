import React from "react";
import { image } from "@Assets";
import "./index.css";

function BYDIvitation() {
  return (
    <>
      <div className="d-flex justify-content-center align-item-center BYDContainer">
          <img className="image-fluid bodyImage" src={image.bodyInvitation} />
      </div>
    </>
  );
}

export { BYDIvitation };
