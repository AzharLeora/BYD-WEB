import React, { useState, useEffect } from "react";
import { Button } from "@Components";

function UserLocation() {


 
 // const [userLocation, setUserLocation] = useState([]);
  useEffect(() => {
    const iframeData = document.getElementById("iframeId");
  // console.log(userLocation.longitude)

    
    const lat = 13.149283;
    const lon = 80.204105;
   // iframeData.src`https://www.google.com/maps/dir/13.4116921,80.1288901/13.149283,80.204105/@13.2808993,80.0011832,11z/data=!3m1!4b1!4m4!4m3!1m1!4e1!1m0?hl=en-US&entry=ttu`
    iframeData.src = `https://maps.google.com/maps?q=${lat},${lon}&hl=es;&output=embed`;

    handleLocation()
  },[]);
  const handleLocation =()=>{
    navigator.geolocation.getCurrentPosition(

      function(position ) {
      
      console.log(`Latitude: ${position.coords.latitude} and Longitude: ${position.coords.longitude}` )   
      },
      
      function(error) {
           console.error("Error getting location:", error.message)     
      }
      
      );  
  }
 handleLocation()
  
  return (
    <div style={{height:'100%',width:'100%'}}>
      <iframe style={{ height: "100%", width: "100%",border:'none' }} id="iframeId"></iframe>
    </div>
  );
}

export default UserLocation;
