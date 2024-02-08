import React, { useState, useEffect } from "react";

function UserLocation() {
  useEffect(() => {
    const iframeData = document.getElementById("iframeId");
    const lat = 13.149283;
    const lon = 80.204105;
    iframeData.src = `https://maps.google.com/maps?q=${lat},${lon}&hl=es;&output=embed`;
  });
  return (
    <div style={{ height:"100%", width: "100%"}}>
      <iframe style={{  height:"100%",  width: "100%" ,border:"none" }}  id="iframeId" ></iframe>
    </div>
  );
}

export default UserLocation;
